import React from "react";

import { Content, HeroImage } from "./styles";

type HeroDetailsProps = {
  description: string;
  name: string;
  image: string;
  extension: string;
};

const HeroDetails = ({
  description,
  name,
  image,
  extension,
}: HeroDetailsProps) => {
  return (
    <Content>
      <HeroImage
        src={`${image}/standard_xlarge.${extension}`}
        alt="heroImage"
      />
      <h3 className="text-white mt-4">{name}</h3>
      <h3 className="text-white mt-4">{description || "Sem descrição"}</h3>
    </Content>
  );
};

export default HeroDetails;
