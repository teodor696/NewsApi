import newsCollection from '../database/news-collection.js';

const getNews = async () => {
    return await newsCollection.getNews();
}

const getNewsSortedBy = async (sortBy) => {
    return await newsCollection.getNewsSortedBy(sortBy);
}

const getNewsFilteredBy = async (filters) => {
    return await newsCollection
        .getNewsFilteredBy(filters);
}

const getNewsFilteredAndSortedBy = async (sortBy, filters) => {
    return await newsCollection
        .getNewsFilteredAndSortedBy(sortBy, filters);
}

export default {
    getNews,
    getNewsSortedBy,
    getNewsFilteredBy,
    getNewsFilteredAndSortedBy
}