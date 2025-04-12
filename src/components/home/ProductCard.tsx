import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { currencyToSymbolMap } from "@/data/currency";
type ProductCardProps = {
  image: string | StaticImageData;
  product_name: string;
  description: string;
  price: Record<string, string>;
  category: string;
  currencySelected: string;
  onClick?: () => void;
};

export default function ProductCard({
  image,
  product_name,
  description,
  price,
  category,
  currencySelected,
  onClick,
}: ProductCardProps) {
  return (
    <Card className="rounded-none">
      <CardContent className="p-4 space-y-3">
        <Image
          src={image}
          width={300}
          height={300}
          alt="image"
          className="mx-auto"
        />
        <h3 className="text-lg font-semibold">{product_name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-base font-caveat text-green-600">
            {currencyToSymbolMap[currencySelected]} {price[currencySelected]}
          </span>
          <Button onClick={onClick}>Can You?</Button>
        </div>
      </CardContent>
    </Card>
  );
}
