import React, {Component} from 'react';
import Header from '../../../components/Header/Header'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Badge, Button, Icon } from 'native-base';
import styles from './styles';
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import MeetingList from '../../../components/MeetingList/MeetingList';

class MeetingListScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: []
        };

        this.loadItems = this.loadItems.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
    }

    componentDidMount () {
        this.loadItems();
    };

    loadItems () {
        MeetingStore.getAllItems().then(items => {
            return this.setState({ items })
        });
    }

    handleItemPress (id) {
        this.props.navigation.navigate("meeting.detail", { meetingId: id})
    }

    render () {
        const { items } = this.state;

        return (
            <Container style={ styles.container }>
                <Header
                    title='Zoznam schôdzok'
                    right={
                        <Button transparent onPress={() => this.props.navigation.navigate("meeting.create")}>
                            <Icon style={{ color: '#fff'}} name="add" />
                        </Button>
                    }
                />
                <Content>
                    <MeetingList
                    items={items}
                    onItemPress={this.handleItemPress}
                    />
                </Content>
            </Container>
        );
    }
}

export default MeetingListScreen;