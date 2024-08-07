import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import React from "react";

export default function TradeIndicator(props: {
  color: string;
  inProfit: boolean;
  tradeValue: number;
}) {
  const { color, inProfit, tradeValue } = props;
  return (
    <div>
      {inProfit ? (
        <CaretUpOutlined style={{ color: color }} />
      ) : (
        <CaretDownOutlined style={{ color: color }} />
      )}
      <span  style={{ color: color, fontSize: "20px" }}>
        {tradeValue}%
      </span>
    </div>
  );
}
