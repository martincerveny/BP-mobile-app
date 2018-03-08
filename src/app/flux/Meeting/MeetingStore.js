import _ from 'lodash'
import { AsyncStorage } from 'react-native';
import MeetingConstants from './MeetingConstants';
import MeetingItem from "./MeetingItem";

/**
 * Regexp for match the item's key stored in cache.
 */
const STORE_KEY_REGEXP = /^@MeetingStore:meeting:id:.+/


const MeetingStore = {

    /**
     * Returns item for the given ID.
     *
     * @param {string} id - Item's ID.
     * @returns {Promise.<MeetingItem>} - Returns a Promise object.
     */
    async getItemById (id) {
        return await AsyncStorage.getItem(MeetingConstants.STORE_KEY_ITEM + id)
            .then(result => _mapToItem(JSON.parse(result)))
    },

    /**
     * Gets all items from the store.
     *
     * @returns {Promise.<Array.<MeetingItem>>} - Returns a Promise object.
     */
    async getAllItems () {
        return (await AsyncStorage.multiGet(await MeetingStore.keys()))
            .map(result => _mapToItem(JSON.parse(result[1])))
    },

    /**
     * Gets all keys with all IDs for this store.
     *
     * @returns {Promise.<Array.<string>>} - Returns a Promise object.
     */
    async keys () {
        return (await AsyncStorage.getAllKeys())
            .filter(key => STORE_KEY_REGEXP.test(key))
    },

}

function _mapToItem (obj) {
    return _.assign(new MeetingItem(), obj)
}


export default MeetingStore;