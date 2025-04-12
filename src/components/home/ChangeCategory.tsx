"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const countries = [
  { value: "Popular", label: "Popular" },
  { value: "Phone", label: "Phones" },
  { value: "Car", label: "Cars" },
  { value: "Luxury-Item", label: "Luxury-items" },
];

interface ChangeCategoryProps {
  value: string;
  onChangeAction: (value: string) => void;
}

export default function ChangeCategory({
  value,
  onChangeAction,
}: ChangeCategoryProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? countries.find((countries) => countries.value === value)?.label
            : "Select Category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Change Category" />
          <CommandList>
            <CommandEmpty>Category Not found.</CommandEmpty>
            <CommandGroup>
              {countries.map((countries) => (
                <CommandItem
                  key={countries.value}
                  value={countries.value}
                  onSelect={(currentValue) => {
                    onChangeAction(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === countries.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {countries.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
