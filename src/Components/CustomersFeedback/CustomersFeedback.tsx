import React from "react";
import * as Styles from "./CustomersFeedbackStyles";
import { Avatar, Divider, Rate } from "antd";

export default function CustomersFeedback() {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      stars: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perspiciatis? Unde repudiandae perspiciatis harum architecto mollitia quibusdam suscipit eum exercitationem temporibus repellat veniam quia, doloremque in. Libero et veritatis maiores.",
    },
    {
      name: "Dianne Russell",
      stars: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perspiciatis? Unde repudiandae perspiciatis harum architecto mollitia quibusdam suscipit eum exercitationem temporibus repellat veniam quia, doloremque in. Libero et veritatis maiores.",
    },
    {
      name: "Devon Lane",
      stars: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perspiciatis? Unde repudiandae perspiciatis harum architecto mollitia quibusdam suscipit eum exercitationem temporibus repellat veniam quia, doloremque in. Libero et veritatis maiores.",
    },
    {
      name: "Jenny Wilson",
      stars: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perspiciatis? Unde repudiandae perspiciatis harum architecto mollitia quibusdam suscipit eum exercitationem temporibus repellat veniam quia, doloremque in. Libero et veritatis maiores.",
    },
    {
      name: "Dianne Russell",
      stars: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perspiciatis? Unde repudiandae perspiciatis harum architecto mollitia quibusdam suscipit eum exercitationem temporibus repellat veniam quia, doloremque in. Libero et veritatis maiores.",
    },
    {
      name: "Devon Lane",
      stars: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perspiciatis? Unde repudiandae perspiciatis harum architecto mollitia quibusdam suscipit eum exercitationem temporibus repellat veniam quia, doloremque in. Libero et veritatis maiores.",
    },
  ];
  return (
    <Styles.Container>
      <h3>Customer's Feedback</h3>
      <div className="feedbacks">
        {feedbacks.map((feedback: any) => {
          const { name, stars, text } = feedback;
          return (
            <div className="feedback">
              <div className="feedback-header">
                <Avatar
                  style={{ backgroundColor: "gray", verticalAlign: "middle" }}
                  size="large"
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                />
                <h4>{name}</h4>
              </div>
              <Rate disabled defaultValue={stars} />
              <p>{text}</p>
              <Divider style={{margin: "10px 0 0 0"}}/>
            </div>
          );
        })}
      </div>
    </Styles.Container>
  );
}
