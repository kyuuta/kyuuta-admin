const user = require('./user.js')
const list = require('./list.js')

module.exports = {
    ...user,
    ...list
}
