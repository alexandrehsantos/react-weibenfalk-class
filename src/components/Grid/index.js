import React from "react";
import PropTypes from 'prop-types';
//Sytles
import { Wrapper, Content } from "../Grid/Grid.styles";



const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        {<Content>{children}</Content>}
    </Wrapper>
);

Grid.propTypes = {
    header: PropTypes.string
}

export default Grid;
