import styled from "@emotion/styled"

export const ContactStyles = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    background-color: var(--char4);
    width: 100vw;
    height: fit-content;

    @media (min-width: 821px) {
        flex-direction: row;
        justify-content: center;
        background-image: url(https://turn17media-main.s3.amazonaws.com/track-abstract.png); 
        background-repeat: no-repeat;
        background-size: cover;

    }

    .contact-form {
        display: flex; 
        flex-direction: column; 
        align-items: center;
        background-color: var(--white);
        opacity: 0.98; 
        width: 100%;
        height: 400px;
        padding: 20px;
        border-radius: 5px;

        @media (min-width: 821px) {
            width: 30%
        }
    }

    .contact-container {
        display: flex; 
        flex-direction: column; 
        align-items: center;
        background-color: var(--char5);
        opacity: 0.9; 
        width: 100%;
        height: 400px;
        padding: 20px;
        margin: 20px;
        border-radius: 5px;

        p {
            font-size: 20px;
        }

        @media (min-width: 821px) {
            width: 30%;

            p {
                font-size: 16px;
            }
        }

        @media (min-width: 1200px) {
            p {
                font-size: 20px;
            }
        }
    }
`