const moment = require ("moment");

function hoursRemaining(due) {
    var eventdate = moment(due);
    var tohoursdate = moment();
    var hoursUntilEvent = eventdate.diff(tohoursdate, 'hours');
    return hoursUntilEvent;
 
}
module.exports = hoursRemaining;


