import styled from "@emotion/styled"

export const ParallaxStyles = styled.div`
  * {
    font-family: Oxygen, sans-serif;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
  
  h1,
  h2,
  h3 {
    font-family: Oxygen, sans-serif;
  }
  
  h1 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.2;
    text-align: center;
    margin: 100px 0 40px;
  }
  
  p {
    margin: 0 0 30px 0;
    font-size: 18px;
  }
  
  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: var(--background);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    -webkit-border-radius: 1ex;
  }
  
  ::-webkit-scrollbar-corner {
    background: var(--background);
  }
  
  main {
    scroll-snap-type: y mandatory;
  }
  
  h1 {
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -3px;
    line-height: 1.2;
    text-align: center;
    margin: 100px 0;
  }
  
  h2 {
    color: var(--char5);
    left: calc(50% + 125px);
    font-size: 56px;
    letter-spacing: 1px;
    position: absolute;
    font-weight: 700;
    text-shadow: 2px 1px 2px var(--char3);
    
    @media(min-width:767px) {
      left: calc(50% + 145px);
    }
    
  }
  
  section {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    scroll-snap-align: center;
    perspective: 500px;
  }
  
  section > div {
    width: 100%;
    height: auto;
    position: relative;
    max-height: 90vh;
    margin: 20px;
    background-color: transparent;
    overflow: hidden;
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  
  .progress {
    position: fixed;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--accent);
    bottom: 100px;
  }
`