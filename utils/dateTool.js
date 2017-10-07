function getDateTime() {

    var date = new Date();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    let weekday;
    switch (date.getDay()) {
        case 0:
            weekday = "Su";
            break;
        case 1:
            weekday = "Ma";
            break;
        case 2:
            weekday = "Ti";
            break;
        case 3:
            weekday = "Ke";
            break;
        case 4:
            weekday = "To";
            break;
        case 5:
            weekday = "Pe";
            break;
        case 6:
            weekday = "La";
            break;
    }

    return weekday + " " + day + "." + month;
}

module.exports = {
    today: function() {
        return getDateTime();
    }
}