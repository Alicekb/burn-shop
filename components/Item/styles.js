import styled from "@emotion/styled";

const ItemBox = styled.a`
  width: 20rem;
  height: 100%;
  text-align: center;

  &:hover {
    color: ${({ theme: { colors } }) => colors.burnt};
    img {
      outline: 3px solid ${({ theme: { colors } }) => colors.burnt};
    }
  }

  color: black;
  text-decoration: none;

  h2 {
    margin-top: 10px;
    line-height: 1;
    font-size: 1.5em;
  }

  @media (min-width: 700px) {
    width: 14rem;
  }
`;

const ImageBox = styled.div`
  position: relative;
  text-align: center;
  color: black;

  p {
    position: absolute;
    top: 8px;
    font-weight: 700;
    padding: 5px;
  }
`;

const ItemGrid = styled.ul`
  display: grid;
  justify-items: center;
  margin: 15px 0;
  padding: 0;
  list-style: none;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 15rem);
    justify-items: start;
    margin-left: 20px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 14.5rem);
    justify-items: start;
    margin-left: 0;
  }
`;

const NewTag = styled.p`
  ${({ theme: { colors } }) => ({
    backgroundColor: colors.burnt,
    color: colors.purple,
  })}
`;
const SalesTag = styled.p`
  background-color: red;
  border-radius: 50%;
  color: white;
  transform: rotate(-13deg);
`;

export { ItemBox, ImageBox, ItemGrid, NewTag, SalesTag };
