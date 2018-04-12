import React, {Component} from 'react';
import _ from 'lodash';
import {Container, Tab, Tabs, TabHeading, Icon, Button, Text} from 'native-base';
import UserDetailTab from '../../../components/UserDetailTab/UserDetailTab';
import Header from '../../../components/Header/Header';
import UserStore from "../../../flux/User/UserStore";
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import UserDetailMeetingListTab from '../../../components/UserDetailMeetingListTab/UserDetailMeetingListTab';
import styles from './styles';
import Modal from 'expo/src/modal/Modal';
import ModalHost from 'expo/src/modal/ModalHost';
import UserUpdateScreen from "../UserUpdateScreen/UserUpdateScreen";
import UserDetailNoteListTab from "../../../components/UserDetailNoteListTab/UserDetailNoteListTab";
import NoteStore from "../../../flux/Note/NoteStore";

class UserDetailScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userItem: null,
            meetingItems: [],
            noteItems: [],
            modalVisible: false,
        };

        this.goBack = this.goBack.bind(this);
        this.loadItem = this.loadItem.bind(this);
        this.handleMeetingItemPress = this.handleMeetingItemPress.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    goBack () {
        this.props.navigation.goBack()
    }

    componentDidMount () {
        UserStore.addChangeListener(this.loadItem);
        MeetingStore.addChangeListener(this.loadItem);
        NoteStore.addChangeListener(this.loadItem);
        this.loadItem();
    };

    componentWillUnmount () {
        UserStore.removeChangeListener(this.loadItem);
        MeetingStore.removeChangeListener(this.loadItem);
        NoteStore.removeChangeListener(this.loadItem);
    }

    loadItem () {
        const userId = this.props.navigation.state.params.userId;
        UserStore.getItemById(userId).then(userItem => {
            // presmerovanie po zmazani a vypnuti modalneho okna
            if (_.isEmpty(userItem)) {
                this.goBack();
            } else {
                MeetingStore.getAllItemsByMeetingIds(userItem.getMeetingIds()).then(meetingItems => {
                    this.setState({ meetingItems });
                });

                NoteStore.getAllItemsByUserId(userItem.getId()).then(noteItems => {
                    this.setState({ noteItems });
                });

                this.setState({ userItem })
            }
        });

    };

    handleMeetingItemPress (id) {
        this.props.navigation.navigate("meeting.detail", { meetingId: id})
    }

    render () {
        const { userItem, meetingItems, noteItems } = this.state;
        return (
            <ModalHost>
                <Container>
                    <Header
                        title={ userItem && userItem.firstName + ' ' + userItem.lastName }
                        left={
                            <Button transparent onPress={this.goBack}>
                                <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                            </Button>
                        }
                        right={
                                <Button transparent onPress={() => {this.setModalVisible(true)}}>
                                    <Icon style={{ color: '#fff'}} name="create" />
                                </Button>
                        }
                    />
                    <Modal
                        animationType="fade"
                        transparent={false}
                        visible={this.state.modalVisible}
                    >
                        <UserUpdateScreen
                            navigation={this.props.navigation}
                            modalVisible={this.setModalVisible}
                            userItem={userItem}
                        />
                    </Modal>
                    <Tabs>
                        <Tab heading={ <TabHeading><Icon name="ios-contact" /><Text style={ styles.tabText }>Detail</Text></TabHeading>}>
                            <UserDetailTab
                                userItem={userItem}
                            />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="ios-list" /><Text style={ styles.tabText }>Schôdzky</Text></TabHeading>}>
                        <UserDetailMeetingListTab
                            meetingItems={meetingItems}
                            onMeetingItemPress={this.handleMeetingItemPress}
                        />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="ios-paper" /><Text style={ styles.tabText }>Poznámky</Text></TabHeading>}>
                            <UserDetailNoteListTab
                                meetingItems={meetingItems}
                                noteItems={noteItems}
                            />
                        </Tab>
                    </Tabs>
                </Container>
            </ModalHost>
        );
    }
}

export default UserDetailScreen