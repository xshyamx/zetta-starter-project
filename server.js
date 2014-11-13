var  zetta = require('zetta'),
    Buzzer = require('zetta-buzzer-edison-driver'),
Microphone = require('zetta-microphone-edison-driver');


// 172.16.1.16
zetta()
  .name('xshyamx')
  .link('http://hello-zetta.herokuapp.com')
  .use(Buzzer)
  .use(Microphone)
  .listen(1337);
