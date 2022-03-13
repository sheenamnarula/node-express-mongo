
const Record = require("../models/Record")
const getRecordsService = async ({ maxCount, minCount, startDate, endDate }) => {
    let aggregated = await Record.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: new Date(startDate),
                    $lt: new Date(endDate)
                }
            }
        },
        {
            $project: {

                key: '$key',
                createdAt: '$createdAt',
                totalCount: {
                    $sum: '$counts'

                },
                _id: 0,

            },

        },
        {
            "$match": {
                "totalCount": { "$gte": minCount, "$lte": maxCount }
            }
        }
    ])

    return aggregated;
}

module.exports = getRecordsService