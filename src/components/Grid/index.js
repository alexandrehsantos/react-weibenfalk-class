import React from "react";
//Sytles
import { Wrapper, Content } from "../Grid/Grid.styles";

const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        {<Content>{children}</Content>}
    </Wrapper>
);

export default Grid;
