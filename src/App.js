import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			items: [
                {
                    "id": 250409,
                    "owner_id": -124527492,
                    "title": "Persik",
                    "description": "A majestic furball who adores to sleep, to purr, and to play with a computer mouse.",
                    "price": {
                        "amount": "100000",
                        "currency": {
                            "id": 643,
                            "name": "RUB"
                        },
                        "text": "1,000 rub."
                    },
                    "category": {
                        "id": 1001,
                        "name": "Cats",
                        "section": {
                            "id": 10,
                            "name": "Pets"
                        }
                    },
                    "date": 1467722904,
                    "thumb_photo": "https://pp.vk.me/c631229/v631229852/3b6f3/SQ607FYCmy4.jpg",
                    "availability": 0
                },
                {
                    "id": 250407,
                    "owner_id": -124527492,
                    "title": "Spotty",
                    "description": "A tail wagging champion, true friend and never-failing warmer.",
                    "price": {
                        "amount": "100000",
                        "currency": {
                            "id": 643,
                            "name": "RUB"
                        },
                        "text": "1,000 rub."
                    },
                    "category": {
                        "id": 1000,
                        "name": "Dogs",
                        "section": {
                            "id": 10,
                            "name": "Pets"
                        }
                    },
                    "date": 1467722851,
                    "thumb_photo": "https://pp.vk.me/c631229/v631229852/3b6e5/1OWGz65-8vw.jpg",
                    "availability": 0
                },
                {
                    "id": 250396,
                    "owner_id": -124527492,
                    "title": "First market item",
                    "description": "Description text",
                    "price": {
                        "amount": "10000",
                        "currency": {
                            "id": 643,
                            "name": "RUB"
                        },
                        "text": "100 rub."
                    },
                    "category": {
                        "id": 1,
                        "name": "Women's Clothing",
                        "section": {
                            "id": 0,
                            "name": "Fashion"
                        }
                    },
                    "date": 1467721947,
                    "thumb_photo": "https://pp.vk.me/c633819/v633819852/37ae0/7lXUEbCwYYM.jpg",
                    "availability": 0
                }
            ]
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home"  items={this.state.items} fetchedUser={this.state.fetchedUser} go={this.go} />
			</View>
		);
	}
}

export default App;
