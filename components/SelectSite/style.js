import styled from "@emotion/styled"

export const BasicsStyles = styled.section`
  width: 95vw;
  max-width: 90vw;
  border-radius: 5px;
  background: white;
  overflow: hidden;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 0px 20px;

  @media (min-width: 999px) {
    width: 60vw
  }

  
  nav {
    padding: 5px;
  }
  
  .tabs {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: nowrap;
    width: 100%;
  }
  
  main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    user-select: none;
    padding: 10px;
  }

  
  
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: "Oxygen", sans-serif;
    font-weight: 500;
    font-size: var(--h5);
  }
  
  ul {
    display: flex;
    width: 100%;
  }
  
  li {
    border-radius: 15px;
    width: 100%;
    padding: 5px;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  
  .underline {
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--mb1-1);
    border-radius: 25px;
  }
  
  li.selected {
    background: var(--mb1-3);
  }
  
  li button {
    width: 20px;
    height: 20px;
    border: 0;
    background: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: #000;
    margin-left: 10px;
    cursor: pointer;
    flex-shrink: 0;
  }
  
  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
  }  

  .button-div {
    width: 100%;
    height: 50px;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: linear-gradient(131deg, rgba(58,134,148,1) 18%, rgba(73,156,166,1) 100%);
    border-radius: 5px;
`