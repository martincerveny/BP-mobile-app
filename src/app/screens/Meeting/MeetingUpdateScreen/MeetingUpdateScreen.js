import React from 'react';
import _ from 'lodash';
import {
    Container, Text, Button, Toast, Separator, Content, Label, Input, View, Form, Item,
    ListItem, ActionSheet
} from 'native-base';
import Header from '../../../components/Header/Header'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { deleteMeetingItem } from './../../../flux/Meeting/MeetingActions'
import styles from './styles';
import {createOrUpdateMeetingItem} from "../../../flux/Meeting/MeetingActions";
import MeetingConstants from "../../../flux/Meeting/MeetingConstants";
import {createOrUpdateUserItem} from "../../../flux/User/UserActions";
import NoteStore from "../../../flux/Note/NoteStore";
import {deleteNoteItem} from "../../../flux/Note/NoteActions";

var ACTION_SHEET_DELETE_ITEM = ['Vymazať schôdzku', 'Zrušiť'];
var DESTRUCTIVE_INDEX_DELETE_ITEM = 0;
var CANCEL_INDEX_DELETE_ITEM = 1;

class MeetingUpdateScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: this.props.meetingItem.getName(),
            place: this.props.meetingItem.getPlace(),
            note: this.props.meetingItem.getNote(),
            date: this.props.meetingItem.getDate(),
            time: this.props.meetingItem.getTime(),
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            deleteItemClicked: null
            // day: '',
            // month: '',
            // year: '',
            // hour: '',
            // minute: '',
        };

        this.goBack = this.goBack.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
        // this.parseDateTimeToState = this.parseDateTimeToState.bind(this);
    };

    componentDidMount () {
        // this.parseDateTimeToState();
    }
    // /**
    //  *  metoda rozparsuje datum a cas z AsyncStorage do DateTimePicker componenty
    //  */
    // parseDateTimeToState () {
    //     // rozdelime datum na den, mesiac a rok
    //     let date = this.props.meetingItem.getDate().replace(/ +/g, "").split('.');
    //    // rozdelime cas na hodiny a minut
    //     let time = this.props.meetingItem.getTime().split(':');
    //     this.setState({
    //        day: date[0],
    //        month: date[1],
    //        year: date[2],
    //        hour: time[0],
    //        minute: time[1],
    //
    //     });
    // }
    _showDatePicker = () => this.setState({ isDatePickerVisible: true });
    _hideDatePicker = () => this.setState({ isDatePickerVisible: false });

    _showTimePicker = () => this.setState({ isTimePickerVisible: true });
    _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({
            date: date.toLocaleDateString('de-DE', {year: 'numeric', month: '2-digit', day: '2-digit'}),
        });
        this._hideDatePicker();
    };

    _handleTimePicked = (time) => {
        let timeParse = time.toLocaleTimeString();

        this.setState({
            time: timeParse.substring(0, timeParse.indexOf(':', timeParse.indexOf(':')+1))
        });

        this._hideTimePicker();
    };

    goBack () {
        this.props.modalVisible(false);
    }

    handleDeleteItem () {
        const userItems = this.props.userItems;
        const meetingItem = this.props.meetingItem;

        ActionSheet.show(
            {
                options: ACTION_SHEET_DELETE_ITEM,
                cancelButtonIndex: CANCEL_INDEX_DELETE_ITEM,
                destructiveButtonIndex: DESTRUCTIVE_INDEX_DELETE_ITEM,
            },
            buttonIndex => {
                this.setState({ deleteItemClicked: ACTION_SHEET_DELETE_ITEM[buttonIndex] });

                if (this.state.deleteItemClicked === 'Vymazať schôdzku') {

                    // zmaze IDcka schodzky z userov
                    for (let i = 0; i < userItems.length; i++) {
                        let index = userItems[i].meetingIds.indexOf(MeetingConstants.STORE_KEY_ITEM + meetingItem.getId());
                        if (index > -1) {
                            userItems[i].meetingIds.splice(index, 1);
                            createOrUpdateUserItem(userItems[i]);

                        }
                    }
                    // zmazeme poznamky patriace schodzke
                    NoteStore.getAllItemsByMeetingId(meetingItem.getId()).then(noteItems => {
                        for(var i=0; i<noteItems.length; i++) {
                            deleteNoteItem(noteItems[i].getId())
                        }
                    });

                    deleteMeetingItem(this.props.meetingItem.getId());

                    this.goBack();
                    Toast.show({
                        text: 'Schôdzka bola zmazaná.',
                        position: 'bottom',
                        buttonText: 'OK',
                        duration: 3000,
                        type: 'success'
                    });
                }
            }
        );
    }

    handleUpdateItem () {
        let meetingItem = {
            id: this.props.meetingItem.getId(),
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            place: this.state.place,
            note: this.state.note
        };

        createOrUpdateMeetingItem(meetingItem);
        this.goBack();
    }

    render () {
        return (
            <Container>
                <Header
                    title='Upraviť'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Text style={ styles.cancelText }>Zrušiť</Text>
                        </Button>
                    }
                    right={
                        <Button transparent onPress={this.handleUpdateItem}>
                            <Text style={ styles.cancelText }>Uložiť</Text>
                        </Button>
                    }
                />
                <Content>
                    <Form>
                        <Separator bordered>
                            <Text>INFORMÁCIE</Text>
                        </Separator>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label >Názov</Label>
                            <Input autoCorrect={false} value={ this.state.name } onChangeText={(name) => this.setState({name})}/>
                        </Item>
                        <ListItem onPress={this._showDatePicker} style={{ height: 70}}>
                                <Label > {this.state.date}</Label>
                                <DateTimePicker
                                    isVisible={this.state.isDatePickerVisible}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDatePicker}
                                    cancelTextIOS={'Zrušiť'}
                                    confirmTextIOS={'Potvrdiť'}
                                    titleIOS={'Vybrať dátum'}
                                    mode={'date'}
                                    // date={new Date(this.state.year, this.state.month, this.state.day, this.state.hour, this.state.minute)}
                                />
                        </ListItem>
                        <ListItem onPress={this._showTimePicker} style={{ height: 70 }}>
                            <Label > {this.state.time}</Label>
                            <DateTimePicker
                                isVisible={this.state.isTimePickerVisible}
                                onConfirm={this._handleTimePicked}
                                onCancel={this._hideTimePicker}
                                cancelTextIOS={'Zrušiť'}
                                confirmTextIOS={'Potvrdiť'}
                                titleIOS={'Vybrať čas'}
                                mode={'time'}
                            />
                        </ListItem>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Miesto</Label>
                            <Input autoCorrect={false} value={ this.state.place } onChangeText={(place) => this.setState({place})}/>
                        </Item>
                        <Separator bordered style={{ marginTop: -1}}>
                            <Text>POZNÁMKA</Text>
                        </Separator>
                        <Item>
                            <Input autoCorrect={false} value={ this.state.note } placeholder='Zadajte poznámku' multiline={true} numberOfLines={4} onChangeText={(note) => this.setState({note})} style={{ height: 150}}/>
                        </Item>
                    </Form>
                    <View style={ styles.buttonContainer }>
                        <Button danger onPress={this.handleDeleteItem}>
                            <Text>Zmazať</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default MeetingUpdateScreen;