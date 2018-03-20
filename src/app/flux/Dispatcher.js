import MeetingStore from './Meeting/MeetingStore';
import UserStore from './User/UserStore';

export default function (payload) {
    MeetingStore.dispatchIndex(payload);
    UserStore.dispatchIndex(payload);
}