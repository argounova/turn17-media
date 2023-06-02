import styled from "@emotion/styled"

export const TemplateStyles = styled.div`
.template-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 95vw;
    height: fit-content;
    margin-bottom: 30px;
    background-color: var(--white);
    box-shadow: 1px 3px 3px var(--char3);

    @media (min-width: 999px) {
        width: 60vw;
    }
}
`