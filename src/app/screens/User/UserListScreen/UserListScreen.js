import React from 'react';
import { Container, Content } from 'native-base';
import Header from '../../../components/Header/Header'
import UserStore from "../../../flux/User/UserStore";
import UserList from '../../../components/UserList/UserList'

import styles from './styles';

class UserListScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: []
        };

        this.loadItems = this.loadItems.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
    };

    componentDidMount () {
        this.loadItems();
    };

    loadItems () {
        UserStore.getAllItems().then(items => {
            return this.setState({ items })
        });
    }

    handleItemPress (id) {
        this.props.navigation.navigate("user.detail", { userId: id})
    }

    render () {
        const { items } = this.state;

        return (
            <Container style={ styles.container }>
                <Header
                    title='Zoznam ľudí'
                />
                <Content>
                    <UserList
                        items={items}
                        onItemPress={this.handleItemPress}
                    />
                </Content>
            </Container>
        );
    }
}

export default UserListScreen;