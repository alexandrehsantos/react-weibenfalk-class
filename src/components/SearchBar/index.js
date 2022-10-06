import React, {useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';

import { Wrapper, Content } from "./SearchBar.styles";
import searchBarIcon from '../../images/search-icon.svg'

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() =>{
        //Don't trigger a re-render 
        if(initial.current){
            initial.current = false;
            return;
        }

        const timer = setTimeout(()=>{
            setSearchTerm(state);
        }, 500 )

        return ()=> clearTimeout(timer)
        },[setSearchTerm,state])

    return (
        <Wrapper>
            <Content>
                <img src={searchBarIcon} alt='searchBarIcon' />
                <input 
                type='text' 
                placeholder='Search Movie' 
                onChange={event => setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    );
}

SearchBar.propTypes = {
    callback: PropTypes.func
};

export default SearchBar;