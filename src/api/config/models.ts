import { MovementTypes } from "src/lib/enums";

export enum CurrencySelectors {
  USDBRL = "USDBRL",
  BTCBRL = "BTCBRL",
}

export type AwesomeApiItemResponse = {
  [key in keyof typeof CurrencySelectors]: {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
  };
};

export type AwesomeApiHistoryResponse = {
  varBid: string;
  high: string;
  low: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
};

export type JWTToken = {
  access: string;
  refresh: string;
  name: string;
};

export type InvestmentResponse = {
  category: string;
  created_at: string;
  id: number;
  name: string;
  types: string;
  updated_at: string;
  user: number;
  value: string;
};

export type InvestmentBodyRequest = {
  value: number;
  name: string;
  types: "CRYPTO" | "STOCKS" | "FUND";
  category: string;
};

export type MovementResponse = {
  id: number;
  value: string;
  name: string;
  is_recurrent: boolean;
  types: string;
  category: string;
  created_at: string;
  updated_at: string;
  user: number;
};

export type MovementBodyRequest = {
  value: number;
  name: string;
  type: MovementTypes;
  category: string;
  is_recurrent: boolean;
};
