'use client';
import CardComp from "@/components/home/ProductCard";
import CardGrid from "@/components/home/CardGrid";
import DropDown from "@/components/home/dropdownNew";
import NumberInput from "@/components/home/NumberInput";
import { Input } from "@/components/ui/input"
import { Import } from "lucide-react";
import { useState } from "react";

const Item = {
  name: "iphone",
  price: "1400",
  link: "link",
};

export default function Home() {
  const [amount, setAmount] = useState("");
  return (
    <>
      {/* <div className="text-3xl text-center m-2.5 text-">Can You Afford This</div> */}
      <div className="p-4 border-b-2 border-blue-500">
        <header className="bg-gray-50 p-6 border border-gray-200 rounded">
          <h1 className="text-2xl font-light text-gray-700 tracking-wider text-center">Can You Afford This?</h1>
        </header>
      </div>

      <div className="flex w-full gap-0 p-2 border-blue-500">
        <div className="w-1/4 p-2 bg-gray-50"><DropDown></DropDown></div>
        {/* <Input type="number" placeholder="Enter amount" /> */}
        <div className="w-full p-2 bg-gray-50"><NumberInput value={amount} onChange={setAmount} /></div>
      </div>

      <div>
        <CardGrid></CardGrid>
      </div>

      {/* <div className="w-full">
        <CardComp name={Item.name} price={Item.price} link={Item.link} />
      </div> */}
    </>
  );
}
