import Dispatcher from './../Dispatcher';
import MeetingConstants from './MeetingConstants';

/**
 * Creates or updates item.
 *
 * @param {array} data - Meeting data.
 * @returns {undefined}
 */
function createOrUpdateMeetingItem (data) {
    Dispatcher({
        type: MeetingConstants.MEETING_CREATE_UPDATE,
        data: data
    });
}

/**
 * Deletes item.
 *
 * @param {array} data - Meeting data.
 * @returns {undefined}
 */
function deleteMeetingItem (data) {
    Dispatcher({
        type: MeetingConstants.MEETING_DELETE,
        data: data
    });
}

export {
    createOrUpdateMeetingItem,
    deleteMeetingItem
}
