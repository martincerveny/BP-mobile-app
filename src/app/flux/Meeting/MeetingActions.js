import Dispatcher from './../Dispatcher';
import MeetingConstants from './MeetingConstants';

/**
 * Creates item.
 *
 * @param {array} data - Meeting data.
 * @returns {undefined}
 */
function createMeetingItem (data) {
    Dispatcher({
        type: MeetingConstants.MEETING_CREATE,
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
    createMeetingItem,
    deleteMeetingItem
}
