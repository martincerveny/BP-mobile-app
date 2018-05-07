const AppUtils = {
    //funkcia pre generovanie unikatnych ID
    generateId() {
        function guid() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return guid() + guid() + '-' + guid() + '-' + guid() + '-' + guid() + '-' + guid() + guid() + guid();
    }
};

export default AppUtils;