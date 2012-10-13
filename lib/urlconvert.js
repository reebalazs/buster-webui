
module.exports = {

    encodeURL: function (url) {
        // the rest will be encoded as human unreadable encoded url
        url = encodeURIComponent(url);
        // convert the spaces to underscores, to human readable
        url = url.replace(/-/g, '%2d');
        url = url.replace(/%20/g, '-');
        return url;
    },

    decodeURL: function (encoded) {
        var url = encoded.replace(/-/g, ' ');
        url = decodeURIComponent(url);
        return url;
    }

};

