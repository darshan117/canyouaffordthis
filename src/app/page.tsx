"use client";
import CardGrid from "@/components/home/CardGrid";
import ChangeCategory from "@/components/home/ChangeCategory";
import DropDown from "@/components/home/dropdownNew";
import NumberInput from "@/components/home/NumberInput";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const [category, setCategory] = useState<string>("Popular");
  return (
    <>
      {/* <div className="text-3xl text-center m-2.5 text-">Can You Afford This</div> */}
      <div className="p-4 border-b-2 border-blue-500">
        <header className="bg-gray-50 p-6 border border-gray-200 rounded">
          <h1 className="text-2xl font-light text-gray-700 tracking-wider text-center">
            Can You Afford This?
          </h1>
        </header>
      </div>

      <div className="w-full md:justify-between bg-gray-50 lg:flex gap-0 p-2 border-blue-500">
        <div className="md:flex lg:w-2/3 w-full">
          <div className="lg:w-1/3 md:w-full p-2 bg-gray-50">
            <DropDown value={currency} onChangeAction={setCurrency}></DropDown>
          </div>
          <div className="text-md lg:w-1/4 md:w-2/3 bg-gray-50 p-2">
            Enter your Salary:
          </div>
          <div className="lg:w-1/2 w-full gap-2 p-2 bg-gray-50">
            <div className="md:flex-1 w-full">
              {/* on enter do something */}
              <NumberInput value={amount} onChangeAction={setAmount} />
            </div>
          </div>
        </div>
        {/* <Input type="number" placeholder="Enter amount" /> */}
        <div className="md:flex w-1/4 ">
          <div className="p-2 bg-gray-50">
            <ChangeCategory value={category} onChangeAction={setCategory} />
          </div>
        </div>
      </div>

      <div>
        <CardGrid
          currencySelected={currency}
          category={category}
          amount={amount}
        />
      </div>

      {/* <div className="w-full">
        <CardComp name={Item.name} price={Item.price} link={Item.link} />
      </div> */}
    </>
  );
}
