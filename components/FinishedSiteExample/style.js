import styled from "@emotion/styled"

export const SiteExample = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: var(--mb1-1);
    padding-bottom: 50px;

    .common {
        color: var(--mb1-1);
        text-align: center;
        background-color: var(--char0);
        width: 90vw;
        height: auto;
        box-shadow: 2px 3px 2px var(--char2);
    }

    @media(min-width:1180px) {
        .common {
            width: 50vw;
        }
    }
`

