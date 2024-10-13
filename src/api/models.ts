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
