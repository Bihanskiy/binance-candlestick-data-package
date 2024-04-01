import { FinancialData } from "./types";

const apiUrl =
  "https://data-api.binance.vision/api/v3/uiKlines?symbol=ETHBTC&interval=1d&startTime=1709244000000";

export const getFinancialData = () =>
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data: FinancialData[]) => data);
