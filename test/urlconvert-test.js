var buster = require("buster");
var assert = buster.assert;
var M = require("../lib/urlconvert.js");


buster.testCase("buster-static", {

    "encodeURL": {

        "converts the spaces": function () {
            assert.equals(
                M.encodeURL('something wonderful'),
                'something_wonderful'
            );
        }

    }

});
