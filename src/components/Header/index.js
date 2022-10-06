import React from "react";

import RMDBLogoImg from "../../images/react-movie-logo.svg";
import TMDBLogoImg from "../../images/tmdb_logo.svg";
import { Link } from "react-router-dom";

import { Wrapper, Content, LogoRMDB, TMDBLogo } from "./Header.style";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoRMDB src={RMDBLogoImg} alt="rmdb.log" />
      </Link>
      <TMDBLogo src={TMDBLogoImg} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
