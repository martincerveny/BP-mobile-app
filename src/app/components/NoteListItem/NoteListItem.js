import React, {Component} from 'react'; Left
import { Container, Header, Content, List, ListItem, Text, Body, Input, Badge, Right, Button, Icon, Thumbnail, Card, CardItem, Left} from 'native-base';
import styles from './styles';

class NoteListItem extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem >
                            <Left>
                                <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                                <Body>
                                <Text>Jan Novotný</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <ListItem style={{ height: 60}}>
                            <Body>
                            <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 1"/>
                            </Body>
                        </ListItem>
                        <ListItem style={{ height: 60}}>
                            <Body>
                            <Input style={{ marginLeft: 10, marginTop: 5}} placeholder="Poznámka 2"/>
                            </Body>
                        </ListItem>
                        <Button iconLeft transparent primary>
                            <Icon name='ios-add-circle' style={{ color: '#2ecc71'}}/>
                        </Button>
                    </Card>
                    <Card>
                        <CardItem >
                            <Left>
                                <Thumbnail square size={50} source={require('../../../resources/images/person-flat.png')} />
                                <Body>
                                <Text>Peter Green</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <Button iconLeft transparent primary>
                            <Icon name='ios-add-circle' style={{ color: '#2ecc71'}}/>
                        </Button>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default NoteListItem;