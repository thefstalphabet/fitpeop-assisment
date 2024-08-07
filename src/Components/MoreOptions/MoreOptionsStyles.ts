import styled from "styled-components";
import { componentBgColor } from "../../Config/GlobalVariables";
export const Container = styled.div`
    .option{
        background-color: ${componentBgColor};
        padding: 26px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .option-header{
            display: flex;
            gap: 1rem;
            align-items: center;
        }
        .icon{
            cursor: pointer;
            font-size: xx-large;
            opacity: 0.5;
        }
    }
`