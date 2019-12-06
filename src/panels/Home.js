import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, List, Cell } from '@vkontakte/vkui';

/*const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
        <PanelHeader>Товары</PanelHeader>
    </Panel>
);*/
	
class Home extends React.Component {
    constructor(props) {
        super(props);
	}
	
	render() {
		let {id} = this.props
		return (
			<Panel id={id}>
        		<PanelHeader>Товары</PanelHeader>
				<Group>
                    <List>
                        {
                            this.props.items.map((item, index) => (
                                <Cell
                                    key={index}
                                    before={
                                        <img
                                            style={{
                                                width: 40,
                                                height: 40,
                                                margin: 10
                                            }}
                                            src={item.thumb_photo}
                                        />
                                    }
                                    multiline
                                    description={item.description}
                                >
                                    {item.title}, {item.price.amount} {item.price.currency.name}
                                </Cell>
                            ))
                        }
                    </List>
                </Group>
    		</Panel>
		)	
	}
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
