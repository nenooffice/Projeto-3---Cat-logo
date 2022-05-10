import Sequelize from 'sequelize';
import dontenv from 'dotenv';

dontenv.config();

export const connection = new Sequelize( 
//  process.env.DB_BASE, // Importa pelo nome do Banco de Dados
//  process.env.DB_USER, // Usuário
//  process.env.DB_PASS, // Senha
//   {
//   host: process.env.DB_LOCAL, // Local do Banco de Dados
//   port: 5432, // Porta do Banco de Dados
//   dialect: 'postgres', // Tipo do Banco de Dados
// });

// Quando subir para Render, retirar comentário abaixo

  'postgres://eugenio:2cmMRfe1I9RX7t4jiBMH5Mut5BIYax4G@dpg-c9ssdm7d17cd03l5hsg0-a/catalogo_nid0',

 {

dialect: 'postgres',
dialectOptions: {
  ssl: {
    rejectUnauthorized: false,
    require: true
}
}})

