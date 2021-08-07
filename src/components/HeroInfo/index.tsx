import React from "react";

import { Content, ImageHero } from "./styles";

type HeroInfoProps = {
  onClick: () => void;
  image: string;
  name: string;
  extension: string;
};

const HeroInfo = ({ onClick, image, name, extension }: HeroInfoProps) => {
  return (
    <Content onClick={onClick}>
      <ImageHero
        width={80}
        height={80}
        src={`${image}/standard_xlarge.${extension}`}
        alt="mockImage"
      />
      <h3 className="text-white ml-3">{name}</h3>
    </Content>
  );
};

export default HeroInfo;
