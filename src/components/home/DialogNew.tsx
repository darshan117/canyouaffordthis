import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/lib/types";
import Image from "next/image";
import { minReqIncome, canYou } from "@/lib/utils";

type DialogNewProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
  currencySelected: string;
};

export default function DialogNew({
  open,
  onOpenChange,
  product,
  currencySelected,
}: DialogNewProps) {
  const min_Req_Income = minReqIncome(
    parseInt(product.price[currencySelected]),
    20,
    10
  );
  const can_you = canYou(min_Req_Income, 10000);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="grid grid-cols-2">
          <div>
            {" "}
            <Image
              src={product.image}
              width={400}
              height={400}
              alt="image"
              className="h-auto mx-auto"
            />{" "}
          </div>

          <div>
            <DialogHeader>
              <DialogTitle>{product.product_name}</DialogTitle>
            </DialogHeader>
            <p className="text-green-600 font-medium">
              {product.price[currencySelected]}
            </p>
            <br />
            <p>Possible EMI : {product.description}</p>
            <p>Min Required Income : {min_Req_Income.toFixed(2)} </p>
            <p>fact {}</p>
            <br />
            {can_you[1] ? (
              <p className="bg-gray-100 text-red-700 text-center p-1">
                {can_you[0]}
              </p>
            ) : (
              <p className="bg-gray-100 text-green-700 text-center p-1">
                {can_you[0]}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
