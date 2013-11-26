var should = require('should');

describe('Robot', function(){
  var robot = require('../lib/robot');

  it('should say "Good morning" when someone say "Hi" between 0:00 - 12:00', function(done){
    var senderDatetime = new Date(2013, 11, 26, 0, 0, 0);
    robot.sayHi(senderDatetime).should.equal("Good morning");
    done();
  });

  it('should say "Good afternoon" when someone say "Hi" between 12:01 - 18:00', function(done){
    var senderDatetime = new Date(2013, 11, 28, 12, 1, 0);
    robot.sayHi(senderDatetime).should.equal("Good afternoon");
    done();
  })

  it('should say "Good evening" when someone say "Hi" between 18:01 - 23:59', function(done){
    var senderDatetime = new Date(2013, 11, 30, 18, 1, 0);
    robot.sayHi(senderDatetime).should.equal("Good evening");
    done();
  })
});