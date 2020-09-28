import styled from "@emotion/styled";

const MainArea = styled.div`
  margin-top: 80px;

  @media (min-width: 1000px) {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PageArea = styled(MainArea)`
  grid-template-columns: 1fr;
  justify-items: center;

  header {
    justify-self: start;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      line-height: 1.8rem;
    }
  }
`;

export { PageArea, MainArea };
