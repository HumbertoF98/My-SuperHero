import React from "react";
import { Background } from "./styles";

import image from "../../assets/images/background-result.svg";

const sectionStyle = {
  backgroundImage: `url(${image})`,
};

const Loading = () => {
  return (
    <Background style={sectionStyle}>
      <h1 className="center text-white">Carregando...</h1>
    </Background>
  );
};

export default Loading;
