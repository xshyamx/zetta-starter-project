module.exports = function(server) {
  var buzzerQuery = server.where({ type: 'buzzer' });
  var microphoneQuery = server.where({ type: 'microphone' });

  server.observe(
    [buzzerQuery, microphoneQuery],
    function(buzzer, microphone) {
      microphone.streams.volume.on('data', function(msg) {
        if ( msg.data > 500 )  {
          buzzer.call('turn-on', function(err) {
            if ( err ) {
              console.log(err);
            }
          });
          setTimeout(function() {
            buzzer.call('turn-off', function(err) {
              if ( err ) {
                console.log(err);
              }
            });
          }, 3000);
        }
      });
    }
  );
  var beanQuery = server.where({ type: 'ble-bean' });
  server.observe([beanQuery], function(bean) {
    bean.call('set-color', 'blue', function(err) {
      if ( err ) {
        console.log(err);
      }
    });
    /*
    var colors = ['red', 'green', 'blue'], i = 0;
    var changeColor = function() {
      console.log("bean.call('set-color', %s)", colors[i]);
      bean.call('set-color', colors[i++], function(err) {
        if ( err ) {
          console.log(err);
        }
      });
      if ( i > colors.length ) {
        i = 0;
      }
    };
    setInterval(changeColor, 1000);
    */
  });

  var ledQuery = server.where({ type: 'led' });
  server.observe([ledQuery], function(led) {
    var on = false;
    var toggle = function() {
      led.call(on ? 'turn-on' : 'turn-off', function(err) {
        if ( err ) {
          console.log(err);
        }
      });
      on = !on;
    }
    setInterval(toggle, 1000);
  });
}
