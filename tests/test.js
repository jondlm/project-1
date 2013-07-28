var assert = require('assert')
  , tinyT = require('../index.js')
  , count = 0;

var template = tinyT('hey {{ broSynonym }} are you {{ verb }} about surfing?');
count++;
assert.equal(
    template({broSynonym: 'bra', verb: 'stoked'}),
    'hey bra are you stoked about surfing?',
    'Basic template test to ensure it can parse correctly'
);


var template = tinyT('hey {{ broSynonym }} are you {{ verb }} about surfing? Im {{verb}}');
count++;
assert.equal(
    template({broSynonym: 'bra', verb: 'stoked'}),
    'hey bra are you stoked about surfing? Im stoked',
    'Make sure multiple keys are paresed correctly'
);

console.log('--------------------------------');
console.log(count + ' tests completed successfully');
console.log('--------------------------------');
