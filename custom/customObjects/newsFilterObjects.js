export default {
    sortByDateFilterByDateRangeAndTitle(title, afterDate, beforeDate) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: {
                $gte: new Date(afterDate),
                $lte: new Date(beforeDate)
            }
        }
    },
    sortByDateFilterByAfterDateAndTitle(title, afterDate) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: {
                $gte: new Date(afterDate)
            }
        }
    },
    sortByDateFilterByBeforeDateAndTitle(title, beforeDate) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: {
                $gte: new Date(beforeDate)
            }
        }
    },
    sortByDateFilterByTitle(title) {
        return {
            title: { $regex: new RegExp(`${title}$`) }
        }
    },
    sortByTitleFilterByTitleAndSingleDate(title, date) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: new Date(date)
        }
    },
    sortByTitleFilterByTitleAndDateRange(title, afterDate, beforeDate) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: {
                $gte: new Date(afterDate),
                $lte: new Date(beforeDate)
            }
        }
    },
    sortByTitleFilterByTitleAndAfterDate(title, afterDate) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: {
                $gte: new Date(afterDate),
            }
        }
    },
    sortByTitleFilterByTitleAndBeforeDate(title, beforeDate) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: {
                $gte: new Date(beforeDate),
            }
        }
    },
    sortByTitleAndSingleDate(date) {
        return {
            date: new Date(date)
        }
    },
    sortByTitleFilterByDateRange(afterDate, beforeDate) {
        return {
            date: {
                $gte: new Date(afterDate),
                $lte: new Date(beforeDate)
            }
        }
    },
    sortByTitleFilterByAfterDate(afterDate) {
        return {
            date: {
                $gte: new Date(afterDate),
            }
        }
    },
    sortByTitleFilterByBeforeDate(beforeDate) {
        return {
            date: {
                $lte: new Date(beforeDate)
            }
        }
    },
    sortByTitleFilterByTitle(title) {
        return {
            title: { $regex: new RegExp(`${title}$`) }
        }
    },
    filterBySingleDateAndTitle(title, date) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: new Date(date)
        }
    },
    filterByDateRangeAndTitle(title, afterDate, beforeDate) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: {
                $gte: new Date(afterDate),
                $lte: new Date(beforeDate)
            }
        }
    },
    filterByAfterDateAndTitle(title, afterDate) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: {
                $gte: new Date(afterDate),
            }
        }
    },
    filterByBeforeDateAndTitle(title, beforeDate) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
            date: {
                $gte: new Date(beforeDate),
            }
        }
    },
    filterByTitle(title) {
        return {
            title: { $regex: new RegExp(`${title}$`) },
        }
    },
    filterByDate(date) {
        return {
            date: new Date(date)
        }
    },
    filterByAfterDate(afterDate) {
        return {
            date: {
                $gte: new Date(afterDate),
            }
        }
    },
    filterByBeforeDate(beforeDate) {
        return {
            date: {
                $gte: new Date(beforeDate),
            }
        }
    }
}