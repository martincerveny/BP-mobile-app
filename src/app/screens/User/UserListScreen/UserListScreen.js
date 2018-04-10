import React from 'react';
import { Modal } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';
import Header from '../../../components/Header/Header'
import UserStore from "../../../flux/User/UserStore";
import UserList from '../../../components/UserList/UserList'
import UserCreateScreen from '../UserCreateScreen/UserCreateScreen';

import styles from './styles';

class UserListScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: [],
            modalVisible: false,
        };

        this.loadItems = this.loadItems.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

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
                            <Icon style={{ color: '#fff'}} name="add" />
                        </Button>
                    }
                    right={
                        <Button transparent>
                            <Icon style={{ color: '#fff'}} name="search" />
                        </Button>
                    }
                />
                <Content>
                    <UserList
                        items={items}
                        onItemPress={this.handleItemPress}
                    />
                    {/*<Modal*/}
                        {/*animationType="slide"*/}
                        {/*transparent={false}*/}
                        {/*visible={this.state.modalVisible}*/}
                    {/*>*/}
                        {/*<UserCreateScreen*/}
                            {/*modalVisible={this.setModalVisible}*/}
                        {/*/>*/}
                    {/*</Modal>*/}
                </Content>
            </Container>
        );
    }
}

export default UserListScreen;