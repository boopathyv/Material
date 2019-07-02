import React, { Component } from 'react'

import '../styles/components/SearchBar.css';

class SearchBar extends Component {
	render() {
		return (
			<div className="search_bar_main_div">
				<div className="fas fa-search search_bar_icon"></div>
				<input type="search" placeholder="Search mail" className="mail_search_bar"/>
			</div>
		)
	}
}

export default SearchBar
