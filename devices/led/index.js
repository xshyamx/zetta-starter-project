var Device = require('zetta').Device,
      util = require('util'),
      MRAA = require('mraa-js');

function LED(pin) {
  Device.call(this);
  this.pin = pin || 13;
  this._pin = new MRAA.Gpio(this.pin);
};
util.inherits(LED, Device);

LED.prototype.init = function(config) {
  config
    .type('led')
    .name('Shyam\'s LED')
    .state('off')
    .when('off', { allow: ['turn-on'] })
    .when('on', { allow: ['turn-off'] })
    .map('turn-on', this.turnOn)
    .map('turn-off', this.turnOff);
  this._pin.dir(MRAA.DIR_OUT);
  this._pin.write(0);
};
LED.prototype.turnOn = function(cb) {
  this._pin.dir(MRAA.DIR_OUT);
  this._pin.write(1);
  this.state = 'on';
  cb();
}
LED.prototype.turnOff = function(cb) {
  this._pin.dir(MRAA.DIR_OUT);
  this._pin.write(0);
  this.state = 'off';
  cb();
}

module.exports = LED;
