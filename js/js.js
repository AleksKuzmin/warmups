// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.





function timeConversion(s) {

    let ampm =s.slice(-2)
    let militaryForm =s.slice(0,-2)
    let hourHand = s.slice(0,2)

    if(hourHand==="12" && ampm ==="AM") {
      return militaryForm.replace('12',"00");
    }

    if(hourHand !=='12' && ampm ==="AM") {
    return militaryForm;
  }

  if(hourHand==="12" && ampm === "PM") {
    return militaryForm;
  }

  if(hourHand !=='12' && ampm === "PM") {
    let intHour = +hourHand;
    intHour +=12;
    let adjustedHour = intHour.toString();

    return militaryForm.replace(/\d\d/, adjustedHour)
  }

}


console.log(timeConversion("11:01:00PM"))
