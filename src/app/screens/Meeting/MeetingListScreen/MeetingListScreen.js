import React, {Component} from 'react';
import { Modal } from 'react-native';
import Header from '../../../components/Header/Header'
import { Container, Content, Button, Icon } from 'native-base';
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
            // for (let i = 0; i < items.length; i++) {
            //     let sectionData = [
            //         {
            //             data: [
            //                 {
            //
            //                 }
            //             ],
            //             title: ''
            //         }
            //     ]
            // }

            return this.setState({ items })
        });
    }

    handleItemPress (id) {
        this.props.navigation.navigate("meeting.detail", { meetingId: id})
    }

    render () {
        const { items } = this.state;

        // let testItems = [
        //     {
        //       data: [
        //           {
        //               "date": "1. 4. 2018",
        //               "id": "16a68c5b-f1d5-126b-db9b-545c48bc603a",
        //               "name": "Test",
        //               "note": "",
        //               "place": "",
        //               "time": "20:30",
        //           },
        //           {
        //               "date": "1. 4. 2018",
        //               "id": "e4fd3897-8e79-b7ab-5267-f564ba53c156",
        //               "name": "Nova",
        //               "note": "",
        //               "place": "",
        //               "time": "22:08",
        //           },
        //       ],
        //         title: 'test'
        //     },
        //     {
        //         data: [
        //             {
        //                 "date": "1. 4. 2018",
        //                 "id": "16a68c5b-f1d5-126b-db9b-545c48bc603a",
        //                 "name": "Test",
        //                 "note": "",
        //                 "place": "",
        //                 "time": "20:30",
        //             },
        //             {
        //                 "date": "1. 4. 2018",
        //                 "id": "e4fd3897-8e79-b7ab-5267-f564ba53c156",
        //                 "name": "Nova",
        //                 "note": "",
        //                 "place": "",
        //                 "time": "22:08",
        //             },
        //         ],
        //         title: 'test'
        //     }
        // ];

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
                    <MeetingList
                        items={items}
                        onItemPress={this.handleItemPress}
                    />
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