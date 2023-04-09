import * as sqlite3 from 'sqlite3'

export const iniciarDB = () => {
  const db = new sqlite3.default.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message)
    }
    console.log('Connected to the users database.')
  })

  const sql =
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, nombre, apellido, usuario, password, email)'
  db.run(sql)
  return db
}
