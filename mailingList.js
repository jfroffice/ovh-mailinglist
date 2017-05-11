var ovh;

function getBaseUrl(name) {
    const tmp = name.split('@');
    return '/email/domain/' + tmp[1] + '/mailingList/' + tmp[0];
}

exports.default = {
    init: function(options) {
        ovh = require('ovh')(options);
    },
    get: function(name, cb) {
        return ovh.requestPromised('GET', getBaseUrl(name) + '/subscriber/');
    },
    remove: function(name, email, cb) {
        return ovh.requestPromised('DELETE', getBaseUrl(name) + '/subscriber/' + email);
    },
    add: function(name, email, cb) {
        return ovh.requestPromised('POST', getBaseUrl(name) + '/subscriber/', { email });
    }
};
