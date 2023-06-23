import styled from "@emotion/styled"

export const SiteExample = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: var(--char5);
    padding-bottom: 50px;

    .btn {
        position: absolute;
        z-index: 10;
        background-color: var(--mb1-2);
        color: var(--char5);
        width: 75%;
        max-width: 340px;
        font-size: var(--p);
        text-align: center;

        &:hover {
            background-color: var(--mb1-3);
        }
    }

    .btn-anim {
        position: absolute;

    }

    .common {
        color: var(--mb1-1);
        text-align: center;
        background-color: var(--white);
        width: 90vw;
        height: auto;
        box-shadow: 2px 3px 2px var(--char2);
    }

    @media(min-width:1180px) {
        .common {
            width: 40vw;
        }

        .btn {
            width: 400px;
        }
    }
`

