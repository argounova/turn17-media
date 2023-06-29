import styled from "@emotion/styled"

export const OptionsStyles = styled.div`
.options-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 90vw;
    height: fit-content;
    margin-bottom: 30px;
    padding: 15px 45px;
    background-color: var(--white);
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    border-radius: 5px;

    @media (min-width: 999px) {
        width: 60vw;
    }
}


`