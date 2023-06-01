import styled from "@emotion/styled"

export const ScheduleStyles = styled.div`
.schedule-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 95vw;
    height: fit-content;
    background-color: var(--white);
    box-shadow: 1px 3px 3px var(--char3);

    @media (min-width: 999px) {
        align-items: flex-start;
        flex-direction: row;
        width: 60vw;
    }
}

.calendly-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (min-width: 999px) {
        justify-content: flex-end;
        width: fit-content;
    }
}
`