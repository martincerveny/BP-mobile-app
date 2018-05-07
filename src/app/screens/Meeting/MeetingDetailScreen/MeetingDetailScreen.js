import React from 'react';
import _ from 'lodash';
import Modal from 'expo/src/modal/Modal';
import ModalHost from 'expo/src/modal/ModalHost';
import {Container, Tab, Tabs, TabHeading, Icon, Button, Text} from 'native-base';
import MeetingDetailUserListTab from '../../../components/MeetingDetailUserListTab/MeetingDetailUserListTab';
import MeetingDetailTab from '../../../components/MeetingDetailTab/MeetingDetailTab';
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import UserStore from "../../../flux/User/UserStore";
import Header from '../../../components/Header/Header'
import MeetingConstants from "../../../flux/Meeting/MeetingConstants";
import MeetingUpdateScreen from "../MeetingUpdateScreen/MeetingUpdateScreen";
import styles from './styles';
import MeetingDetailNoteListTab from "../../../components/MeetingDetailNoteListTab/MeetingDetailNoteListTab";

//obrazovka detailu schodzky
class MeetingDetailScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            meetingItem: null,
            userItems: [],
            modalVisible: false,
        };

        this.goBack = this.goBack.bind(this);
        this.loadItem = this.loadItem.bind(this);
        this.loadUserItems = this.loadUserItems.bind(this);
        this.handleUserItemPress = this.handleUserItemPress.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount () {
        UserStore.addChangeListener(this.loadUserItems);
        MeetingStore.addChangeListener(this.loadItem);
        this.loadItem();
        this.loadUserItems();
    };

    componentWillUnmount () {
        UserStore.removeChangeListener(this.loadUserItems);
        MeetingStore.removeChangeListener(this.loadItem);
    }

    //nacitanie schodzky
    loadItem () {
        const meetingId = this.props.navigation.state.params.meetingId;
        MeetingStore.getItemById(meetingId).then(meetingItem => {
            // presmerovanie po zmazani a vypnuti modalneho okna
            if (_.isEmpty(meetingItem)) {
                this.goBack();
            }

            this.setState({ meetingItem })
        });
    };

    //nacitanie ucastnikov schodzky
    loadUserItems () {
        const meetingId = this.props.navigation.state.params.meetingId;
        UserStore.getAllItemsByMeetingId(MeetingConstants.STORE_KEY_ITEM + meetingId).then(userItems => {
            this.setState({ userItems })
        });
    }

    goBack () {
        this.props.navigation.goBack()
    }

    handleUserItemPress (id) {
        this.props.navigation.navigate("user.detail", { userId: id})
    }

    render () {
        const { meetingItem, userItems } = this.state;
        return (
            <ModalHost>
                <Container>
                    <Header
                        title={meetingItem && meetingItem.getName()}
                        left={
                            <Button transparent onPress={this.goBack}>
                                <Icon style={ styles.icon} name="arrow-round-back" />
                            </Button>
                        }
                        right={
                            <Button transparent onPress={() => {this.setModalVisible(true)}}>
                                <Icon style={ styles.icon } name="create" />
                            </Button>
                        }
                    />

                    <Modal
                        animationType="fade"
                        transparent={false}
                        visible={this.state.modalVisible}
                    >
                        <MeetingUpdateScreen
                            navigation={this.props.navigation}
                            modalVisible={this.setModalVisible}
                            meetingItem={meetingItem}
                            userItems={userItems}
                        />
                    </Modal>
                    <Tabs locked={true}>
                        <Tab heading={ <TabHeading><Icon name="ios-keypad" /><Text style={ styles.tabText }>Detail</Text></TabHeading>}>
                           <MeetingDetailTab
                               meetingItem={meetingItem}
                               peopleCount={userItems.length}
                           />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="ios-people" /><Text style={ styles.tabText }>Účastníci</Text></TabHeading>}>
                            <MeetingDetailUserListTab
                                userItems={userItems}
                                onUserItemPress={this.handleUserItemPress}
                                navigation={this.props.navigation}
                                meetingId={meetingItem && meetingItem.getId()}
                            />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="ios-paper" /><Text style={ styles.tabText }>Poznámky</Text></TabHeading>}>
                            <MeetingDetailNoteListTab
                                navigation={this.props.navigation}
                                userItems={userItems}
                                meetingItem={meetingItem}
                            />
                        </Tab>
                    </Tabs>
                </Container>
            </ModalHost>
        );
    }
}

export default MeetingDetailScreen;