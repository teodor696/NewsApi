import express from 'express';
import newsService from '../service/news-service.js';
import newsFilterObjects from '../custom/customObjects/newsFilterObjects.js';

const newsRouter = express.Router();

newsRouter

    .get('/', async (req, res) => {
        const { sortBy, afterDate, beforeDate, date, title } = req.query;
        let serviceRes;

        if (sortBy === 'date') {
            if (afterDate && beforeDate && title) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('date', newsFilterObjects
                        .sortByDateFilterByDateRangeAndTitle(title, afterDate, beforeDate));
            } else if (afterDate && title) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('date', newsFilterObjects
                        .sortByDateFilterByAfterDateAndTitle(title, afterDate));
            } else if (beforeDate && title) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('date', newsFilterObjects
                        .sortByDateFilterByBeforeDateAndTitle(title, beforeDate));
            } else if (title) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('date', newsFilterObjects
                        .sortByDateFilterByTitle(title));
            } else {
                serviceRes = await newsService.getNewsSortedBy('date');
            }
        } else if (sortBy === 'date') {
            if (date && title) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('title', newsFilterObjects
                        .sortByTitleFilterByTitleAndSingleDate(title, date));
            } else if (afterDate && beforeDate && title) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('title', newsFilterObjects
                        .sortByTitleFilterByTitleAndDateRange(title, afterDate, beforeDate));
            } else if (afterDate && title) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('title', newsFilterObjects
                        .sortByTitleFilterByTitleAndAfterDate(title, afterDate));
            } else if (beforeDate && title) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('title', newsFilterObjects
                        .sortByTitleFilterByTitleAndBeforeDate(title, beforeDate));
            } else if (date) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('title', newsFilterObjects
                        .sortByTitleAndSingleDate(date));
            } else if (afterDate) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('title', newsFilterObjects
                        .sortByTitleFilterByAfterDate(afterDate));
            } else if (beforeDate) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('title', newsFilterObjects
                        .sortByTitleFilterByBeforeDate(beforeDate));
            } else if (title) {
                serviceRes = await newsService
                    .getNewsFilteredAndSortedBy('title', newsFilterObjects
                        .sortByTitleFilterByTitle(title));
            } else {
                serviceRes = await newsService.getNewsSortedBy('title');
            }
        } else {
            if (title && date) {
                serviceRes = await newsService.
                    getNewsFilteredBy(newsFilterObjects
                        .filterBySingleDateAndTitle(title, date))
            } else if (title && afterDate && beforeDate) {
                serviceRes = await newsService.
                    getNewsFilteredBy(newsFilterObjects
                        .filterByDateRangeAndTitle(title, afterDate, beforeDate))
            } else if (title && afterDate) {
                serviceRes = await newsService.
                    getNewsFilteredBy(newsFilterObjects
                        .filterByAfterDateAndTitle(title, afterDate))
            } else if (title && beforeDate) {
                serviceRes = await newsService.
                    getNewsFilteredBy(newsFilterObjects
                        .filterByBeforeDateAndTitle(title, beforeDate))
            } else if (title) {
                serviceRes = await newsService.
                    getNewsFilteredBy(newsFilterObjects
                        .filterByTitle(title))
            } else if (date) {
                serviceRes = await newsService.
                    getNewsFilteredBy(newsFilterObjects
                        .filterByDate(date))
            } else if (afterDate) {
                serviceRes = await newsService.
                    getNewsFilteredBy(newsFilterObjects
                        .filterByAfterDate(afterDate))
            } else if (beforeDate) {
                serviceRes = await newsService.
                    getNewsFilteredBy(newsFilterObjects
                        .filterByBeforeDate(beforeDate))
            } else {
                serviceRes = await newsService.getNews();
            }
        }
        res.status(200).send(serviceRes);
    })

export default newsRouter;