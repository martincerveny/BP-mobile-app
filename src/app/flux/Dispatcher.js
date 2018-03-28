import MeetingStore from './Meeting/MeetingStore';
import UserStore from './User/UserStore';
import NoteStore from './Note/NoteStore';
import FacebookStore from "./Facebook/FacebookStore";

export default function (payload) {
    MeetingStore.dispatchIndex(payload);
    UserStore.dispatchIndex(payload);
    NoteStore.dispatchIndex(payload);
    FacebookStore.dispatchIndex(payload);
}