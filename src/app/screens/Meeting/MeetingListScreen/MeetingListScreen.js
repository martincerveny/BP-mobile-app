import React, {Component} from 'react';
import { Modal } from 'react-native';
import Header from '../../../components/Header/Header'
import {Container, Content, Button, Icon, Text} from 'native-base';
import styles from './styles';
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import MeetingList from '../../../components/MeetingList/MeetingList';
import MeetingCreateScreen from '../MeetingCreateScreen/MeetingCreateScreen';
import _ from 'lodash';

class MeetingListScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            modalVisible: false,
        };

        this.loadItems = this.loadItems.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount () {
        MeetingStore.addChangeListener(this.loadItems);
        this.loadItems();
    };

    componentWillUnmount () {
        MeetingStore.removeChangeListener(this.loadItems);
    }

    loadItems () {
        MeetingStore.getAllItems().then(items => {
            return this.setState({ items })
        });
    }

    handleItemPress (id) {
        this.props.navigation.navigate("meeting.detail", { meetingId: id})
    }

    render () {
        const { items } = this.state;

        return (
            <Container style={ styles.container }>
                <Header
                    title='Zoznam schôdzok'
                    left={
                        <Button transparent onPress={() => {this.setModalVisible(true);}}>
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
                    {
                        items.length > 0
                            ? (<MeetingList
                                items={items}
                                onItemPress={this.handleItemPress}
                            />)
                            : (<Text style={ styles.noResultsText }>Žiadne schôdzky</Text>)
                    }


                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                    >
                        <MeetingCreateScreen
                            modalVisible={this.setModalVisible}
                        />
                    </Modal>
                </Content>
            </Container>
        );
    }
}

export default MeetingListScreen;