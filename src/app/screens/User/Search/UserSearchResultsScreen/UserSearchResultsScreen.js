import React from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Input, Left, Button, Icon } from 'native-base';
import Header from '../../../../components/Header/Header'

import styles from './styles';

class UserSearchResultsScreen extends React.Component {
    constructor (props) {
        super(props);

        this.goBack = this.goBack.bind(this)
    };

    goBack () {
        this.props.navigation.goBack()
    }

    render () {
        return (
            <Container style={ styles.container } >
                <Header
                    title='Výsledky hľadania'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                />
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

export default UserSearchResultsScreen;