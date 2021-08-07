import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

//assets
import image from "../../assets/images/background-search-result.svg";

//components
import BackButton from "../../components/BackButton";
import FooterSuperHero from "../../components/FooterSuperHero";
import HeroInfo from "../../components/HeroInfo";
import Loading from "../../components/Loading";

//hooks
import useSearchHeros from "../../hooks/useSearchHeros";

//types
import { Data } from "../../types/heroTypes";

//styles
import { Background, Container } from "./styles";

const sectionStyle = {
  backgroundImage: `url(${image})`,
};

type ParamsProps = {
  name: string;
};

const SearchResult = () => {
  const history = useHistory();
  const params = useParams() as ParamsProps;

  const { name } = params;

  const { result, isLoading, onLoad } = useSearchHeros(name);

  useEffect(() => {
    const loadResults = async () => {
      await onLoad();
    };
    loadResults();
  }, [onLoad]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Background style={sectionStyle}>
      <Container>
        <div className="w-100 d-flex align-items-center justify-content-center mt-5">
          <BackButton onClick={() => history.push("/")} />
        </div>
        {result &&
          result.map((item: Data) => (
            <div className="mt-3 mb-3 ml-auto mr-auto">
              <HeroInfo
                image={item.thumbnail.path}
                name={item.name}
                extension={item.thumbnail.extension}
                onClick={() => history.push(`/resultado/${item.id}`)}
              />
            </div>
          ))}
        <FooterSuperHero />
      </Container>
    </Background>
  );
};

export default SearchResult;
