import Dispatcher from './../Dispatcher';
import UserConstants from './UserConstants';

/**
 * Creates or updates item.
 *
 * @param {array} data - User data.
 * @returns {undefined}
 */
function createOrUpdateUserItem (data) {
    Dispatcher({
        type: UserConstants.USER_CREATE_UPDATE,
        data: data
    });
}

/**
 * Deletes item.
 *
 * @param {array} data - User data.
 * @returns {undefined}
 */
function deleteUserItem (data) {
    Dispatcher({
        type: UserConstants.USER_DELETE,
        data: data
    });
}

export {
    createOrUpdateUserItem,
    deleteUserItem
}
