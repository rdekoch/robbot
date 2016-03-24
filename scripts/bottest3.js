module.exports = function(robot) {
    robot.respond(/patrick/i, function(msg) {
        msg.reply("Peej");
    });
}
