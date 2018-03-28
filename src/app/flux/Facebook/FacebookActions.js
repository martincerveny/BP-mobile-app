import Dispatcher from './../Dispatcher';
import FacebookConstants from "./FacebookConstants";

/**
 * Creates item.
 *
 * @param {array} data - Note data.
 * @returns {undefined}
 */
function createFacebookItem (data) {
    Dispatcher({
        type: FacebookConstants.FACEBOOK_CREATE,
        data: data
    });
}

/**
 * Deletes item.
 *
 * @param {array} data - Note data.
 * @returns {undefined}
 */
function deleteFacebookItem (data) {
    Dispatcher({
        type: FacebookConstants.FACEBOOK_DELETE,
        data: data
    });
}

export {
    createFacebookItem,
    deleteFacebookItem
}
