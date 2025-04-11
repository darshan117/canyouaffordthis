import ProductCard from "@/components/home/ProductCard";

const products = [
  {
    image: "/images/shoe1.jpg",
    product_name: "Cool Sneakers",
    description: "Lightweight running shoes with breathable mesh.",
    price: "$79.99",
    category: ""
  },
  {
    image: "/images/shoe2.jpg",
    product_name: "Classic Trainers",
    description: "Retro-inspired sneakers with modern cushioning.",
    price: "$89.99",
  },
  {
    image: "/images/shoe2.jpg",
    product_name: "Classic Trainers",
    description: "Retro-inspired sneakers with modern cushioning.",
    price: "$89.99",
  },
  {
    image: "/images/shoe2.jpg",
    product_name: "Classic Trainers",
    description: "Retro-inspired sneakers with modern cushioning.",
    price: "$89.99",
  },
  {
    image: "/images/shoe2.jpg",
    product_name: "Classic Trainers",
    description: "Retro-inspired sneakers with modern cushioning.",
    price: "$89.99",
  },
  {
    image: "/images/shoe2.jpg",
    product_name: "Classic Trainers",
    description: "Retro-inspired sneakers with modern cushioning.",
    price: "$89.99",
  },
  {
    image: "/images/shoe2.jpg",
    product_name: "Classic Trainers",
    description: "Retro-inspired sneakers with modern cushioning.",
    price: "$89.99",
  },
  {
    image: "/images/shoe2.jpg",
    product_name: "Classic Trainers",
    description: "Retro-inspired sneakers with modern cushioning.",
    price: "$89.99",
  },
  {
    image: "/images/shoe2.jpg",
    product_name: "Classic Trainers",
    description: "Retro-inspired sneakers with modern cushioning.",
    price: "$89.99",
  },
  {
    image: "/images/shoe2.jpg",
    product_name: "Classic Trainers",
    description: "Retro-inspired sneakers with modern cushioning.",
    price: "$89.99",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pl-2 pr-2">
      {products.map((product, i) => (
        <ProductCard
          key={i}
          {...product}
          onClick={() => alert(`Added ${product.product_name} to cart`)}
        />
      ))}
    </div>
  );
}