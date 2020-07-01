module.exports = function tweetRemoveLink(obj) {
    const result = obj.replace(/https:\/\/t.co\/\S*/gm, "");

    return result;
};
