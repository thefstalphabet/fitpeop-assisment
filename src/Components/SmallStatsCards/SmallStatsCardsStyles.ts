import styled from "styled-components";
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    @media (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);
        }
    .card{
        .icon{
            font-size: 30px;
            margin-bottom: 1rem;
            background-color: #603236;
            padding: 1rem;
            border-radius: 10px;
        }
        .trade-stats{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .value{
                font-size: 30px;
                font-weight: 900;
            }
        }
    }
`