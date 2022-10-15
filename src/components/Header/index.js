import React, {useContext} from "react";

import RMDBLogoImg from "../../images/react-movie-logo.svg";
import TMDBLogoImg from "../../images/tmdb_logo.svg";
import { Text } from "./Header.style";
import { Link } from "react-router-dom";

import { Wrapper, Content, LogoRMDB, TMDBLogo } from "./Header.style";
//Context
import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);
  return (
    <Wrapper>
    <Content>
        <Link to="/">
        <LogoRMDB src={RMDBLogoImg} alt="rmdb.log" />
      </Link>
         {user ? (<span className="logggedin">Logged in as: {user.username}</span>) : (<Link to='/login'>
          <span className='loggin'>Log in</span>
         </Link>) }
      <TMDBLogo src={TMDBLogoImg} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);
}

export default Header;
