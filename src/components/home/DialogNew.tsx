import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "@/lib/types";
import Image from "next/image";
import { minReqIncome, canYou, calculateEMI } from "@/lib/utils";
import {
  categoryToEmi,
  categoryToTenure,
  currencyToSymbolMap,
} from "@/data/currency";

type DialogNewProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
  category: string;
  currencySelected: string;
  amount: string;
};

export default function DialogNew({
  open,
  onOpenChange,
  product,
  category,
  amount,
  currencySelected,
}: DialogNewProps) {
  const priceWithCommas = product.price[currencySelected]; // e.g., "1,999"
  const priceWithoutCommas = priceWithCommas.replace(/,/g, "");
  // const d_payment = (20 / 100) * parseInt(priceWithoutCommas); // 20 for 20 percent
  // const emi_without_dpayment = parseInt(priceWithoutCommas) - d_payment;

  console.log(categoryToTenure[category], "category");
  const emi = calculateEMI(
    parseInt(priceWithoutCommas),
    categoryToEmi[category][currencySelected],
    categoryToTenure[category]
  );
  console.log("emi is", emi);
  const min_Req_Income = minReqIncome(parseInt(priceWithoutCommas), 20, 10);
  const can_you = canYou(min_Req_Income, parseInt(amount));
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="grid grid-cols-2">
          <div className="mx-auto my-auto p-3">
            {" "}
            <Image
              src={product.image}
              width={400}
              height={400}
              alt="image"
              className="h-auto mx-auto"
            />{" "}
          </div>

          <div className="space-y-4 p-4">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-gray-800">
                {product.product_name}
              </DialogTitle>
            </DialogHeader>

            <p className="text-xl text-green-600 font-bold">
              {currencyToSymbolMap[currencySelected]}{" "}
              {product.price[currencySelected]}
            </p>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* EMI & Income Info */}
            <div className="bg-gray-50 border p-2 space-y-3 text-sm text-gray-800">
              <div className="">
                <span className="font-semibold">💳 Possible EMI:</span> <br />
                <span className="font-medium">
                  {currencyToSymbolMap[currencySelected]} {emi}
                </span>
              </div>
              <div className="">
                <span className="font-semibold">📈 Min Required Income:</span>
                <br />
                <span className="font-medium">
                  {currencyToSymbolMap[currencySelected]}{" "}
                  {min_Req_Income.toFixed(0)} /month
                </span>
              </div>
            </div>

            {/* Eligibility Result */}
            <div
              className={`text-center p-2 text-sm font-medium ${
                can_you[1]
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {can_you[0]}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
