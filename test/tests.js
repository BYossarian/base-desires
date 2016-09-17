
'use strict';

const expect = require('chai').expect;

const baseDesires = require('../index.js');
const bufferToBase32 = baseDesires.bufferToBase32;
const base32ToBuffer = baseDesires.base32ToBuffer;
const isValidBase32 = baseDesires.isValidBase32;
const bufferToUrlSafeBase64 = baseDesires.bufferToUrlSafeBase64;
const urlSafeBase64ToBuffer = baseDesires.urlSafeBase64ToBuffer;
const isValidUrlSafeBase64 = baseDesires.isValidUrlSafeBase64;

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
const INVALID_URL_SAFE_BASE64_STRINGS = [ 'St+8ceQ=', 'St-8c===', '6&7tdFrC', 'sa', 'sdf3fCS3s4', '====', 'vsdfv{sv3f@' ];
const URL_SAFE_BASE64_TO_HEX = {
    'St-8ceQ=': '4adfbc71e4',
    'c2FkZg==': '73616466',
    'JC1s': '242d6c',
    'KHQ=': '2874',
    '7Q==': 'ed',
    'VSs_LX-gKj8=': '552b3f2d7fa02a3f',
    'OygrPUxTwqNNfQ==': '3b282b3d4c53c2a34d7d',
    'wqNF_HMhLixk_3fCoz-ydDU=': 'c2a345fc73212e2c64ff77c2a33fb27435',
    'qK9scGTDvznZucx6ELL6PJY9b6Q29y6I8V4=': 'a8af6c7064c3bf39d9b9cc7a10b2fa3c963d6fa436f72e88f15e',
    'qK9scGTDvznZucx6ELL6PJY9b6Q29y6I8V6or2xwZMO_Odm5zHoQsvo8lj1vpDb3LojxXqivbHBkw7852bnMehCy-jyWPW-kNvcuiPFe': 'a8af6c7064c3bf39d9b9cc7a10b2fa3c963d6fa436f72e88f15ea8af6c7064c3bf39d9b9cc7a10b2fa3c963d6fa436f72e88f15ea8af6c7064c3bf39d9b9cc7a10b2fa3c963d6fa436f72e88f15e'
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

            expect(isValidBase32(base32String)).to.equal(true);

        });

        INVALID_BASE32_STRINGS.forEach((invalidBase32String) => {

            expect(isValidBase32(invalidBase32String)).to.equal(false);

        });

    });

});

describe('bufferToUrlSafeBase64', function() {

    it('converts Buffers into url-safe base64 strings', function() {

        Object.keys(URL_SAFE_BASE64_TO_HEX).forEach((urlSafeBase64String) => {

            const hexString = URL_SAFE_BASE64_TO_HEX[urlSafeBase64String];

            expect(bufferToUrlSafeBase64(Buffer.from(hexString, 'hex'))).to.equal(urlSafeBase64String);

        });

    });

});

describe('urlSafeBase64ToBuffer', function() {

    it('converts url-safe base64 strings into Buffers', function() {

        Object.keys(URL_SAFE_BASE64_TO_HEX).forEach((urlSafeBase64String) => {

            const hexString = URL_SAFE_BASE64_TO_HEX[urlSafeBase64String];

            expect(urlSafeBase64ToBuffer(urlSafeBase64String).toString('hex')).to.equal(hexString);

        });

    });

});

describe('isValidUrlSafeBase64', function() {

    it('validates url-safe base64 strings', function() {

        Object.keys(URL_SAFE_BASE64_TO_HEX).forEach((urlSafeBase64String) => {

            expect(isValidUrlSafeBase64(urlSafeBase64String)).to.equal(true);

        });

        INVALID_URL_SAFE_BASE64_STRINGS.forEach((invalidUrlSafeBase64String) => {

            expect(isValidUrlSafeBase64(invalidUrlSafeBase64String)).to.equal(false);

        });

    });

});
