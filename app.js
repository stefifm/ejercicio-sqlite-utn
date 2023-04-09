import inquirer from 'inquirer'
import { iniciarDB } from './db.js'
import {
  agregarUsuario,
  eliminarUsuario,
  listarUsuarios,
  modificarUsuario,
} from './controllers/users.controllers.js'
import { preguntas } from './utils/preguntas.utils.js'

const main = () => {
  const db = iniciarDB()
  console.clear()

  inquirer.prompt(preguntas).then((answers) => {
    switch (answers.accion) {
      case 'Listar':
        listarUsuarios(db)
        break
      case 'Agregar':
        agregarUsuario(db)
        break
      case 'Modificar':
        modificarUsuario(db)
        break
      case 'Eliminar':
        eliminarUsuario(db)
        break
    }
  })
}

main()
