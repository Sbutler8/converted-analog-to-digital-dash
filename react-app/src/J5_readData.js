

// // /1.  specify domain and port of your socket.io server
// let socket = require('socket.io-client')('http://localhost:8080');

// //2.  create instance johnny-five Arduino board.
// let five = require("johnny-five");
// let board = new five.Board({repl:false,port: "COM4", baudRate: 57600});

// board.on("ready", function() {

//   /*
//   * Define your application below
//   */

//   // 1. initialize your hardware
//   const led = new five.Led(12);
//   const button = new five.Button(8);
//   const potentiometer = new five.Sensor("A0");
//   const temp = new five.Thermometer({
//     controller: "DHT11_I2C_NANO_BACKPACK"
//   });



//   // 2. Create socket message receiver for button
//   socket.on('led', function(data){
//     if(data.command === 'on'){
//       led.on();
//     }else if(data.command === 'off'){
//       led.off();
//     }
//   });

//   // 3. Create socket message emitter for button
//   button.on('press', function() {
//     socket.emit('press', {pin:8});
//     console.log('button pressed: ', {pin:8} )
//   });

//   // 4. Create socket message emitter for potentiometer
//   potentiometer.on('change', function() {
//     let speed = potentiometer.scaleTo(0,120)
//     socket.emit('change', {data: speed});
//     console.log('speed: ', speed)
//   });

//   // 5. Create socket message emitter for temp

//   temp.on('change', function() {
//     console.log("  celsius           : ", this.celsius);
//     console.log("  fahrenheit        : ", this.fahrenheit);
//     console.log("  kelvin            : ", this.kelvin);
//     });


//   /*
//   * Socket connection logger
//   * Nice to console log when socket connection is lost/alive
//   */
//   socket.on('connect', function(){
//     console.log('Socket Connected');
//   });
//   socket.on('disconnect', function(){
//     console.log('Socket Disconnected !');
//   });

//   /*
//   * REPL
//   * You can specify command to use from node REPL. Nice for debugging.
//   */
//   // this.repl.inject({
//   //   blink: function(){led.blink();}
//   // })
// })
