import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

//assets
import backgroundImage from "../../assets/images/background-home.svg";
import logoSuperHero from "../../assets/images/super-hero.svg";
import footerLogo from "../../assets/images/footer.svg";

//styles
import { Background, ButtonSearch, TextInput, Footer } from "./styles";
import theme from "../../assets/styles/themes/theme";
import { useEffect } from "react";
import { useCallback } from "react";

const sectionStyle = {
  backgroundImage: `url(${backgroundImage})`,
};

const Home = () => {
  const [searchHero, setSearchHero] = useState("");
  const history = useHistory();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchHero(event.currentTarget.value);
  };

  const handleNavigate = useCallback(() => {
    if (!searchHero) {
      toast.warn("Digite algo para buscar um herói!");
      return;
    }
    history.push(`/resultados/${searchHero}`);
  }, [history, searchHero]);

  useEffect(() => {
    if (!searchHero) return;
    const input = document.getElementById("search-hero-input");
    input?.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && searchHero) {
        handleNavigate();
      }
    });
  }, [handleNavigate, searchHero]);

  return (
    <Background style={sectionStyle}>
      <div className="fixed-top ml-auto mr-auto mt-5">
        <img src={logoSuperHero} alt="superHero" className="mt-5" />
      </div>
      <div className="d-flex flex-row w-100 align-items-center justify-content-center">
        <TextInput
          id="search-hero-input"
          value={searchHero}
          onChange={(text) => handleChange(text)}
          placeholder="Buscar..."
        />
        <ButtonSearch onClick={handleNavigate} className="ml-3">
          <FaSearch color={theme.colors.white} size={16} />
        </ButtonSearch>
      </div>
      <Footer className="fixed-bottom">
        <img src={footerLogo} alt="footer" />
      </Footer>
    </Background>
  );
};

export default Home;
