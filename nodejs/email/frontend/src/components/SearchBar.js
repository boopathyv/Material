import React from 'react'

import PropTypes from 'prop-types';

import '../styles/components/SearchBar.css';

function SearchBar(props){

	
		return (
			<div className="search_bar_main_div">
				<div className="fas fa-search search_bar_icon"></div>
				<input type="search" placeholder={props.placeholder} className="mail_search_bar"/>
			</div>
		)
}

SearchBar.defaultProps = {
	placeholder : 'Search'
}

SearchBar.propTypes = {
	placeholder : PropTypes.string
}

export default SearchBar
