const memoize = require('memoizee');
const mailing = require('./mailingList').default;

function get(name, cb) {
    return mailing.get(name);
}

var memoName = memoize(get, { async: true, maxAge: 300000 }); /* 5 min */

exports.get = function(name, cb) {
    return memoName(name);
};

exports.init = mailing.init;

exports.remove = function(ml, email, cb) {
    return mailing.remove(ml, email);
};

exports.add = function(ml, email, cb) {
    return mailing.add(ml, email);
};
