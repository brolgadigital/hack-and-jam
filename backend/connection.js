const { Sequelize } = require('sequelize')

const method = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, 
    {
        host: process.env.DATABASE_URL,
        port: process.env.DATABASE_PORT,
        dialect: 'mysql'
    }
)
exports.sequelize = method

exports.connection = async (done) => {
    try {
        await method.authenticate()
    } catch (error) {
        console.error(error)
        return error
    }
    done()
}