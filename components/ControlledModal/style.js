import styled from "@emotion/styled"


export const ModalBackground = styled.div`
position: fixed;
z-index: 100;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0, 0, 1, 0.7);
`

export const ModalBody = styled.div`
margin: 10% auto;
width: fit-content;

.closeIcon {
  color: var(--mb1-3);
  font-size: 50px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  @media (min-width: 800px) {
    right: 100px;
    top: 50px;
  }
  @media (min-width: 1200px) {
    right: 300px;
  }
  @media (min-width: 1600px) {
    right: 500px;
  }
  @media (min-width: 2000px) {
    right: 700px;
  }
}
`