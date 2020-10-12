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
  grid-row-gap: 1rem;

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

    h1 {
      margin-bottom: 0;
    }

    h2 {
      font-size: 1.2rem;
      font-style: italic;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }

    div + p {
      font-size: 1.5rem;
    }

    #order-form {
      margin-top: 2rem;
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
    border: 2px solid #ecece7;
    justify-self: stretch;
    margin-top: 1rem;
    padding: 1rem;

    header > div,
    .user-review {
      display: flex;
      flex-direction: column;

      a {
        align-self: flex-end;
      }
    }

    .user-review {
      margin-top: 1rem;
      line-height: 2rem;
      padding-top: 1rem;
      border-top: 2px solid #ecece7;

      h3 {
        font-size: 1.3rem;
      }

      p:first-of-type {
        font-style: italic;
      }
    }
  }

  .ratings {
    margin: 0;
    color: ${(props) => props.theme.colors.purple};
    font-size: 1.3rem;
  }

  #related {
    grid-area: related;
    justify-self: center;
    margin-top: 1rem;
  }
`;

export { PageArea, MainArea, ShowArea };
