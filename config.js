import mongodb from 'mongodb';

export const mongoClientURL = 'mongodb://localhost:27017/';

export const mongoClient = mongodb.MongoClient;

export const dbName = 'cryptoAPIProject_db';

export const appPort = 3000;
