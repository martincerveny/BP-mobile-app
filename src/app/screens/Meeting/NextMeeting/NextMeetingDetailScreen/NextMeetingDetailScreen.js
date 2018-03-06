import React, {Component} from 'react';
import { Container, Icon, Text, Card, CardItem, Left, Body, Content, Thumbnail, ListItem, Input, Button } from 'native-base';
import NoteListItem from '../../../../components/NoteListItem/NoteListItem';
import styles from './styles';

class NextMeetingDetailScreen extends Component {
    render() {
        return (
            <Content>
                <Card>
                    <CardItem >
                        <Left>
                            <Thumbnail square size={50} source={require('../../../../../resources/images/person-flat.png')} />
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
                            <Thumbnail square size={50} source={require('../../../../../resources/images/person-flat.png')} />
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
        );
    }
}

NextMeetingDetailScreen.navigationOptions = {
    headerTitle: 'Úvodná schôdzka',
    headerStyle: {backgroundColor: '#e74c3c'},
    headerTintColor: 'white',
};

export default NextMeetingDetailScreen;
