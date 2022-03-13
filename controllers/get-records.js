const getRecordsService = require("../services/get-records");
const { validateDate, checkDates } = require("../utils/validations");

const getRecords = async (req, res, next) => {
    try {
        let { maxCount, minCount, startDate, endDate } = req.body;

        if (!startDate || !endDate || startDate == "" || endDate == "") {
            res.status(400)
            throw new Error(`startDate and endDate are mandatory and should be passed in string format`)
        }

        if (!maxCount || !minCount || isNaN(maxCount) || isNaN(minCount) || maxCount < 0 || minCount < 0) {
            res.status(400)
            throw new Error(`maxCount and minCount are mandatory and should be passed in number format`)
        }

        if (maxCount < minCount) {
            res.status(400)
            throw new Error("maxCount should be greater than minCount")
        }
        let validatedStartDate = validateDate(startDate)
        let validatedEndDate = validateDate(endDate)
        checkDates(validatedStartDate, validatedEndDate)


        let aggregated = await getRecordsService({
            maxCount, minCount,
            startDate: validatedStartDate,
            endDate: validatedEndDate
        });
        res.json({
            code: 0,
            message: "Success",
            records: aggregated
        })
    }
    catch (error) {
        if (error.message == "Invalid Date" || error.message == "start date cannot be greater than end date") {
            res.status(400)
        } else {
            res.status(500)
        }
        next(error)
    }

}

module.exports = getRecords