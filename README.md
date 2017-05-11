OVH Mailinglist
===============

The main purpose of this module is to easily __list__, __add__ and __remove__ subscriber of an OVH Mailing-list.

It also provides a cache with memoize to avoid latency when you are list multiples times.


Install
-------
```
npm install
```

How to use it
-------------
```
const ml = require('ovh-mailinglist');

ml.init({
  endpoint: 'ovh-eu',
  appKey: 'keykeykeykeykey',
  appSecret: 'secretsecretsecretsecret',
  consumerKey: 'keykeykeykeykeykeykeykeykeykey'
});

ml.get('my-mailing@my-domain.org')
  .then((emails) => {
    console.log(emails);
  });
```

Dependencies
------------
- ovh@2.0.1
- memoizee0.4.5
