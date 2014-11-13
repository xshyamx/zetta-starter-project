module.exports = function(server) {
  var buzzerQuery = server.where({ type: 'buzzer' });
  var microphoneQuery = server.where({ type: 'microphone' });

  server.observe(
    [buzzerQuery, microphoneQuery],
    function(buzzer, microphone) {
      microphone.streams.volume.on('data', function(msg) {
        if ( msg.data > 200 )  {
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
}
