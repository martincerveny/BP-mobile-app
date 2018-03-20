import _ from 'lodash'
import { AsyncStorage } from 'react-native';
import UserItem from "./UserItem";
import Bullet from "bullet-pubsub";
import UserConstants from "../User/UserConstants";

/**
 * Regexp for match the item's key stored in cache.
 */
const STORE_KEY_REGEXP = /^@UserStore:user:id:.+/


const UserStore = {

    /**
     * Returns item for the given ID.
     *
     * @param {string} id - Item's ID.
     * @returns {Promise.<UserItem>} - Returns a Promise object.
     */
    async getItemById (id) {
        return await AsyncStorage.getItem(UserConstants.STORE_KEY_ITEM + id)
            .then(result => _mapToItem(JSON.parse(result)))
    },

    /**
     * Gets all items from the store.
     *
     * @returns {Promise.<Array.<UserItem>>} - Returns a Promise object.
     */
    async getAllItems () {
        return (await AsyncStorage.multiGet(await UserStore.keys()))
            .map(result => _mapToItem(JSON.parse(result[1])))
    },

    /**
     * Return all items by MeetingId.
     *
     * @param meetingId
     * @returns {Promise.<Array.<UserItem>>} - Returns a Promise object.
     */
    async getAllItemsByMeetingId (meetingId) {
        return (await AsyncStorage.multiGet(await UserStore.keys()))
            .map(result => _mapToItem(JSON.parse(result[1])))
            .filter(item => item.getMeetingIds().find(element => {
                    return element === meetingId;
                }
            ))
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
            case UserConstants.USER_CREATE:
                _createItem(payload.data)
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
        Bullet.trigger(UserConstants.USER_EVENT_CHANGE)
    },

    /**
     * Adds the change event listener.
     *
     * @param {Function} callback - Callback function.
     * @returns {undefined}
     */
    addChangeListener (callback) {
        Bullet.on(UserConstants.USER_EVENT_CHANGE, callback)
    },

    /**
     * Removes the change event listener.
     *
     * @param {Function} callback - Callback function.
     * @returns {undefined}
     */
    removeChangeListener (callback) {
        Bullet.off(UserConstants.USER_EVENT_CHANGE, callback)
    }
};

/**
 * Creates Meeting Item
 * @param data
 * @returns {Promise<void>}
 * @private
 */
async function _createItem (data) {
    AsyncStorage.setItem(UserConstants.STORE_KEY_ITEM + data.id, JSON.stringify(data));
    UserStore.emitChangeListener();
}

/**
 * Map data to object
 * @param obj
 * @private
 */
function _mapToItem (obj) {
    return _.assign(new UserItem(), obj)
}


export default UserStore;