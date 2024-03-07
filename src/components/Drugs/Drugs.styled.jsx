import styled from "styled-components";

export const StyledList = styled.ul`
  width: 80vw;
  height: 80vh;
  border: 1px solid #333;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  gap: 10px;
  overflow-y: scroll;
`;

export const StyledLi = styled.li`
  border: 1px solid #333;
  border-radius: 5px;
  width: calc((100% / 3) - 10px);
  height: 300px;
`;

export const StyledThumb = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
`;

export const StyledName = styled.p`
  font-weight: 600;
  margin: 5px;
`;

export const StyledButton = styled.button`
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
  margin: 20px 5px;
`;

export const StyledHeart = styled.button`
  background-color: transparent;
  border: none;

  ${(props) => props.favorite === "false" && `color: black;`}
  ${(props) => props.favorite === "true" && `color: red;`}
`;
