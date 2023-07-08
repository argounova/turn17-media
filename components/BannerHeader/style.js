import styled from "@emotion/styled"

export const BannerHeaderStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: -90px;

.bannerHeaderContent {
    position: absolute;
    top: 17%;
    left: 50%;
    z-index: 10;
    transform: translateX(-50%);
    text-align: center;
}

.bannerHeaderContent p {
    color: #fff;
}

.bannerHeaderContent h1 {
    color: var(--white);
    letter-spacing: 0.2rem;
}

@media (min-width: 1503px) {
    .bannerHeaderContent {
        top: 25%;
    }
}
`