function clearOldReport() {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(1, 2, 2, 30).clear({contentsOnly: true}).setFontColor("black").setFontWeight('normal');
  sheet.getRange(3, 1, 100, 30).clear({contentsOnly: true}).setFontColor("black").setFontWeight('normal');
}
