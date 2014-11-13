var  zetta = require('zetta'),
    Buzzer = require('zetta-buzzer-edison-driver'),
Microphone = require('zetta-microphone-edison-driver'),
      Bean = require('zetta-bean-driver'),
       app = require('./apps'),
       LED = require('./devices/led');


// 172.16.1.16
zetta()
  .name('xshyamx')
  .link('http://hello-zetta.herokuapp.com')
  .use(Buzzer)
  .use(Microphone)
  .use(Bean, 'Bean4')
  .use(LED)
  .use(app)
  .listen(1337);
