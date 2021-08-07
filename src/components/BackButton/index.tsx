import React from "react";
import { FaSearch } from "react-icons/fa";

import theme from "../../assets/styles/themes/theme";

import { StyledButton } from "./styles";

const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledButton onClick={onClick}>
      <span className="text-white">Voltar a pesquisa</span>
      <FaSearch className="ml-2" color={theme.colors.white} size={16} />
    </StyledButton>
  );
};

export default BackButton;
