import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const TextInput = styled.input`
  min-width: 230px;
  height: 51px;
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.colors.primaryDark};
  border: none;
  padding-left: 12px;
  color: ${(props) => props.theme.colors.white};
  outline: none;
  color: ${(props) => props.theme.colors.primaryGray};
`;

export const ButtonSearch = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.primaryDark};
  align-items: center;
  display: flex;
  justify-content: center;
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

export const Footer = styled.div`
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  background: transparent;
  @media (min-width: 768px) {
    background: ${(props) => props.theme.colors.primaryPink};
  }
`;
