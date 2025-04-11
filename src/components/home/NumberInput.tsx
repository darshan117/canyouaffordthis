// components/NumberInput.tsx
"use client";

import React from "react";
import { Input } from "@/components/ui/input";

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, placeholder }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <Input
      type="text"
      inputMode="decimal"
      placeholder={placeholder || "0.00"}
      value={value}
      onChange={handleChange}
    />
  );
};

export default NumberInput;