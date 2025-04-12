import ProductCard from "@/components/home/ProductCard";
import DialogNew from "@/components/home/DialogNew";
import { products } from "@/data/products";
import { useState } from "react";
import { Product } from "@/lib/types";

export default function ProductGrid({
  currencySelected,
  category,
}: {
  currencySelected: string;
  category: string;
}) {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  console.log("category", category);
  const handleClick = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pl-2 pr-2 pb-2 bg-gray-50">
        {products
          .filter((product) => {
            if (!category || category === "Popular") return true; // show all if no filter
            return product.category === category;
          })
          .map((product, i) => (
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
          category={category}
          product={selectedProduct}
        />
      )}
    </>
  );
}
