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
    a {
      margin-right: 0.5rem;
    }
    a:not(:first-of-type),
    span {
      margin-left: 0.5rem;
    }
  }

  #item-image {
    grid-area: item-image;
    justify-self: center;
  }

  #item-area {
    grid-area: item-area;
    line-height: 1.8rem;

    h1 + p {
      font-size: 1.5rem;
      font-style: italic;
      margin-bottom: 0.5rem;
    }

    div > p {
      margin: 0;
      color: ${(props) => props.theme.colors.purple};
    }

    div + p {
      font-size: 1.5rem;
    }

    #order-form {
      label {
        font-weight: 700;
        margin-right: 0.5rem;
      }
      input {
        width: 4rem;
        font-weight: 400;
        margin-right: 0.5rem;
      }

      button {
        padding: 0 1rem;
        font-weight: 700;
      }

      button:first-of-type {
        background-color: transparent;
        margin-right: 0.5rem;
        ${({ theme: { colors } }) => {
          return {
            border: `2px solid ${colors.burnt}`,
            color: colors.burnt,
          };
        }}
      }
      button:last-of-type {
        ${({ theme: { colors } }) => {
          return {
            backgroundColor: `${colors.orange}`,
            border: `solid 2px ${colors.orange}`,
            color: "#000",
          };
        }}
      }
    }
  }

  #item-image,
  #item-area {
    margin-top: 1rem;
  }

  #reviews {
    grid-area: reviews;
    justify-self: stretch;
    margin-top: 1rem;
  }

  #related {
    grid-area: related;
    justify-self: center;
    margin-top: 1rem;
  }
`;

export { PageArea, MainArea, ShowArea };
