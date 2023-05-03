import styled from "@emotion/styled"

export const Styles = styled.button`
  color: var(--char0);
  background-color: transparent;
  font-family: "Oxygen", sans-serif;
  font-size: 2.5rem;
  border: 0;
  text-decoration: none;
  padding: 0;
  transition: color 0.3s ease;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  display: inline-flex;
  align-items: center;

  @media(max-width:800px) {
    font-size: 2rem;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 8px;
    background-color: var(--char5);
    transition: left 0.3s ease;
  }

  &:focus {
    color: var(--mb1-3);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: var(--primary);

      &::after {
        left: 100%;
      }
    }
  }
`