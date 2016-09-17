
'use strict';

const expect = require('chai').expect;

const base32 = require('../index.js');
const bufferToBase32 = base32.bufferToBase32;
const base32ToBuffer = base32.base32ToBuffer;
const isValidBase32 = base32.isValidBase32;

// test data:
const INVALID_BASE32_STRINGS = [ 'abcdabdcd', '1dfecjsh', 'sdncej!j', 'asdasddedor=====', 'iuoiun&^c33ff' ];
const BASE32_TO_HEX = {
    'ufsgy43e': 'a1646c7364',
    'onqwizq=': '73616466',
    'eqwwy===': '242d6c',
    'fb2a====': '2874',
    '5u======': 'ed',
    'kuvs2ll6mavd6===': '552b2d2d7e602a3f',
    'hmucwpkmkpbkgtl5': '3b282b3d4c53c2a34d7d',
    'ykruk6dteexcyzdxo7bkgndsoq2q====': 'c2a3457873212e2c647777c2a334727435',
    'vcxwy4deyo7ttwnzzr5bbmx2hsld235eg33s5chrly======': 'a8af6c7064c3bf39d9b9cc7a10b2fa3c963d6fa436f72e88f15e',
    'vcxwy4deyo7ttwnzzr5bbmx2hsld235eg33s5chrl2uk63dqmtb36oozxhghuefs7i6jmplpuq3polui6fpkrl3mobsmhpzz3g44y6qqwl5dzfr5n6sdn5zordyv4===': 'a8af6c7064c3bf39d9b9cc7a10b2fa3c963d6fa436f72e88f15ea8af6c7064c3bf39d9b9cc7a10b2fa3c963d6fa436f72e88f15ea8af6c7064c3bf39d9b9cc7a10b2fa3c963d6fa436f72e88f15e'
};

describe('bufferToBase32', function() {

    it('converts Buffers into base32 strings', function() {

        Object.keys(BASE32_TO_HEX).forEach((base32String) => {

            const hexString = BASE32_TO_HEX[base32String];

            expect(bufferToBase32(Buffer.from(hexString, 'hex'))).to.equal(base32String);

        });

    });

});

describe('base32ToBuffer', function() {

    it('converts base32 strings into Buffers', function() {

        Object.keys(BASE32_TO_HEX).forEach((base32String) => {

            const hexString = BASE32_TO_HEX[base32String];

            expect(base32ToBuffer(base32String).toString('hex')).to.equal(hexString);

        });

    });

});

describe('isValidBase32', function() {

    it('validates base32 strings', function() {

        Object.keys(BASE32_TO_HEX).forEach((base32String) => {

            const hexString = BASE32_TO_HEX[base32String];

            expect(isValidBase32(base32String)).to.equal(true);

        });

        INVALID_BASE32_STRINGS.forEach((invalidBase32String) => {

            expect(isValidBase32(invalidBase32String)).to.equal(false);

        });

    });

});
