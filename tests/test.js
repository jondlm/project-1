var assert = require('assert'),
    tinyT = require('../index.js');

var template = tinyT('hey {{ broSynonym }} are you {{ verb }} about surfing?');

assert.equal(
    template({broSynonym: 'bra', verb: 'stoked'}),
    'hey bra are you stoked about surfing?',
    'Basic template test to ensure it can parse correctly'
);

