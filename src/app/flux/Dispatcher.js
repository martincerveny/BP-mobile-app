import MeetingStore from './Meeting/MeetingStore';

export default function (payload) {
    MeetingStore.dispatchIndex(payload);
}