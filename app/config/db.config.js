module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Horse_6007",
  DB: "book_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
