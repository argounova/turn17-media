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
        justify-content: flex-end;
        background-image: url(https://turn17media-main.s3.amazonaws.com/contact-background.jpg); 

    }

    .contact-form {
        display: flex; 
        flex-direction: column; 
        align-items: center;
        background-color: var(--char1);
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

        @media (min-width: 821px) {
            width: 30%
        }
    }
`