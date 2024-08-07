import React from "react";
import * as Styles from "./MoreOptionsStyles";
import { AimOutlined, ReadOutlined, RightCircleFilled, SmileOutlined } from "@ant-design/icons";

export default function MoreOptions() {
  const iconbg = {
    backgroundColor: "#603236",
    padding: "26px",
    borderRadius: "35px",
  };
  const options = [
    {
      name: "Goals",
      icon: <AimOutlined style={iconbg} />,
    },
    {
      name: "Popular Dishes",
      icon: <SmileOutlined style={iconbg} />,
    },
    {
      name: "Menus",
      icon: <ReadOutlined style={iconbg} />,
    },
  ];
  return (
    <Styles.Container>
      {options.map((option: any) => {
        const { name, icon } = option;
        return (
          <div className="option">
            <div className="option-header">
              {icon}
              <h3>{name}</h3>
            </div>
            <RightCircleFilled className="icon"/>
          </div>
        );
      })}
    </Styles.Container>
  );
}
