import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Badge } from 'native-base';
import styles from './styles';
import NextMeetingListScreen from "../../Meeting/NextMeeting/NextMeetingListScreen/NextMeetingListScreen";

class UserListScreen extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>J</Text>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Jakub Brown</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem } onPress={() => this.props.navigation.navigate("user.detail")}>
                            <Thumbnail square size={80} source={require('../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Jan Novotný</Text>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>K</Text>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Karlos Black</Text>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>M</Text>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Martin Red</Text>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ paddingLeft: 10}}>P</Text>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Peter Green</Text>
                            </Body>
                        </ListItem>
                    </List>

                </Content>
            </Container>
        );
    }
}

UserListScreen.navigationOptions = {
    headerTitle: 'Zoznam ľudí',
    headerStyle: {backgroundColor: '#e74c3c'},
    headerTintColor: 'white',
};

export default UserListScreen;