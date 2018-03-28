import _ from 'lodash'
import { AsyncStorage } from 'react-native';
import FacebookItem from "./FacebookItem";
import FacebookConstants from "../Facebook/FacebookConstants";
import NoteConstants from "../Note/NoteConstants";
import Bullet from "bullet-pubsub";

const FacebookStore = {

    /**
     * Returns item.
     *
     * @returns {Promise.<NoteItem>} - Returns a Promise object.
     */
    async getItem () {
        return await AsyncStorage.getItem(FacebookConstants.STORE_KEY_ITEM)
            .then(result => _mapToItem(JSON.parse(result)))
    },

    /**
     * Dispatch index function
     *
     * @param payload
     */
    dispatchIndex: (payload) => {
        switch (payload.type) {
            case FacebookConstants.FACEBOOK_CREATE:
                _createItem(payload.data)
                    .then(() => { })
                    .catch(() => { });
                break;
            case FacebookConstants.FACEBOOK_DELETE:
                _deleteItem()
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
        Bullet.trigger(FacebookConstants.FACEBOOK_EVENT_CHANGE)
    },

    /**
     * Adds the change event listener.
     *
     * @param {Function} callback - Callback function.
     * @returns {undefined}
     */
    addChangeListener (callback) {
        Bullet.on(FacebookConstants.FACEBOOK_EVENT_CHANGE, callback)
    },

    /**
     * Removes the change event listener.
     *
     * @param {Function} callback - Callback function.
     * @returns {undefined}
     */
    removeChangeListener (callback) {
        Bullet.off(FacebookConstants.FACEBOOK_EVENT_CHANGE, callback)
    }
};

/**
 * Creates Meeting Item
 * @param data
 * @returns {Promise<void>}
 * @private
 */
async function _createItem (data) {
    AsyncStorage.setItem(FacebookConstants.STORE_KEY_ITEM, JSON.stringify(data));
}

/**
 * Deletes Note Item
 * @returns {Promise<void>}
 * @private
 */
async function _deleteItem () {
    AsyncStorage.removeItem(FacebookConstants.STORE_KEY_ITEM);
    FacebookStore.emitChangeListener();
}

/**
 * Map data to object
 * @param obj
 * @private
 */
function _mapToItem (obj) {
    return _.assign(new FacebookItem(), obj)
}


export default FacebookStore;