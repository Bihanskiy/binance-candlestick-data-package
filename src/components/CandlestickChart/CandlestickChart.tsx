import React, { useEffect, useMemo, useState, forwardRef } from "react";
import 'chartjs-adapter-luxon';

import { OhlcElement, OhlcController, CandlestickElement, CandlestickController } from 'chartjs-chart-financial';
import zoomPlugin from 'chartjs-plugin-zoom';
import Chart from "chart.js/auto";
import { BarChart, } from "./BarChart";

import { getFinancialData } from "./api";
import { FinancialData } from "./types";
import Spinner from "../../ui/Spinner";

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController, zoomPlugin);

export type CandlestickProps = React.HTMLAttributes<HTMLDivElement> & {

}

const Candlestick = forwardRef<HTMLDivElement, CandlestickProps>(
  (
    {
      ...props
    },
    ref
  ): JSX.Element => {
    const [data, setData] = useState<FinancialData[]>();

    useEffect(() => {
      async function runEffect() {
        const data = await getFinancialData();
        setData(data);
      }

      runEffect();
    }, []);

    const formattedData = useMemo(
      () =>
        data?.map((data) =>
        ({
          x: data[0],
          o: data[1],
          h: data[2],
          l: data[3],
          c: data[4],
        })
        ),
      [data]
    );

    let config = {
      datasets: [
        {
          label: 'Ethereum / Bitcoin',
          data: formattedData,
          type: "candlestick",
        }
      ]
    };

    return (
      <div
        ref={ref}
        {...props}
      >
        {
          !data ?
            <Spinner className="mx-auto" size="lg"/> :
            <BarChart chartData={config} />
        }
      </div>
    );
  }
)

export default Candlestick;