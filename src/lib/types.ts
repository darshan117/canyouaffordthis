export type Product = {
  image: string;
  product_name: string;
  description: string;
  price: string;
};

export type DialogNewProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
};