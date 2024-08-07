import styled from "styled-components";
import { bgColor } from "./Config/GlobalVariables";

export const Container = styled.div`
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #888; 
    }
    ::-webkit-scrollbar-thumb {
        background: #f1f1f1; 
    }
    h2, p, h1{
        margin: 0;
    }
    :where(.css-dev-only-do-not-override-1ez8bw2).ant-card .ant-card-body{
        padding: 10px;
    }
    display: flex;
    gap: 1rem;
    background-color: ${bgColor};
    color: aliceblue;
`;
export const Body = styled.div`
    overflow-y: scroll;
    height: 100vh;
    width: 100vw;
    padding: 0 1rem 1rem 0;
    h2{
        padding: 1rem 0;
    }
    .statCards{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        @media (max-width: 1390px) {
            grid-template-columns: 1fr;
        }
    }
`;
