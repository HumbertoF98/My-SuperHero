import styled from "styled-components";

export const StyledButton = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 25px;
  background: transparent;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  outline: none;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primaryGray};
  :focus {
    outline: 0 !important;
  }
  :hover,
  :active,
  :visited {
    background-color: transparent;
  }
  border: none;
`;
