import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Input, Left, Button, Icon } from 'native-base';
import styles from './styles';

class UserSearchResultsScreen extends Component {
    render() {
        return (
            <Container style={ styles.container } >
                <Content>
                    <List>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Jan Novotný</Text>

                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Peter Green</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Martin Red</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Jakub Brown</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={ styles.listItem }>
                            <Thumbnail square size={80} source={require('../../../../../resources/images/person-flat.png')} />
                            <Body>
                                <Text>Karlos Black</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

UserSearchResultsScreen.navigationOptions = {
    headerTitle: 'Výsledky hľadania',
    headerStyle: {backgroundColor: '#e74c3c'},
    headerTintColor: 'white',
};

export default UserSearchResultsScreen;