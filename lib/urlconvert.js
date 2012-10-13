
module.exports = {

    encodeURL: function (url) {
        // first convert the spaces to underscores
        url = url.replace(/ /g, '_');
        // the rest will be encoded as human unreadable encoded url
        return encodeURIComponent(url);
    },

    decodeURL: function (encoded) {
        var url = decodeURIComponent(encoded);
        return url;
    }

};

