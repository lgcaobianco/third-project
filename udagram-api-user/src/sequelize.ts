import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': 'postgres',
  'password': '12345',
  'database': 'third-project',
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
});
