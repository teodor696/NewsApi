const getCollection = async (client, dbClientURL, dbName, collection) => {
    return await new Promise(async (resolve, reject) => {
        await client.connect(dbClientURL, async (err, db) => {
            if (err) {
                reject(err);
            }
            await db
                .db(dbName)
                .collection(collection)
                .find()
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
    getCollection
}