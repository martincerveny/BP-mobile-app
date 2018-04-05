import React from 'react';
import { List, ListItem, Body, Input, Button, Icon, Text } from 'native-base';
import styles from './styles';
import {createNoteItem} from "../../flux/Note/NoteActions";

class NoteListItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            item: this.props.item,
            text: this.props.item.getText()
    };

        this.handleSaveItem = this.handleSaveItem.bind(this);
    }


    handleSaveItem () {
        let noteItem = {
            id: this.props.item.getId(),
            meetingId: this.props.meetingId,
            userId: this.props.userId,
            text: this.state.text
        };
        console.log('saveujem item ---  ' + noteItem.id);

        createNoteItem(noteItem);
    }

    render () {
        return (
            <List>
                <ListItem style={styles.listItem}>
                    <Body>
                        <Input
                            style={styles.input}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            autoCorrect={false}
                            onBlur={this.handleSaveItem}
                            // placeholder={this.state.item.getId()}
                        />
                    </Body>
                    <Button iconRight transparent danger onPress={() => this.props.deleteItemPress(this.props.item.getId())}>
                        <Icon name='ios-remove-circle'/>
                    </Button>
                </ListItem>
            </List>
        );
    }

};

export default NoteListItem;