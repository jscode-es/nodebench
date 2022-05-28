const path = require('path')
const lowdb = require('lowdb')

class Database {

    static db

    static async init() {

        console.log('Iniciar base de datos')

        const file = path.join(__dirname, 'db.json')
        const adapter = new lowdb.JSONFile(file)
        Database.db = new lowdb.Low(adapter)

        // Read data from JSON file, this will set db.data content
        await db.read()

        Database.db.data ||= { proyect: [] }
        Database.db.data ||= { database: [] }

        await Database.db.write()
    }

    static async insert() {
        await Database.db.write()
    }
}

module.exports = Database