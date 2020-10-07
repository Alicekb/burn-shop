import styled from "@emotion/styled";

const MainArea = styled.div`
  @media (min-width: 1000px) {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 25px;
  height: 100%;
`;

const PageArea = styled(MainArea)`
  grid-template-columns: 1fr;
  justify-items: center;

  ul {
    justify-items: center;
  }

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

const ShowArea = styled(MainArea)`
  display: grid;
  grid-template-areas:
    "show-link ."
    "item-image item-area"
    "reviews reviews"
    "related related";

  #show-link {
    grid-area: show-link;
  }

  #item-image {
    grid-area: item-image;
    justify-self: center;
  }

  #item-area {
    grid-area: item-area;
  }

  #reviews {
    grid-area: reviews;
    justify-self: stretch;
  }

  #related {
    grid-area: related;
    justify-self: center;
  }
`;

export { PageArea, MainArea, ShowArea };
