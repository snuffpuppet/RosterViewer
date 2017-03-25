function getCalendarEvents(calendarName, startTime, endTime) {
  var calendars = CalendarApp.getCalendarsByName(calendarName);
  ASSERT_TRUE(calendars.length == 1, calendars.length + " calendars found for '" + calendarName + "'");

  var events = calendars[0].getEvents(startTime, endTime);
  ASSERT_TRUE(events != null, "Problem retrieving shifts from " + startTime.getDate() + "/" + startTime.getMonth() + " to " + endTime.getDate() + "/" + endTime.getMonth());
  ASSERT_TRUE(events.length > 0, "No shifts found from " + startTime.getDate() + "/" + startTime.getMonth() + " to " + endTime.getDate() + "/" + endTime.getMonth());
  
  return events;
} 

