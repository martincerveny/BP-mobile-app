import React from 'react';
import { Card, CardItem, Thumbnail, Text, Body, Left, Button, Icon } from 'native-base';
import {FileSystem} from "expo";
import NoteList from '../NoteList/NoteList';
import NoteStore from "../../flux/Note/NoteStore";
import AppUtils from "../../utils/AppUtils";
import { createNoteItem } from '../../flux/Note/NoteActions';

import styles from './styles';

class UserCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            item: this.props.item,
            noteItems: ''
        };

        this.loadNoteItems = this.loadNoteItems.bind(this);
        this.handleCreateNoteItem = this.handleCreateNoteItem.bind(this);
    }

    componentDidMount () {
        NoteStore.addChangeListener(this.loadNoteItems);
        this.loadNoteItems();
    };

    componentWillUnmount () {
        NoteStore.removeChangeListener(this.loadNoteItems);
    }

    loadNoteItems () {
        const meetingId = this.props.meetingId;
        const userId = this.state.item.getId();

        NoteStore.getAllItemsByMeetingIdUserId(meetingId, userId).then(noteItems => {
            return this.setState({ noteItems })
        });
    }

    handleCreateNoteItem () {
        let noteItem = {
            id: AppUtils.generateId(),
            meetingId: this.props.meetingId,
            userId: this.state.item.getId(),
            text: ''
        };

        createNoteItem(noteItem);
    }

    render () {
        const { item, noteItems } = this.state;
        return (
            <Card>
                <CardItem>
                    <Left>
                        {
                            item.getImage() == ''
                                ? (<Thumbnail size={80} source={require('./../../../resources/images/person-flat.png')} />)
                                : (<Thumbnail size={80} source={{uri: FileSystem.documentDirectory + item.getImage()}} />)
                        }
                        <Body>
                        <Text>{item.getFirstName()} {item.getLastName()}</Text>
                        </Body>
                    </Left>
                </CardItem>

                <NoteList
                    items={noteItems}
                />

                <Button iconLeft transparent primary onPress={this.handleCreateNoteItem}>
                    <Icon name='ios-add-circle' style={ styles.addButton }/>
                    <Text>Pridať poznámku</Text>
                </Button>
            </Card>
        );
    }
};

export default UserCard;