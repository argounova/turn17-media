import styled from "@emotion/styled"

export const WebDesignStyles = styled.section`


.bannA__container-main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    background: url(https://turn17media-main.s3.amazonaws.com/turn17media-background-clean-2500x1000.jpg);
    background-size: cover;
    background-position: center;
}

.hide {
    display: none;

    @media (min-width: 800px) {
        display: block;
    }
}

.bannA__star1 {
    position: absolute;
    top: 120px;
    left: 30px;  
    rotate: 30deg;
}

.bannA__star2 {
    position: absolute;
    top: 160px;
    left: 100px;  
    
}

.bannA__star3 {
    position: absolute;
    top: 185px;
    left: 40px;  
    rotate: 120deg;
}

.bannA__star4 {
    position: absolute;
    top: 180px;
    right: 150px;  
    rotate: 10deg;
}

.bannA__star5 {
    position: absolute;
    top: 130px;
    right: 70px;  
    rotate: 40deg;
}

.bannA__star6 {
    position: absolute;
    top: 260px;
    right: 40px;  
    rotate: 190deg;
}

.bannA__star7 {
    position: absolute;
    top: 240px;
    right: 120px;  
    rotate: 190deg;
}

.bannA__mobile-ex {
    width: 530px;
    height: 1062;
    background-image: url(https://turn17media-main.s3.amazonaws.com/mobile-example.png);
}

.bannB__container-main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    min-height: 180px;
    height: fit-content;
    background: var(--char5);
}

.bannC__container-alt {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    min-height: 180px;
    height: fit-content;
    padding: 50px;
}

.bannC__container-main {
    display: flex;
    align-items: space-evenly;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 100vw;
    min-height: 500px;
    height: fit-content;
    margin: 0;
    padding: 70px 0px;
    background: url(https://turn17media-main.s3.amazonaws.com/turn17media-teal-black-background-2500x666.jpg);
    background-size: cover;
    background-position: center;
}

.bannC__motion-div {
    width: 350px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--char5);
    border-radius: 10px;
    margin: 20px;
}

`