import React from 'react';
import {ListView, Alert } from 'react-native';
import UserListItem from './../UserListItem/UserListItem';
import {Button, Content, Icon, List} from "native-base";
import MeetingConstants from "../../flux/Meeting/MeetingConstants";
import {createOrUpdateUserItem} from "../../flux/User/UserActions";
import styles from './styles';

class UserSwipableList extends React.Component {
    constructor (props) {
        super(props);

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listViewData: this.props.items,
        };
    }

    deleteRow(item, secId, rowId, rowMap) {
        Alert.alert(
            'Odstrániť',
            'Odstrániť užívateľa zo schôdzky?',
            [
                {text: 'Zrušiť', style: 'cancel'},
                {text: 'OK',
                    onPress: () => {
                        rowMap[`${secId}${rowId}`].props.closeRow();
                        const newData = [...this.state.listViewData];
                        newData.splice(rowId, 1);
                        this.setState({ listViewData: newData });

                        // zmazat schodzku z uzivatela v AsyncStorage
                        let index = item.meetingIds.indexOf(MeetingConstants.STORE_KEY_ITEM + this.props.meetingId);
                        if (index > -1) {
                            item.meetingIds.splice(index, 1);
                            createOrUpdateUserItem(item);
                        }
                    }
                },
            ],
            { cancelable: false }
        );
    }
    render () {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        return (
            <Content>
                <List
                    dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                    renderRow={item =>
                        <UserListItem
                            item={item}
                            onPress={this.props.onItemPress}
                        />
                    }
                    renderRightHiddenRow={(item, secId, rowId, rowMap) =>
                        <Button full danger onPress={_ => this.deleteRow(item, secId, rowId, rowMap)}>
                            <Icon active name="trash" />
                        </Button>}
                    rightOpenValue={-75}
                    disableRightSwipe='true'
                />
            </Content>
        );
    }
};

export default UserSwipableList;