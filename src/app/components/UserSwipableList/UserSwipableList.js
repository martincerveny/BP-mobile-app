import React from 'react';
import {ListView, Alert } from 'react-native';
import UserListItem from './../UserListItem/UserListItem';
import {Button, Icon, List} from "native-base";
import MeetingConstants from "../../flux/Meeting/MeetingConstants";
import {createOrUpdateUserItem} from "../../flux/User/UserActions";
import NoteStore from "../../flux/Note/NoteStore";
import {deleteNoteItem} from "../../flux/Note/NoteActions";
import styles from './styles';

// swipe list, ktory umoznuje mazanie uzivatela zo schodzky
// nachadza sa na karte schodzky pri zozname ucastnikov
class UserSwipableList extends React.Component {
    constructor (props) {
        super(props);
    }

    deleteRow(item, secId, rowId, rowMap) {
        Alert.alert(
            'Odstrániť',
            'Odstrániť užívateľa zo schôdzky?',
            [
                {text: 'Zrušiť', style: 'cancel'},
                {text: 'OK',
                    onPress: () => {
                        rowMap[`${secId}${rowId}`].props.closeRow();

                        // zmazat schodzku z uzivatela v AsyncStorage
                        let index = item.meetingIds.indexOf(MeetingConstants.STORE_KEY_ITEM + this.props.meetingId);
                        if (index > -1) {
                            item.meetingIds.splice(index, 1);

                            // zmazeme vsetky poznamky usera v ramci schodzky
                            NoteStore.getAllItemsByMeetingIdUserId(this.props.meetingId, item.getId()).then(noteItems => {
                                for(var i=0; i<noteItems.length; i++) {
                                    deleteNoteItem(noteItems[i].getId())
                                }
                            });

                            createOrUpdateUserItem(item);
                        }

                    }
                },
            ],
            { cancelable: false }
        );
    }

    render () {
        return (
                <List
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.props.items)}
                    renderRow={item =>
                        <UserListItem
                            item={item}
                            onPress={this.props.onItemPress}
                        />
                    }
                    renderRightHiddenRow={(item, secId, rowId, rowMap) =>
                        <Button full danger onPress={_ => this.deleteRow(item, secId, rowId, rowMap)}>
                            <Icon active name="trash" />
                        </Button>}
                    rightOpenValue={-75}
                    disableRightSwipe='true'
                />

        );
    }
};

export default UserSwipableList;