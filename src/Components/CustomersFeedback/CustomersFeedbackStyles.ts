import styled from "styled-components";
import { componentBgColor } from "../../Config/GlobalVariables";
export const Container = styled.div`
    background-color: ${componentBgColor};
    padding: 1rem;
    overflow-y: scroll;
    height: 24rem;
    display: grid;
    gap: 1rem;
    .feedbacks{
        display: grid;
        gap: 1rem;
        .feedback{
            display: grid;
            gap: 0.5rem;
            .feedback-header{
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }
    }
`