import React, {Component} from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text, Left, Separator, ListItem, List, Right, Input, Item, Content } from 'native-base';
import PeopleTab from '../../../components/UserListItem/UserListItem';
import NoteListItem from '../../../components/NoteListItem/NoteListItem';
import styles from './styles';

class MeetingDetailScreen extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab  heading={ <TabHeading><Icon name="ios-keypad" /></TabHeading>}>
                        <Content>
                            <Separator bordered>
                                <Text>INFORMÁCIE</Text>
                            </Separator>
                            <ListItem >
                                <Left>
                                    <Icon active name="calendar" style={{ fontSize: 20}}/>
                                    <Text>Dátum</Text>
                                </Left>
                                <Right>
                                    <Text>14.3.2018</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Icon active name="time" style={{ fontSize: 20}}/>
                                    <Text>Čas</Text>
                                </Left>
                                <Right>
                                    <Text>14:30</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Icon active name="navigate" style={{ fontSize: 20}}/>
                                    <Text>Miesto</Text>
                                </Left>
                                <Right>
                                    <Text>Brno</Text>
                                </Right>
                            </ListItem>
                            <ListItem last>
                                <Left>
                                    <Icon active name="people" style={{ fontSize: 20}}/>
                                    <Text>Počet ľudí</Text>
                                </Left>
                                <Right>
                                    <Text>7</Text>
                                </Right>
                            </ListItem>
                            <Separator bordered>
                                <Text>POZNÁMKA</Text>
                            </Separator>
                            <Text style={{ paddingLeft: 15, paddingTop: 10}}>Text poznámky</Text>
                        </Content>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="ios-people" /></TabHeading>}>
                        <PeopleTab navigation={ this.props.navigation }/>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="ios-paper" /></TabHeading>}>
                        <NoteListItem />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

MeetingDetailScreen.navigationOptions = {
    headerTitle: 'Úvodná schôdzka',
    headerStyle: {backgroundColor: '#e74c3c'},
    headerTintColor: 'white',
};

export default MeetingDetailScreen;