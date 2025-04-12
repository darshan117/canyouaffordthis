import { StaticImageData } from "next/image";

export type Product = {
  image: string | StaticImageData;
  product_name: string;
  description: string;
  price: Record<string, string>;
  category: string;
};

export type DialogNewProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
};
