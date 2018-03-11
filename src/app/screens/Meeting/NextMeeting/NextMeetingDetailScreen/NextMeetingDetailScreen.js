import React, {Component} from 'react';
import { Container, Icon, Text, Card, CardItem, Left, Body, Content, Thumbnail, ListItem, Input, Button } from 'native-base';
import Header from '../../../../components/Header/Header'
import styles from './styles';
import MeetingStore from "../../../../flux/Meeting/MeetingStore";

class NextMeetingDetailScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            meetingItem: '',
        };

        this.goBack = this.goBack.bind(this);
        this.loadItem = this.loadItem.bind(this);
    };

    componentDidMount () {
        this.loadItem();
    };

    goBack () {
        this.props.navigation.goBack()
    }

    loadItem () {
        const meetingId = this.props.navigation.state.params.meetingId;

        MeetingStore.getItemById(meetingId).then(meetingItem => {
            return this.setState({ meetingItem })
        });

    };

    render() {
        const { meetingItem, userItems } = this.state;

        return (
            <Container>
                <Header
                    title={meetingItem.name}
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                />
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
            </Container>
        );
    }
}

export default NextMeetingDetailScreen;
