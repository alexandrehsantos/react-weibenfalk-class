import React from "react";
import Proptypes from 'prop-types';

import { Link } from "react-router-dom";
//Styles
import { Wrapper, Content } from "./BreadCrumb.styles";


const BreadCrumb = ({movieTitle}) =>(
 <Wrapper>
    <Content>
        <Link to='/'>
            <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
    </Content>
 </Wrapper>
);

BreadCrumb.protoTypes = {
    movieTitle: Proptypes.string, 
    
}

export default BreadCrumb