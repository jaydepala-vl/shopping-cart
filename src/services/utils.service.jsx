const utils = {

    getRandomInt: (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    itemExists: (list, item, keyName) => {
        return list.findIndex(listItem => item[keyName] && item[keyName] === listItem[keyName]);
    }
};
export default utils;
