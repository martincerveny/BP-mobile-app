import React from 'react';
import {Card, CardItem, Thumbnail, Text, Left, Button, Icon, Input, Right, Body} from 'native-base';
import {FileSystem} from "expo";
import NoteList from '../NoteList/NoteList';
import NoteStore from "../../flux/Note/NoteStore";
import AppUtils from "../../utils/AppUtils";
import {createNoteItem} from '../../flux/Note/NoteActions';

import styles from './styles';

class UserCardItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            noteItems: '',
            text: ''
        };

        this.loadNoteItems = this.loadNoteItems.bind(this);
        this.handleCreateNoteItem = this.handleCreateNoteItem.bind(this);
        this.handleUserItemPress = this.handleUserItemPress.bind(this);
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
        const userId = this.props.item.getId();

        NoteStore.getAllItemsByMeetingIdUserId(meetingId, userId).then(noteItems => {
            return this.setState({ noteItems })
        });
    }

    clearTextInput(fieldName) {
        this.setState({ text: ''});
        this.refs[fieldName].setNativeProps({text: ''});
    }

    handleCreateNoteItem () {
        let noteItem = {
            id: AppUtils.generateId(),
            meetingId: this.props.meetingId,
            userId: this.props.item.getId(),
            text: this.state.text
        };
        createNoteItem(noteItem);

        this.clearTextInput(this.props.item.getId())
    }

    handleUserItemPress (id) {
        this.props.navigation.navigate("user.detail", { userId: id})
    }

    render () {
        const { noteItems } = this.state;

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Button transparent onPress={() => this.handleUserItemPress(this.props.item.getId())}>
                            {
                                this.props.item.getImage() == null
                                    ? (<Thumbnail size={80} source={require('../../../resources/assets/images/person-flat.png')} />)
                                    : (<Thumbnail size={80} source={{uri: FileSystem.documentDirectory + this.props.item.getImage()}} />)
                            }
                                <Text style={{ color: '#000', fontSize: 16}}>{this.props.item.getFirstName()} {this.props.item.getLastName()}</Text>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Input autoCorrect={false} ref={this.props.item.getId()} placeholder='Zadajte poznámku' onChangeText={(text) => this.setState({text})}/>
                    </Left>
                    {
                        this.state.text.trim() !== ""
                            ? (<Button transparent primary onPress={this.handleCreateNoteItem}>
                                <Icon name='md-add-circle' style={ styles.addButton }/>
                            </Button>)
                            : null
                    }

                </CardItem>

                <NoteList
                    items={noteItems}
                    meetingId={this.props.meetingId}
                    userId={this.props.item.getId()}
                />
            </Card>
        );
    }
};

export default UserCardItem;