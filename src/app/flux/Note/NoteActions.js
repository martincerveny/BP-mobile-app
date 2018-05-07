import Dispatcher from './../Dispatcher';
import NoteConstants from './NoteConstants';

/**
 * Creates item.
 *
 * @param {array} data - Note data.
 * @returns {undefined}
 */
function createNoteItem (data) {
    Dispatcher({
        type: NoteConstants.NOTE_CREATE,
        data: data
    });
}

/**
 * Deletes item.
 *
 * @param {array} data - Note data.
 * @returns {undefined}
 */
function deleteNoteItem (data) {
    Dispatcher({
        type: NoteConstants.NOTE_DELETE,
        data: data
    });
}

export {
    createNoteItem,
    deleteNoteItem
}
