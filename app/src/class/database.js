

const db = () => {

    let db = openDatabase('db', '1.0', 'Nodebech', 2 * 1024 * 1024);

    global.db = db

    return global.db
}

export default db