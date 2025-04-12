// components/NumberInput.tsx
// "use client";

// import React from "react";
// import { Input } from "@/components/ui/input";

// interface NumberInputProps {
//   value: string;
//   onChangeAction: (value: string) => void;
//   placeholder?: string;
// }

// const NumberInput: React.FC<NumberInputProps> = ({
//   value,
//   onChangeAction,
//   placeholder,
// }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const val = e.target.value;
//     if (/^\d*\.?\d{0,2}$/.test(val)) {
//       onChangeAction(val);
//     }
//   };

//   return (
//     <Input
//       type="text"
//       inputMode="decimal"
//       placeholder={placeholder || "0.00"}
//       value={value}
//       onChange={handleChange}
//     />
//   );
// };

// export default NumberInput;

"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Check, Pencil } from "lucide-react"; // icons for lock/unlock

interface NumberInputProps {
  value: string;
  onChangeAction: (value: string) => void;
  placeholder?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChangeAction,
  placeholder,
}) => {
  const [locked, setLocked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(val)) {
      onChangeAction(val);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLocked(true);
    }
  };

  const handleLock = () => {
    setLocked(true);
  };

  const handleUnlock = () => {
    setLocked(false);
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        inputMode="decimal"
        placeholder={placeholder || "0.00"}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={locked}
        className={locked ? "opacity-70 cursor-not-allowed" : ""}
      />
      {locked ? (
        <Pencil className="cursor-pointer" size={20} onClick={handleUnlock} />
      ) : (
        <Check className="cursor-pointer" size={20} onClick={handleLock} />
      )}
    </div>
  );
};

export default NumberInput;
