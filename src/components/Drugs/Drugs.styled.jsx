import styled from "styled-components";

export const StyledList = styled.ul`
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  /* display: flex;
  flex-wrap: wrap; */
  overflow-y: scroll;

  display: grid;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fit, 330px);
  }
`;

export const StyledLi = styled.li`
  border: 1px solid #333;
  border-radius: 5px;
  padding: 12px;
  display: block;
`;

export const StyledThumb = styled.div`
  width: 280px;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const StyledName = styled.h3`
  font-weight: 600;
  margin: 10px 0;
`;

export const StyledButton = styled.button`
  display: block;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #333;
  transition: background-color 0.5s ease-out;

  &:hover,
  &:focus {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const StyledHeart = styled.button`
  background-color: transparent;
  border: none;

  ${(props) => props.favorite === "false" && `color: black;`}
  ${(props) => props.favorite === "true" && `color: red;`}
`;
