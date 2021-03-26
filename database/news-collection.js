import { mongoClient, mongoClientURL, dbName } from '../config.js';
import collectionSort from '../custom/customFuntions/dbCustomFunctions/dbSorting.js';
import simpleCRUD from '../custom/customFuntions/dbCustomFunctions/simpleCRUD.js'

const getNews = async () => {
    return await simpleCRUD.getCollection(mongoClient, mongoClientURL, dbName, 'news');
}

const getNewsSortedBy = async (sortBy) => {
    return await collectionSort
        .sortColectionBy(mongoClient, mongoClientURL, dbName, 'news', sortBy);
}

const getNewsFilteredBy = async (filters) => {
    return await collectionSort
        .filteredBy(mongoClient, mongoClientURL, dbName, 'news', filters);
}

const getNewsFilteredAndSortedBy = async (sortBy, filters) => {
    return await collectionSort
        .sortAndFilterBy(mongoClient, mongoClientURL, dbName, 'news', sortBy, filters);
}

export default {
    getNews,
    getNewsSortedBy,
    getNewsFilteredBy,
    getNewsFilteredAndSortedBy
}