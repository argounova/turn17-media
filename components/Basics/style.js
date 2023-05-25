import styled from "@emotion/styled"

export const BasicsStyles = styled.section`
  .window {
    width: 1000px;
    border-radius: 5px;
    background: white;
    overflow: hidden;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    display: flex;
    flex-direction: column;
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
    justify-content: center;
    align-items: center;
    font-size: 100px;
    flex-grow: 1;
    user-select: none;
  }
  
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: "Oxygen", sans-serif;
    font-weight: 500;
    font-size: 22px;
  }
  
  ul {
    display: flex;
    width: 100%;
  }
  
  li {
    border-radius: 15px;
    width: 100%;
    padding: 15px;
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
`