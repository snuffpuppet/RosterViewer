function menuWeeklyHours()
{
  var scheduleDays = 7;
  var startTime = new Date(getReportStartDate());
  var endTime = new Date(startTime.getTime() + scheduleDays * 24 * 60 * 60 * 1000);
  
  var calendarName = getReportCalendarName();
  var schedule = new lib.ShiftSchedule();
  
  if (calendarName == "All Calendars") {
    var calendarList = getReportCalendarList();
    for (var c=0; c<calendarList.length-1; c++) {
      if (calendarList[c] != "All Calendars") {
        var events = getCalendarEvents(calendarList[c], startTime, endTime);
        schedule.addEvents(startTime, endTime, events);
      }
    }
  }
  else {
    var events = getCalendarEvents(calendarName, startTime, endTime);
    schedule.addEvents(startTime, endTime, events);
  }
          
  var scheduleIndex = new lib.ShiftScheduleIndex(schedule);
  
  // clear out any old stuff
  clearOldReport();
  
  // First set up the headers - dates and day names
  var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];  
  for (var day=0; day < 7; day++) {
    var date = new Date(startTime.getTime() + day * 24 * 60 * 60 * 1000);
    SpreadsheetApp.getActiveSheet().getRange(1, 2 + day).setValue(date.getDate() + "/" + (date.getMonth()+1)).setFontColor("black");
    SpreadsheetApp.getActiveSheet().getRange(2, 2 + day).setValue(dayNames[day]).setFontColor("black");
  }
  
  // Now print out the schedule
  for (var ei=0; ei < scheduleIndex.employees.length; ei++) {
    var employee = scheduleIndex.employees[ei];
    SpreadsheetApp.getActiveSheet().getRange(3+ei, 1).setValue(employee).setFontColor("black");
    for (var day = 0; day < scheduleDays; day++) {
      SpreadsheetApp.getActiveSheet().getRange(3+ei, 2 + day)
        .setValue(schedule.employees[employee].day[day].totalHours)
        .setFontColor("black");
    }
    SpreadsheetApp.getActiveSheet().getRange(3+ei, 2 + scheduleDays).setValue(schedule.employees[employee].totalHours).setFontColor("black");
  }
 
  // Now print out warnings
  for (var w = 0; w < schedule.warnings.length; w++) {
    SpreadsheetApp.getActiveSheet().getRange(4+scheduleIndex.employees.length +w, 1).setValue(schedule.warnings[w]).setFontColor("red");
  }

  SpreadsheetApp.flush();

}
