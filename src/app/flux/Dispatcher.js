import MeetingStore from './Meeting/MeetingStore';
import UserStore from './User/UserStore';
import NoteStore from './Note/NoteStore';

export default function (payload) {
    MeetingStore.dispatchIndex(payload);
    UserStore.dispatchIndex(payload);
    NoteStore.dispatchIndex(payload);
}