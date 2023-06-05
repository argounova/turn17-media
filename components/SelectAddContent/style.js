import styled from "@emotion/styled"

export const ContentStyles = styled.div`
.content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 95vw;
    height: fit-content;
    margin-bottom: 30px;
    background-color: var(--white);
    box-shadow: 1px 3px 3px var(--char3);

    p {
      padding: 16px;
    }

    @media (min-width: 999px) {
        justify-content: flex-start;
        align-items: flex-start;
        width: 60vw;
        padding: 15px 45px;
    }
}

.question {
    min-height: calc(var(--gap) * 2);
    border-radius: 6px;
    width: 100%;
    background: linear-gradient(131deg, rgba(58,134,148,1) 18%, rgba(73,156,166,1) 100%);
    border: 2px solid rgba(0, 0, 0, 1);
    color: var(--char0);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    font-size: var(--p);
    font-family: Oxygen;
    text-align: start;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: var(--mb1-3);
    }

    .trigger {
      display: inline-flex;
      height: 40px;
      width: 50px;
      position: relative;
      font-size: 35px;
      justify-content: center;
      align-items: center;
      color: var(--primary);
      transform-origin: center;
      transition: transform 0.6s ease;
    }

    @media (min-width: 1500px) {
        text-align: start;
    }
  }

  .answer {
    padding: calc(var(--gap) / 2);
    font-size: var(--p);
    font-family: Oxygen;
    display: flex;
    flex-direction: column;
  }
  margin-bottom: calc(var(--gap) / 2);

  &.faq-open {
    .trigger {
      transform: rotate(-180deg);
    }
  }
`