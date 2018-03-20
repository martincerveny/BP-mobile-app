import React from 'react';
import { Container, Content, Button, Icon } from 'native-base';
import Header from '../../../components/Header/Header'
import UserStore from "../../../flux/User/UserStore";
import UserList from '../../../components/UserList/UserList'

import styles from './styles';

class UserAddListScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: []
        };

        this.goBack = this.goBack.bind(this);
        this.loadItems = this.loadItems.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
    };

    goBack () {
        this.props.navigation.goBack()
    }

    componentDidMount () {
        this.loadItems();
    };

    loadItems () {
        UserStore.getAllItems().then(items => {
            return this.setState({ items })
        });
    }

    handleItemPress (id) {
        // this.props.navigation.navigate("user.detail", { userId: id})
    }

    render () {
        const { items } = this.state;

        return (
            <Container style={ styles.container }>
                <Header
                    title='Zoznam ľudí'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                    right={
                        <Button transparent onPress={() => this.props.navigation.navigate("user.create")}>
                            <Icon style={{ color: '#fff'}} name="add" />
                        </Button>
                    }
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

export default UserAddListScreen;