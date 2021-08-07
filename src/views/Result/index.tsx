import React from "react";
import { FaPlus } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";

//assets
import image from "../../assets/images/background-result.svg";

//components
import BackButton from "../../components/BackButton";
import FooterSuperHero from "../../components/FooterSuperHero";
import HeroDetails from "../../components/HeroDetails";
import Loading from "../../components/Loading";

//styles
import { Background, Container, MoreInfoButton } from "./styles";
import theme from "../../assets/styles/themes/theme";

//hooks
import useSearchHero from "../../hooks/useSearchHero";
import { useEffect } from "react";

//types
import { Data } from "../../types/heroTypes";

const sectionStyle = {
  backgroundImage: `url(${image})`,
};

type ParamsProps = {
  id: string;
};

const SearchResult = () => {
  const history = useHistory();
  const params = useParams() as ParamsProps;

  const { id } = params;

  const { isLoading, onLoad, result } = useSearchHero(id);

  useEffect(() => {
    const loadHero = async () => {
      await onLoad();
    };
    loadHero();
  }, [onLoad]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Background style={sectionStyle}>
      <div className="fixed-top w-100 d-flex align-items-center justify-content-center mt-5">
        <BackButton onClick={() => history.push("/")} />
      </div>
      <Container>
        {result &&
          result.map((item: Data) => (
            <>
              <HeroDetails
                name={item.name}
                description={item.description}
                image={item.thumbnail.path}
                extension={item.thumbnail.extension}
              />
              <a rel="noreferrer" target="_blank" href={item.urls[0].url}>
                <MoreInfoButton className="mt-5">
                  <FaPlus
                    color={theme.colors.white}
                    size={16}
                    className="mr-2"
                  />
                  Informações
                </MoreInfoButton>
              </a>
            </>
          ))}
      </Container>
      <FooterSuperHero />
    </Background>
  );
};

export default SearchResult;
