import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { responses_p, responses_n } from "@/data/responses";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number,
): number {
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    return principal / tenureMonths;
  }

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  return parseFloat(emi.toFixed(2));
}

export function canYou(minReqIncome: number, yourIncome: number) {
  if (minReqIncome > yourIncome) {
    return [responses_n[Math.floor(Math.random() * responses_n.length)], true];
  }
  return [responses_p[Math.floor(Math.random() * responses_p.length)], false];
}

export function minReqIncome(
  cost: number,
  downpayment: number,
  percentage: number,
): number {
  // ((x - 20%x) ) * 100 / 10 =
  const d_payment = (downpayment / 100) * cost;
  const per = percentage / 100;
  const res = (cost - d_payment) / (per * 12);
  console.log(d_payment, per, res, cost);
  return res;
  // return parseFloat(
  //   ((cost - (downpayment / 100) * cost) / (percentage / 100) / 12).toFixed(2)
  // );
}
