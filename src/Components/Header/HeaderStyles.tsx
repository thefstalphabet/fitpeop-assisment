import styled from "styled-components";
import {
  actionBgcolor,
  componentBgColor,
  iconColor,
  themeColor,
} from "../../Config/GlobalVariables";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${componentBgColor};
  .logo {
    font-size: 25px;
    color: ${themeColor};
    margin-right: 1rem;
  }
  .icon {
    font-size: 15px;
  }
  div:nth-child(1) {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  div:nth-child(2) {
    display: flex;
    gap: 2rem;
    .bg {
      background-color: ${actionBgcolor};
      padding: 10px;
      border-radius: 19px;
      color: ${iconColor};
    }
  }
`;
