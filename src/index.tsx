import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{
          token: {
            colorPrimary: "#7394FD",
            borderRadius: 5,
            fontFamily:"Segoe UI Symbol",
            fontSize: 14,
            colorBgContainer: "#1F2029",
            colorText: "#ffffff",
          },
        }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
