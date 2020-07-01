module.exports = function tweetExcludeAnswers(obj) {
    const result = obj.filter(el => el.text.charAt(0) !== "@");

    return result;
};
