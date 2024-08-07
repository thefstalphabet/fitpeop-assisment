import {
  ISmallStatsCardItems,
  smallStatsCardItems,
} from "../../Config/SmallStatsCardItems";
import { Card } from "antd";
import * as Styles from "./SmallStatsCardsStyles";
import TradeIndicator from "../TradeIndicator/TradeIndicator";

export default function SmallStatsCards() {
  return (
    <Styles.Container>
      {smallStatsCardItems.map((item: ISmallStatsCardItems) => {
        const { icon, value, title, inProfit, tradeValue } = item;
        return (
          <Card bordered={false} style={{ minWidth: 196}} className="card">
            {icon}
            <h4>{title}</h4>
            <div className="trade-stats">
              <span className="value">{value}</span>
              <TradeIndicator
                color={inProfit ? "green" : "red"}
                inProfit={inProfit}
                tradeValue={tradeValue}
              />
            </div>
          </Card>
        );
      })}
    </Styles.Container>
  );
}
