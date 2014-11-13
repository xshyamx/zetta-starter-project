var zetta = require('zetta'),
   Buzzer = require('zetta-buzzer-edison-driver');


// 172.16.1.16
zetta()
  .name('xshyamx')
  .use(Buzzer)
  .listen(1337);
