import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const MoreInfoButton = styled.button`
  width: 160px;
  height: 35px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primaryDark};
  align-items: center;
  display: flex;
  justify-content: center;
  font: 16px sans-serif;
  outline: none;
  :focus {
    outline: 0 !important;
  }
  :hover,
  :active,
  :visited {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
  border: none;
`;

export const Container = styled.div`
  margin-top: 75px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
