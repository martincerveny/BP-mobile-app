import React from 'react';
import { ListView } from 'react-native';
import NoteListItem from './../NoteListItem/NoteListItem';
import {Button, Icon, List} from "native-base";
import {deleteNoteItem} from "../../flux/Note/NoteActions";

import styles from './styles';

//zoznam poznamok
class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteRow(item, secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();

        deleteNoteItem(item.getId());
    }

    render () {
        return (
            <List
                dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.props.items)}
                renderRow={item => (
                    <NoteListItem
                        item={item}
                        meetingId={this.props.meetingId}
                        userId={this.props.userId}
                    />
                )}

                renderRightHiddenRow={(item, secId, rowId, rowMap) =>
                    <Button full danger onPress={_ => this.deleteRow(item, secId, rowId, rowMap)}>
                        <Icon active name="trash" />
                    </Button>}
                rightOpenValue={-75}
                disableRightSwipe='true'
            />
        );
    }
}

export default NoteList;