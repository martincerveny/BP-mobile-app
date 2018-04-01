import React, {Component} from 'react';
import { View } from 'react-native';
import {
    Container, Content, Text, Separator, Input, Body, Label, Button, Form, Item, ListItem, Thumbnail, Toast, ActionSheet
} from 'native-base';
import Header from '../../../components/Header/Header'
import styles from './styles';
import {createOrUpdateUserItem, deleteUserItem} from "../../../flux/User/UserActions";
import { FileSystem, ImagePicker } from "expo";
import AppUtils from "../../../utils/AppUtils";

var ACTION_SHEET_ADD_IMAGE = ['Odfotiť', 'Vybrať fotku', 'Zrušiť'];
var ACTION_SHEET_EDIT_IMAGE = ['Odfotiť', 'Vybrať fotku', 'Vymazať fotku', 'Zrušiť'];
var ACTION_SHEET_DELETE_ITEM = ['Vymazať osobu', 'Zrušiť'];

var DESTRUCTIVE_INDEX_EDIT_IMAGE = 2;
var DESTRUCTIVE_INDEX_DELETE_ITEM = 0;

var CANCEL_INDEX_ADD_IMAGE = 2;
var CANCEL_INDEX_EDIT_IMAGE = 3;
var CANCEL_INDEX_DELETE_ITEM = 1;

class UserUpdateScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: this.props.userItem.getFirstName(),
            lastName: this.props.userItem.getLastName(),
            age: this.props.userItem.getAge(),
            image: this.props.userItem.getImage(),
            address: this.props.userItem.getAddress(),
            company: this.props.userItem.getCompany(),
            note: this.props.userItem.getNote(),
            imageActionSheetClicked: null,
            deleteUserClicked: null
        };

        this.goBack = this.goBack.bind(this);
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleImageActionSheet = this.handleImageActionSheet.bind(this);
        this.handleUpdateImage = this.handleUpdateImage.bind(this);
        this.handleCreateOrUpdateImageItem = this.handleCreateOrUpdateImageItem.bind(this);
    }

    goBack () {
        this.props.modalVisible(false);
    }

    handleUpdateItem () {
        let userItem = {
            id: this.props.userItem.getId(),
            meetingIds: this.props.userItem.getMeetingIds(),
            image: this.state.image,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            address: this.state.address,
            company: this.state.company,
            note: this.state.note
        };

        createOrUpdateUserItem(userItem);
        this.goBack();
    }


    handleDeleteItem () {
        ActionSheet.show(
            {
                options: ACTION_SHEET_DELETE_ITEM,
                cancelButtonIndex: CANCEL_INDEX_DELETE_ITEM,
                destructiveButtonIndex: DESTRUCTIVE_INDEX_DELETE_ITEM,
            },
            buttonIndex => {
                this.setState({ deleteItemClicked: ACTION_SHEET_DELETE_ITEM[buttonIndex] });

                if (this.state.deleteItemClicked === 'Vymazať osobu') {
                    // zmaze fotku uzivatela z filesystemu
                    if (this.state.image !== null) {
                        FileSystem.deleteAsync(FileSystem.documentDirectory + this.state.image)
                    }

                    deleteUserItem(this.props.userItem.getId());
                    this.goBack();
                    Toast.show({
                        text: 'Užívateľ bol zmazaný.',
                        position: 'bottom',
                        buttonText: 'OK',
                        duration: 3000,
                        type: 'success'
                    });
                }
            }
        );
    }

    handleImageActionSheet () {
        // v pripade, ze uzivatel este nema pridanu fotku
        if (this.props.userItem.getImage() == null) {

            ActionSheet.show(
                {
                    options: ACTION_SHEET_ADD_IMAGE,
                    cancelButtonIndex: CANCEL_INDEX_ADD_IMAGE,
                },
                buttonIndex => {
                    this.setState({ imageActionSheetClicked: ACTION_SHEET_ADD_IMAGE[buttonIndex] });
                    this.handleUpdateImage();
                }
            );
        } else {
            // v pripade ze uzivatel uz fotku pridanu ma
            ActionSheet.show(
                {
                    options: ACTION_SHEET_EDIT_IMAGE,
                    cancelButtonIndex: CANCEL_INDEX_EDIT_IMAGE,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX_EDIT_IMAGE,
                },
                buttonIndex => {
                    this.setState({ imageActionSheetClicked: ACTION_SHEET_EDIT_IMAGE[buttonIndex] });
                    this.handleUpdateImage();
                }
            );
        }
    }

    async handleUpdateImage () {
        if (this.state.imageActionSheetClicked === 'Odfotiť') {
            let path = AppUtils.generateId() + '.png';

            // spustime kameru
            let imageObject = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                quality: 0.2
            });

            // ak je vybraty novy obrazok
            if (imageObject.cancelled === false) {
                // ak uz predtym existovala fotka, ktora sa moze zmazat
                if (this.state.image !== null) {
                    await FileSystem.deleteAsync(FileSystem.documentDirectory + this.state.image);
                }
                // skopirujeme obrazok z galerie do nasej aplikacie
                await FileSystem.copyAsync({
                    from: imageObject.uri,
                    to: FileSystem.documentDirectory + path,
                });

                // ulozime userItem s novym obrazkom
                this.setState({ image: path});
                this.handleCreateOrUpdateImageItem();
            }
        } else if (this.state.imageActionSheetClicked === 'Vybrať fotku') {
            let path = AppUtils.generateId() + '.png';

            // spustime galeriu
            let imageObject = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
                allowsEditing: true,
                quality: 0.2
            });

            // ak je vybraty novy obrazok
            if (imageObject.cancelled === false) {

                // ak uz predtym existovala fotka, ktora sa moze zmazat
                if (this.state.image !== null) {
                    await FileSystem.deleteAsync(FileSystem.documentDirectory + this.state.image);
                }

                // skopirujeme obrazok z galerie do nasej aplikacie
                await FileSystem.copyAsync({
                    from: imageObject.uri,
                    to: FileSystem.documentDirectory + path,
                });

                // ulozime userItem s novym obrazkom
                this.setState({ image: path});
                this.handleCreateOrUpdateImageItem();
            }

        } else if (this.state.imageActionSheetClicked === 'Vymazať fotku') {
            await FileSystem.deleteAsync(FileSystem.documentDirectory + this.state.image);
            this.setState({ image: null });
            this.handleCreateOrUpdateImageItem();
        }
    }


    handleCreateOrUpdateImageItem () {
        let userItem = {
            id: this.props.userItem.getId(),
            meetingIds: this.props.userItem.getMeetingIds(),
            image: this.state.image,
            firstName: this.props.userItem.getFirstName(),
            lastName: this.props.userItem.getLastName(),
            age: this.props.userItem.getAge(),
            address: this.props.userItem.getAddress(),
            company: this.props.userItem.getCompany(),
            note: this.props.userItem.getNote()
        };
        createOrUpdateUserItem(userItem);
    }

    render() {
        return (
            <Container style={ styles.container}>
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
                    <ListItem>
                        {
                            this.props.userItem && this.state.image == null
                                ? (<Thumbnail size={80} source={require('./../../../../resources/images/person-flat.png')} />)
                                : (<Thumbnail size={80} source={{uri: FileSystem.documentDirectory + (this.props.userItem && this.state.image)}}/>)
                        }
                        <Body>
                        {
                            this.props.userItem && this.state.image == null
                                ? (<Button transparent onPress={this.handleImageActionSheet}><Text>Pridať fotku</Text></Button>)
                                : (<Button transparent onPress={this.handleImageActionSheet}><Text>Upraviť fotku</Text></Button>)
                        }

                        </Body>
                    </ListItem>
                    <Form>
                        <Separator bordered>
                            <Text>ZÁKLADNÉ INFORMÁCIE</Text>
                        </Separator>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label >Meno:</Label>
                            <Input autoCorrect={false} value={this.state.firstName} onChangeText={(firstName) => this.setState({firstName})}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label >Priezvisko:</Label>
                            <Input autoCorrect={false} value={this.state.lastName} onChangeText={(lastName) => this.setState({lastName})}/>
                        </Item>
                        <Separator bordered style={{ marginTop: -1}}>
                            <Text>ROZŠÍRENÉ INFORMÁCIE</Text>
                        </Separator>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Vek:</Label>
                            <Input keyboardType='numeric' autoCorrect={false} value={this.state.age} onChangeText={(age) => this.setState({age})}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Bydlisko:</Label>
                            <Input autoCorrect={false} value={this.state.address} onChangeText={(address) => this.setState({address})}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Firma:</Label>
                            <Input autoCorrect={false} value={this.state.company} onChangeText={(company) => this.setState({company})}/>
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

export default UserUpdateScreen;