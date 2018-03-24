import _ from 'lodash'
import Bullet from 'bullet-pubsub';
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
     * Gets all items from the store by array of meetingIds.
     *
     * @param {Array} meetingIds - array of meetingIds
     * @returns {Promise.<Array.<MeetingItem>>} - Returns a Promise object.
     */
    async getAllItemsByMeetingIds (meetingIds) {
        return (await AsyncStorage.multiGet(meetingIds))
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

    /**
     * Dispatch index function
     *
     * @param payload
     */
    dispatchIndex: (payload) => {
        switch (payload.type) {
            case MeetingConstants.MEETING_CREATE_UPDATE:
                _createOrUpdateItem(payload.data)
                    .then(() => { })
                    .catch(() => { });
                break;
            case MeetingConstants.MEETING_DELETE:
                _deleteItem(payload.data)
                    .then(() => { })
                    .catch(() => { });
                break;
        }
    },

    /**
     * Emits the change event listener.
     *
     * @returns {undefined}
     */
    emitChangeListener () {
        Bullet.trigger(MeetingConstants.MEETING_EVENT_CHANGE)
    },

    /**
     * Adds the change event listener.
     *
     * @param {Function} callback - Callback function.
     * @returns {undefined}
     */
    addChangeListener (callback) {
        Bullet.on(MeetingConstants.MEETING_EVENT_CHANGE, callback)
    },

    /**
     * Removes the change event listener.
     *
     * @param {Function} callback - Callback function.
     * @returns {undefined}
     */
    removeChangeListener (callback) {
        Bullet.off(MeetingConstants.MEETING_EVENT_CHANGE, callback)
    }
};

/**
 * Creates or updates Meeting Item
 * @param data
 * @returns {Promise<void>}
 * @private
 */
async function _createOrUpdateItem (data) {
    AsyncStorage.setItem(MeetingConstants.STORE_KEY_ITEM + data.id, JSON.stringify(data));
    MeetingStore.emitChangeListener()
}

/**
 * Deletes Meeting Item
 * @param data
 * @returns {Promise<void>}
 * @private
 */
async function _deleteItem (data) {
    AsyncStorage.removeItem(MeetingConstants.STORE_KEY_ITEM + data);
    MeetingStore.emitChangeListener()
}

/**
 * Map data to object
 * @param obj
 * @private
 */
function _mapToItem (obj) {
    return _.assign(new MeetingItem(), obj)
}


export default MeetingStore;