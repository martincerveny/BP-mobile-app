import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonContainer: {
        paddingTop: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    addButtonContainer: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    searchBox: {
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    }
});