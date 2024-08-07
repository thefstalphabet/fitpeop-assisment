import * as Styles from "./BigStatsCardStyles";
import { Card, Progress } from "antd";
import TradeIndicator from "../TradeIndicator/TradeIndicator";

export default function BigStatsCard() {
  return (
    <Styles.Container>
      <Card bordered={false} className="card">
        <h3>Net Profit</h3>
        <div className="data">
          <div>
            <h1>${6759.25}</h1>
            <TradeIndicator color="red" inProfit={true} tradeValue={3} />
          </div>
          <div className="progress">
            <Progress strokeWidth={13} trailColor="#2c3463" type="circle" size={90} percent={70} />
            <p>*The values here has been rounded off.</p>
          </div>
        </div>
      </Card>
    </Styles.Container>
  );
}
