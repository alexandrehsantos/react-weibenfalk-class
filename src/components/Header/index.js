import React from "react";

import RMDBLogoImg from '../../images/react-movie-logo.svg';
import TMDBLogoImg from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoRMDB, TMDBLogo } from "./Header.style";

const Header = () =>(
    <Wrapper>
        <Content>
            <LogoRMDB src={RMDBLogoImg} alt='rmdb.log'/>
            <TMDBLogo src={TMDBLogoImg} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
);

export default Header;
