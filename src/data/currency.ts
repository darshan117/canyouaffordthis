export const currencyToSymbolMap: Record<string, string> = {
  USD: "$",
  INR: "₹",
  CAD: "CA$",
  EUR: "€",
  JPY: "¥",
  RUB: "₽",
  CNY: "¥",
  AUD: "A$",
  AED: "د.إ",
};

export const categoryToEmi: Record<string, Record<string, number>> = {
  Phone: {
    USD: 11.66, // US personal loan average
    INR: 9.15, // India average lending rate
    CAD: 7.2, // Canada average lending rate
    EUR: 7.77, // Eurozone consumer loans
    JPY: 0.5, // Japan average lending rate
    RUB: 21, // Russia average lending rate
    CNY: 3.45, // China average lending rate
    AUD: 4.35, // Australia average lending rate
    AED: 5.25, // UAE average lending rate
  },
  Car: {
    USD: 7.71, // US auto loan average
    INR: 9.15,
    CAD: 7.2,
    EUR: 7.77,
    JPY: 0.5,
    RUB: 21,
    CNY: 3.45,
    AUD: 4.35,
    AED: 5.25,
  },
  Watch: {
    USD: 11.66,
    INR: 9.15,
    CAD: 7.2,
    EUR: 7.77,
    JPY: 0.5,
    RUB: 21,
    CNY: 3.45,
    AUD: 4.35,
    AED: 5.25,
  },
  "Luxury-Item": {
    USD: 11.66,
    INR: 9.15,
    CAD: 7.2,
    EUR: 7.77,
    JPY: 0.5,
    RUB: 21,
    CNY: 3.45,
    AUD: 4.35,
    AED: 5.25,
  },
  Popular: {
    USD: 11.66,
    INR: 9.15,
    CAD: 7.2,
    EUR: 7.77,
    JPY: 0.5,
    RUB: 21,
    CNY: 3.45,
    AUD: 4.35,
    AED: 5.25,
  },
};
export const categoryToTenure: Record<string, number> = {
  Popular: 12,
  Phone: 6,
  Car: 48,
  Watches: 6,
  Electronics: 8,
};
