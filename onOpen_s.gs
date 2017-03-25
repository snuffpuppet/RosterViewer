function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [    
    {
      name : "Weekly Hours",
      functionName : "menuWeeklyHours"
    }


 ];
  sheet.addMenu("Roster", entries);
}
