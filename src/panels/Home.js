import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Epic, Tabbar, TabbarItem, View,} from '@vkontakte/vkui'

import {Icon24Favorite, Icon28SlidersOutline} from '@vkontakte/icons'

import Converter from "./Converter";
import Profile from "./Profile";

class Home extends React.Component {
	static get propTypes () {
		return {
			go: PropTypes.any,
			id: PropTypes.string,
			Converter: PropTypes.object,
			Profile: PropTypes.object
		}
	}

	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	}

	constructor (props) {
		super(props);

		this.state = {
			activeStory: 'converter',
		};

		this.onStoryChange = this.onStoryChange.bind(this);
	}

	render () {
		return (
			<Epic activeStory={this.state.activeStory} tabbar={
				<Tabbar>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'converter'}
						data-story="converter"
						text="Конвертор"
					><Icon28SlidersOutline />
					</TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'profile'}
						data-story="profile"
						text="Об авторе"
					><Icon24Favorite/></TabbarItem>
				</Tabbar>
			}>
				<View id="converter" activePanel="converter">
					<Panel id="converter">
						<Converter />
					</Panel>
				</View>

				<View id="profile" activePanel="profile">
					<Panel id="profile">
						<Profile />
					</Panel>
				</View>
			</Epic>

		)
	}
}

export default Home;
