import inquirer from 'inquirer'

const listarUsuarios = (db) => {
  const sqlSelect = 'SELECT * FROM users'
  db.all(sqlSelect, [], (err, rows) => {
    if (err) return console.log(err.message)
    rows.forEach((row) => {
      console.log(row)
    })
  })
}

const agregarUsuario = (db) => {
  inquirer
    .prompt([
      { type: 'input', name: 'nombre', message: 'Nombre' },
      { type: 'input', name: 'apellido', message: 'Apellido' },
      { type: 'input', name: 'usuario', message: 'Usuario' },
      { type: 'password', name: 'password', message: 'Password' },
      { type: 'input', name: 'email', message: 'Email' },
    ])
    .then((answers) => {
      const sql =
        'INSERT INTO users (nombre, apellido, usuario, password, email) VALUES (?, ?, ?, ?, ?)'
      const params = [
        answers.nombre,
        answers.apellido,
        answers.usuario,
        answers.password,
        answers.email,
      ]
      db.run(sql, params, (err) => {
        if (err) return console.log(err.message)
        console.log('Usuario agregado')
      })
    })
}

const modificarUsuario = (db) => {
  inquirer
    .prompt([
      { type: 'number', name: 'id', message: 'ID Usuario' },
      { type: 'input', name: 'usuario', message: 'Usuario' },
    ])
    .then((answers) => {
      const sql = 'UPDATE users SET usuario = ? WHERE id = ?'
      const params = [answers.usuario, answers.id]
      db.run(sql, params, (err) => {
        if (err) return console.log(err.message)
        console.log('Usuario modificado')
      })
    })
}

const eliminarUsuario = (db) => {
  inquirer.prompt([{ type: 'number', name: 'id', message: 'ID Usuario' }]).then((answers) => {
    const sql = 'DELETE FROM users WHERE id = ?'
    const params = [answers.id]
    db.run(sql, params, (err) => {
      if (err) return console.log(err.message)
      console.log('Usuario eliminado')
    })
  })
}

export { listarUsuarios, agregarUsuario, modificarUsuario, eliminarUsuario }
