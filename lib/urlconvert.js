
module.exports = {

    encodeURL: function (url) {
        return encodeURIComponent(url);
    },

    decodeURL: function (encoded) {
        var url = decodeURIComponent(encoded);
        return url;
    }

};

