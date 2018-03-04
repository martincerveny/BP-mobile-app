import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, Input, Badge, Right, Button, Icon, Thumbnail } from 'native-base';
import styles from './styles';

class NoteListItem extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem style={{ height: 60}}>
                            <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                                <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 1"/>
                            </Body>
                            <Button iconLeft transparent primary>
                                <Icon name='ios-add-circle' style={{ color: '#2ecc71'}}/>
                            </Button>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                            <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 1.1"/>
                            </Body>
                            <Button iconLeft transparent primary>
                                <Icon name='ios-remove-circle' style={{ color: '#e74c3c'}}/>
                            </Button>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                            <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 2"/>
                            </Body>
                            <Button iconLeft transparent primary>
                                <Icon name='ios-add-circle' style={{ color: '#2ecc71'}}/>
                            </Button>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                            <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 3"/>
                            </Body>
                            <Button iconLeft transparent primary>
                                <Icon name='ios-add-circle' style={{ color: '#2ecc71'}}/>
                            </Button>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                            <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 3.1"/>
                            </Body>
                            <Button iconLeft transparent primary>
                                <Icon name='ios-remove-circle' style={{ color: '#e74c3c'}}/>
                            </Button>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                            <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 3.2"/>
                            </Body>
                            <Button iconLeft transparent primary>
                                <Icon name='ios-remove-circle' style={{ color: '#e67e22'}}/>
                            </Button>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                            <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 4"/>
                            </Body>
                            <Button iconLeft transparent primary>
                                <Icon name='ios-add-circle' style={{ color: '#2ecc71'}}/>
                            </Button>
                        </ListItem>
                        <ListItem style={{ height: 60 }}>
                            <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                            <Body>
                            <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 5"/>
                            </Body>
                            <Button iconLeft transparent primary>
                                <Icon name='ios-add-circle' style={{ color: '#2ecc71'}}/>
                            </Button>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default NoteListItem;