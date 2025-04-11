import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/lib/types";

type DialogNewProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
};

export default function DialogNew({
  open,
  onOpenChange,
  product,
}: DialogNewProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{product.product_name}</DialogTitle>
        </DialogHeader>
        <p>{product.description}</p>
        <p className="text-green-600 font-medium">{product.price}</p>
      </DialogContent>
    </Dialog>
  );
}
