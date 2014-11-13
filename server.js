var zetta = require('zetta'),
   Buzzer = require('zetta-buzzer-edison-driver');


// 172.16.1.16
zetta()
  .name('xshyamx')
  .link('http://hello-zetta.herokuapp.com')
  .use(Buzzer)
  .listen(1337);
