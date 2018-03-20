import Dispatcher from './../Dispatcher';
import UserConstants from './UserConstants';

/**
 * Creates item.
 *
 * @param {array} data - User data.
 * @returns {undefined}
 */
function createUserItem (data) {
    Dispatcher({
        type: UserConstants.USER_CREATE,
        data: data
    });
}

export {
    createUserItem,
}
