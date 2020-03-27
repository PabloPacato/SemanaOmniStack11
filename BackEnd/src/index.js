const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

 

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * Get: Buscar um informação do Back end
  * Post: Criar uma informação no Back end
  * Put: Alterar uma informação no Back end
  * Delete: Deletar uma informação no Back end
  */
  /**
   * Tipos de Parametros
   * 
   * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recurso
   */
   /**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoBD, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */
