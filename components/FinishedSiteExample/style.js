import styled from "@emotion/styled"

export const SiteExample = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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

    .image-example {
        width: 550px;
        height: auto;

        @media (min-width: 666px) {
            width: 100%;
        }
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

