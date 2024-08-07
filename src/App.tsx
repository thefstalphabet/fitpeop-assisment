import * as Styles from "./AppStyles";
import BigStatsCard from "./Components/BigStatsCard/BigStatsCard";
import Chart from "./Components/Chart/Chart";
import CustomersFeedback from "./Components/CustomersFeedback/CustomersFeedback";
import Header from "./Components/Header/Header";
import MoreOptions from "./Components/MoreOptions/MoreOptions";
import RecentOrders from "./Components/RecentOrders/RecentOrders";
import SideMenu from "./Components/SideMenu/SideMenu";
import SmallStatsCards from "./Components/SmallStatsCards/SmallStatsCards";

function App() {
  return (
    <div>
      <Header />
      <Styles.Container>
        <SideMenu />
        <Styles.Body>
          <h2>Dashboard</h2>
          <div className="statCards">
            <SmallStatsCards />
            <BigStatsCard />
            <Chart/>
            <MoreOptions/>
            <RecentOrders/>
            <CustomersFeedback/>
          </div>
        </Styles.Body>
      </Styles.Container>
    </div>
  );
}

export default App;
