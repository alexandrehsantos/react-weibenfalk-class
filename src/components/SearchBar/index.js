import React, { useState, useEffect, useRef, Component } from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./SearchBar.styles";
import searchBarIcon from "../../images/search-icon.svg";

class SearchBar extends Component {
  state = { value: "" };
  timeout = null;

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      const { setSearchTerm } = this.props;
      this.clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const { value } = this.state;
        setSearchTerm(this.state);
      }, 500);
    }
  }

  render() {

    const { value } = this.state;

    return (
      <Wrapper>
        <Content>
          <img src={searchBarIcon} alt="searchBarIcon" />
          <input
            type="text"
            placeholder="Search Movie"
            onChange={(event) =>
              this.setState({ value: event.currentTarget.value })
            }
            value={this.state.value}
          />
        </Content>
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
