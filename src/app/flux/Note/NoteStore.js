import _ from 'lodash'
import { AsyncStorage } from 'react-native';
import NoteItem from "./NoteItem";
import Bullet from "bullet-pubsub";
import NoteConstants from "../Note/NoteConstants";

/**
 * Regexp for match the item's key stored in cache.
 */
const STORE_KEY_REGEXP = /^@NoteStore:note:id:.+/


const NoteStore = {

    /**
     * Returns item for the given ID.
     *
     * @param {string} id - Item's ID.
     * @returns {Promise.<NoteItem>} - Returns a Promise object.
     */
    async getItemById (id) {
        return await AsyncStorage.getItem(NoteConstants.STORE_KEY_ITEM + id)
            .then(result => _mapToItem(JSON.parse(result)))
    },

    /**
     * Gets all userItems from the store.
     *
     * @returns {Promise.<Array.<NoteItem>>} - Returns a Promise object.
     */
    async getAllItems () {
        return (await AsyncStorage.multiGet(await NoteStore.keys()))
            .map(result => _mapToItem(JSON.parse(result[1])))
    },

    /**
     * Return all userItems by UserId.
     *
     * @param userId
     * @returns {Promise.<Array.<UserItem>>} - Returns a Promise object.
     */
    async getAllItemsByUserId (userId) {
        return (await AsyncStorage.multiGet(await NoteStore.keys()))
            .map(result => _mapToItem(JSON.parse(result[1])))
            .filter(item => item.getUserId() === userId)

    },

    /**
     * Return all userItems by MeetingId and UserId.
     *
     * @param meetingId
     * @param userId
     * @returns {Promise.<Array.<UserItem>>} - Returns a Promise object.
     */
    async getAllItemsByMeetingIdUserId (meetingId, userId) {
        return (await AsyncStorage.multiGet(await NoteStore.keys()))
            .map(result => _mapToItem(JSON.parse(result[1])))
            .filter(item => item.getMeetingId() === meetingId)
            .filter(item => item.getUserId() === userId)

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
            case NoteConstants.NOTE_CREATE:
                _createItem(payload.data)
                    .then(() => { })
                    .catch(() => { });
                break;
            case NoteConstants.NOTE_DELETE:
                _deleteItem(payload.data)
                    .then(() => { })
                    .catch(() => { });
                break
        }
    },

    /**
     * Emits the change event listener.
     *
     * @returns {undefined}
     */
    emitChangeListener () {
        Bullet.trigger(NoteConstants.NOTE_EVENT_CHANGE)
    },

    /**
     * Adds the change event listener.
     *
     * @param {Function} callback - Callback function.
     * @returns {undefined}
     */
    addChangeListener (callback) {
        Bullet.on(NoteConstants.NOTE_EVENT_CHANGE, callback)
    },

    /**
     * Removes the change event listener.
     *
     * @param {Function} callback - Callback function.
     * @returns {undefined}
     */
    removeChangeListener (callback) {
        Bullet.off(NoteConstants.NOTE_EVENT_CHANGE, callback)
    }
};

/**
 * Creates Meeting Item
 * @param data
 * @returns {Promise<void>}
 * @private
 */
async function _createItem (data) {
    AsyncStorage.setItem(NoteConstants.STORE_KEY_ITEM + data.id, JSON.stringify(data));
    NoteStore.emitChangeListener();
}

/**
 * Deletes Note Item
 * @param id
 * @returns {Promise<void>}
 * @private
 */
async function _deleteItem (id) {
    AsyncStorage.removeItem(NoteConstants.STORE_KEY_ITEM + id);
    NoteStore.emitChangeListener()
}

/**
 * Map data to object
 * @param obj
 * @private
 */
function _mapToItem (obj) {
    return _.assign(new NoteItem(), obj)
}


export default NoteStore;