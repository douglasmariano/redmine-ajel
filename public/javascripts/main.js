//Calcola l'ora attuale
function getTime() {

    h = (new Date()).getHours();
    m = (new Date()).getMinutes();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    return h + ":" + m;

}

// calc time
function countTime() {

    var timeStart     = $("#time_entry_custom_field_values_37").val();
    var timeEnd     = $("#time_entry_custom_field_values_38").val();

    //split time
    var timeStartArr = timeStart.split(":");
    var timeEndArr = timeEnd.split(":");

    //tranform into minutes
    var nStartMin = (Number(timeStartArr[0]) * 60) + Number(timeStartArr[1]);
    var nEndMin = (Number(timeEndArr[0]) * 60) + Number(timeEndArr[1]);

    //calc diff
    var nDiff = 0;
    if (nStartMin > nEndMin) {
        nDiff = nStartMin - nEndMin;
    } else {
        nDiff = nEndMin - nStartMin;
    }

    return Math.ceil(nDiff/60*100) / 100;

}

// when load page
$(document).ready(function(){

    //now()
    $("#time_entry_custom_field_values_37").val(getTime());

    //update hour
    $("#setTime").click(function() {
        $("#time_entry_hours").val(countTime());
    })

    //update start time
    $("#setStartTime").click(function() {
        $("#time_entry_custom_field_values_37").val(getTime());
    })    

    //update end time
    $("#setEndTime").click(function() {
        $("#time_entry_custom_field_values_38").val(getTime());
        $("#setTime").click(); //Simula il click
    });    

});