import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        lobster: ["Lobster", "cursive"],
        caveat: ["Caveat", "cursive"],
      },
    },
  },
} satisfies Config;
