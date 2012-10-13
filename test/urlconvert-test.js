var buster = require("buster");
var assert = buster.assert;
var M = require("../lib/urlconvert.js");

buster.testCase("buster-static", {

    "encodeURL": {

        "converts the spaces": function () {
            assert.equals(
                M.encodeURL('Something wonderful.'),
                'Something-wonderful.'
            );
        },

        "converts the dashes": function () {
            assert.equals(
                M.encodeURL('Something-wonderful.'),
                'Something%2dwonderful.'
            );
 
        }

    },

    "decodeURL": {

        "converts the spaces": function () {
            assert.equals(
                M.decodeURL('Something-wonderful.'),
                'Something wonderful.'
            );
        },

        "converts the dashes": function () {
            assert.equals(
                M.decodeURL('Something%2dwonderful.'),
                'Something-wonderful.'
            );
 
        }

    }


});
