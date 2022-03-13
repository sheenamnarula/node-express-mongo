const validateDate = (dateString) => {
    let validDate = new Date(dateString)
    if (new Date(validDate) == "Invalid Date") {
        throw new Error("Invalid Date")
    } else {
        return validDate
    }
}

const checkDates = (startDate, endDate) => {
    if (startDate > endDate) {
        throw new Error(
            "start date cannot be greater than end date"
        )
    }
}

module.exports = {
    validateDate, checkDates
}