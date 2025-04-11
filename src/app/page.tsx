"use client";
import CardGrid from "@/components/home/CardGrid";
import DropDown from "@/components/home/dropdownNew";
import NumberInput from "@/components/home/NumberInput";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");
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

      <div className="w-full justify-between bg-gray-50 flex gap-0 p-2 border-blue-500">
        <div className="flex w-2/3">
          <div className="w-full p-2 bg-gray-50">
            <DropDown value={currency} onChangeAction={setCurrency}></DropDown>
          </div>
          <div className="text-lg w-2/3 bg-gray-50 p-3">Enter your Salary:</div>
          <div className="w-full gap-2 p-2 bg-gray-50">
            <div className="flex-1 w-full">
              <NumberInput value={amount} onChangeAction={setAmount} />
            </div>
          </div>
        </div>
        {/* <Input type="number" placeholder="Enter amount" /> */}
        <div className="flex w-1/6 ">
          <div className="p-2 bg-gray-50">
            <Button>Change category</Button>
          </div>
        </div>
      </div>

      <div>
        <CardGrid currencySelected={currency} />
      </div>

      {/* <div className="w-full">
        <CardComp name={Item.name} price={Item.price} link={Item.link} />
      </div> */}
    </>
  );
}
