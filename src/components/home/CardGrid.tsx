import ProductCard from "@/components/home/ProductCard";
import DialogNew from "@/components/home/DialogNew";
import { products } from "@/data/products";
import { useState } from "react";
import { Product } from "@/lib/types";

export default function ProductGrid({
  currencySelected,
}: {
  currencySelected: string;
}) {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClick = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pl-2 pr-2">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            {...product}
            currencySelected={currencySelected}
            onClick={() => handleClick(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <DialogNew
          open={open}
          onOpenChange={setOpen}
          currencySelected={currencySelected}
          product={selectedProduct}
        />
      )}
    </>
  );
}
