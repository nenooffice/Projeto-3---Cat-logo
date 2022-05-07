import Sequelize from '../../config/sequelize';
import {} from 'dotenv/config';


export const connection = new Sequelize( 
 process.env.DB_BASE, // Importa pelo nome do Banco de Dados
 process.env.DB_USER, // Usuário
 process.env.DB_PASS, // Senha
  {
  host: process.env.DB_LOCAL, // Local do Banco de Dados
  port: 5432, // Porta do Banco de Dados
  dialect: 'postgres', // Tipo do Banco de Dados
});

// Quando subir para Render, retirar comentário abaixo

//  process.env.DB_URL,
//  {

// dialect: 'postgres',
// dialectOptions: {
//   ssl: {
//     rejectUnauthorized: false,
//     require: true
// }
// }})
