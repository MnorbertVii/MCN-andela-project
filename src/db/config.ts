import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import * as pg from 'pg';

dotenv.config();


const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbPassword = process.env.DB_PASSWORD

export const sequelize = new Sequelize(
    `${dbName}`,
    `${dbUser}`,
    `${dbPassword}`,
    {
      host: dbHost,
      dialect: 'postgres',
    },
  );

const sequelizeConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connection established.');
    } catch (error) {
      if (error instanceof Error) {
        console.log(
          ` Error connecting to database ${error.message}`,
        );
      } else {
        console.log('Unexpected error', error);
      }
    }
  };

  // Running migrations when database is connected
sequelize
.sync()
.then(() => {
  console.log('Successfull table migrations');
})
.catch((error) => {
  if (error instanceof Error) {
    console.log(
      `Error occurred ${error.message}`,
    );
  } else {
    console.log('Unexpected error', error);
  }
});
  
export default sequelizeConnection