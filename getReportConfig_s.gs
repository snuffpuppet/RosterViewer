function getReportCalendarList() {
  var calendarField = SpreadsheetApp.getActiveSpreadsheet().getRangeByName("ReportCalendar");
  ASSERT_TRUE(calendarField != null, "Roster calendar field not found in spreadsheet");
  ASSERT_TRUE(calendarField.getValues().length == 1, "Multiple roster date fields found, very confusing");

  var rule = calendarField.getDataValidation();
  if (rule != null) {
    var criteria = rule.getCriteriaType();
    var args = rule.getCriteriaValues();
  }
  
  return args[0];
}
  
function getReportCalendarName() {
  // connect to calendar specified on sheet
  var calendarField = SpreadsheetApp.getActiveSpreadsheet().getRangeByName("ReportCalendar");
  ASSERT_TRUE(calendarField != null, "Report calendar field not found in spreadsheet");
  ASSERT_TRUE(calendarField.getValues().length == 1, "Multiple ReportCalendar fields found, very confusing");

  return calendarField.getValues()[0];
}

function getReportStartDate() {
  // grab the start date from the named field on the sheet
  var startDateField = SpreadsheetApp.getActiveSpreadsheet().getRangeByName("ReportStartDate");
  ASSERT_TRUE(startDateField != null, "'ReportStartDate' field not found in spreadsheet");
  ASSERT_TRUE(startDateField.getValues().length == 1, "Multiple ReportStartDate fields found, very confusing");
  
  return startDateField.getValues()[0];
} 
