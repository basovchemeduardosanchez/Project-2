const moment = require ("moment");
const db = require( '../../models' );

function hoursRemaining(due, data) {
    var eventdate = moment(due);
    var tohoursdate = moment();
    var hoursUntilEvent = eventdate.diff(tohoursdate, 'hours');
    console.log("hours remaining: ", hoursUntilEvent)

    //OVERDUE
    if(hoursUntilEvent < 0){
        data.dataValues.overdue = true;
        data.lessThanThree = false;
        data.lessThanSever = false;
        data.overAWeek = false;
        console.log("Event is overdue by ", hoursUntilEvent, " hours",  "Overdue", data.overdue, "less than 3days", data.lessThanThree);
        console.log("data", data)
        console.log("data Values", data.dataValues)
    }
    //URGENT - LESS THAN 3 DAYS
    else if(hoursUntilEvent < 72 && hoursUntilEvent > 0){
        data.overdue = false
        data.lessThanThree = true;
        data.lessThanSever = false;
        data.overAWeek = 0;
        data.condition = "lessThanThree";
        console.log("This event is URGENT! Hours left: ", hoursUntilEvent,  data.condition);
        
    }
    //IMPORTANT - LESS THAN 7 DAYS
    else if(hoursUntilEvent > 72 && hoursUntilEvent < 168){
        data.condition = "lessThanSeven";
        console.log("This event is important! Hours left: ", hoursUntilEvent, data.condition);
        
    }
    //OTHER TASKS PENDING
    else{
        data.condition = "overAWeek";
        console.log("You still have over a week to complete this. hours left: ", hoursUntilEvent, data.condition);
        
    }
    return hoursUntilEvent
  
}

db.Task.findAll()
.then(data => {
    for(var i = 0; i < data.length; i++){
        console.log(data[i].dueDate);
        hoursRemaining(data[i].dueDate, data[i]);
    }
})
.catch(error => console.warn(error))

