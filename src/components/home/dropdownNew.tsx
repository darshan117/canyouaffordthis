"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const countries = [
  { value: "united-states", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "brazil", label: "Brazil" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "germany", label: "Germany" },
  { value: "france", label: "France" },
  { value: "italy", label: "Italy" },
  { value: "russia", label: "Russia" },
  { value: "china", label: "China" },
  { value: "japan", label: "Japan" },
  { value: "india", label: "India" },
  { value: "australia", label: "Australia" },
  { value: "south-korea", label: "South Korea" },
  { value: "mexico", label: "Mexico" },
  { value: "saudi-arabia", label: "Saudi Arabia" },
  { value: "south-africa", label: "South Africa" },
  { value: "nigeria", label: "Nigeria" },
  { value: "indonesia", label: "Indonesia" },
  { value: "argentina", label: "Argentina" },
  { value: "turkey", label: "Turkey" }
]



export default function DropDown() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

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
            : "Select Country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Country..." />
          <CommandList>
            <CommandEmpty>Country Not found.</CommandEmpty>
            <CommandGroup>
              {countries.map((countries) => (
                <CommandItem
                  key={countries.value}
                  value={countries.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === countries.value ? "opacity-100" : "opacity-0"
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
  )
}
