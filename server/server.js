import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import path from "path";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';




//crea instancia de express
const app = express()
// se indica que usará lso cors
app.use(cors())
//pa que haga peticiones
app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const carpetaPath = join(__dirname, 'dist/index.html');
// app.use('/public', express.static(carpetaPath))
// console.log(carpetaPath);

app.use(express.static('dist'));

//Se crea Conexion a la base de datos
const db = mysql.createConnection({
  host: "db1.civkdwxiujte.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "dbaws"
})

db.connect(err => {
  err ? console.log("Error al conectar la base de datos", err) : console.log("Conección sin error")
})



// se crea el endpoint
app.post('/', (req, res) => {
  const email = req.body.email;
  const sql = "SELECT * FROM Usuarios WHERE email = ?";
  const query = mysql.format(sql, [email]);

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.json({ Message: "Error dentro del servidor" });
    }
    return res.json(result);
  });
});




//Se prueba el puerto
app.listen(8081, () => {
  console.log("listening");
})