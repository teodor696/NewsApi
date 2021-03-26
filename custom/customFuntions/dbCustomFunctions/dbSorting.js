const sortColectionBy = async (client, dbClientURL, dbName, collection, sortBy) => {
    return await new Promise(async (resolve, reject) => {
        await client.connect(dbClientURL, async (err, db) => {
            if (err) {
                reject(err);
            }
            await db
                .db(dbName)
                .collection(collection)
                .find()
                .sort({ [sortBy]: 1 })
                .toArray((err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    db.close();
                });
        });
    })
}

const filteredBy = async (client, dbClientURL, dbName, collection, filters) => {
    return await new Promise(async (resolve, reject) => {
        await client.connect(dbClientURL, async (err, db) => {
            if (err) {
                reject(err);
            }
            await db
                .db(dbName)
                .collection(collection)
                .find(filters)
                .toArray((err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    db.close();
                });
        });
    })
}

const sortAndFilterBy = async (client, dbClientURL, dbName, collection, sortBy, filters) => {
    return await new Promise(async (resolve, reject) => {
        await client.connect(dbClientURL, async (err, db) => {
            if (err) {
                reject(err);
            }
            await db
                .db(dbName)
                .collection(collection)
                .find(filters)
                .sort({ [sortBy]: 1 })
                .toArray((err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    db.close();
                });
        });
    })
}

export default {
    sortColectionBy,
    filteredBy,
    sortAndFilterBy
}