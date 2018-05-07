import React from 'react';
import {Container, Content, Button, Icon, Text} from 'native-base';
import Header from '../../../components/Header/Header'
import UserStore from "../../../flux/User/UserStore";
import UserList from '../../../components/UserList/UserList'
import styles from './styles';

//obrazovka zobrazujuca zoznam uzivatelov
class UserListScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: [],
        };

        this.loadItems = this.loadItems.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
    };


    componentWillUnmount () {
        UserStore.removeChangeListener(this.loadItems);
    }

    componentDidMount () {
        UserStore.addChangeListener(this.loadItems);
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
                    left={
                        <Button transparent onPress={() => {this.props.navigation.navigate('user.search.index', { meetingId: null})}}>
                            <Icon style={ styles.icon } name="add" />
                        </Button>
                    }
                    right={
                        <Button transparent>
                            <Icon style={ styles.icon} name="search" />
                        </Button>
                    }
                />
                <Content>
                    {
                        items.length > 0
                            ? (<UserList
                                items={items}
                                onItemPress={this.handleItemPress}
                            />)
                            : (<Text style={ styles.noResultsText }>Žiadne osoby</Text>)
                    }
                </Content>
            </Container>
        );
    }
}

export default UserListScreen;