import CardComp from "@/components/home/CardComp";
import DropDown from "@/components/home/dropdownNew";
import { Input } from "@/components/ui/input"
import { Import } from "lucide-react";

const Item = {
  name: "iphone",
  price: "1400",
  link: "link",
};

export default function Home() {
  return (
    <>
      {/*
        {/* <div className="text-3xl text-center m-2.5 text-">Can You Afford This</div> */}
      <div className="p-4 border-b-2 border-blue-500">
        <header className="bg-gray-50 p-6 border border-gray-200 rounded">
          <h1 className="text-2xl font-light text-gray-700 tracking-wider text-center">Can You Afford This?</h1>
        </header>
      </div>

      <div>
        <DropDown></DropDown>
        <Input type="dsa" placeholder="Enter amount" />
      </div>

        {/*usd  */}
        <div className="w-full">
          <CardComp name={Item.name} price={Item.price} link={Item.link} />
        </div>
    </>
  );
}
