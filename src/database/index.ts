import { Sequelize } from 'sequelize';

import database from '../configuration/database';

const connection = new Sequelize(database);

export default connection;
