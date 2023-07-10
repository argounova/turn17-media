import styled from "@emotion/styled"

export const BannerStyles = styled.div`


  .bannerC-text {
    position: absolute;
    z-index: 10;
    width: 75%;
    color: var(--mb1-2);
    left: 40px;
    margin-top: 45px;

    @media (min-width: 800px) {
      width: 60%;
      left: 140px;
      margin-top: 120px;
    }
    @media (min-width: 1400px) {
      width: 40%
    }
  }
`