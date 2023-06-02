import styled from "@emotion/styled"

export const TemplateStyles = styled.div`
.template-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 95vw;
    height: 60vh;
    margin-bottom: 30px;
    background-color: var(--white);
    box-shadow: 1px 3px 3px var(--char3);

    @media (min-width: 999px) {
        align-items: flex-start;
        flex-direction: row;
        width: 60vw;
    }
}
`