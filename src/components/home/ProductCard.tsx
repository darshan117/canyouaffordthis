import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  image: string;
  product_name: string;
  description: string;
  price: string;
  onClick?: () => void;
};

export default function ProductCard({
  image,
  product_name,
  description,
  price,
  onClick,
}: ProductCardProps) {
  return (
    <Card className="rounded-none">
      <CardContent className="p-4 space-y-3">
        <img
          src={image}
          alt={product_name}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="text-lg font-semibold">{product_name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-base font-medium text-green-600">{price}</span>
          <Button onClick={onClick}>Can You?</Button>
        </div>
      </CardContent>
    </Card>
  );
}
