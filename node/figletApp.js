const figlet = require('figlet');

const getText = () => {
    return figlet.textSync('Mil', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
}

module.exports.getText = getText;