var os = require('os');
let listeners = [];
var figlet = require("figlet");






let getMemoryInfo = function () {

    var memory = os.freemem() / 1024 / 1024;
    figlet(memory, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    })
    if (memory < 1400) {
        for (let i = 0; i < listeners.length; i++) {
            let message = figlet("low memory", function (err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data)
            })
            listeners[i](message);
        }
    }
};

setInterval(() => {

    getMemoryInfo();
}, 1000);

let registerForAlerts = (callbackFunction) => {
    listeners.push(callbackFunction);
}

module.exports.registerForAlerts = registerForAlerts;