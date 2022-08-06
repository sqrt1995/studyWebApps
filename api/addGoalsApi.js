function doGet(e) {
    //管理用
    if ('admin' in e.parameter) {
      const rows = readAllData();
      const result = rows.map(row => ({ 'userId': row[0], 'longTermGoal': row[1], 'deadline': row[2], 'weekDeadline': row[3], 'weekGoal1': row[4], 'content1': row[5], 'weekGoal2': row[6], 'content2': row[7], 'weekGoal3': row[8], 'content3': row[9], 'weekGoal4': row[10], 'content4': row[11], 'weekGoal5': row[12], 'content5': row[13] }))
      const out = ContentService.createTextOutput();
      const responseText = JSON.stringify(result);
      out.setMimeType(ContentService.MimeType.JSON);
      out.setContent(responseText);
      return out;
    }
  }
  
  function doPost() {
    const jsonString = e.postData.getDataAsString();
    const data = JSON.parse(jsonString);
    writeData([[data.userId, data.longTermGoal, data.deadline, data.weekDeadline,
    data.weekGoal1, data.content1, data.weekGoal2, data.content2, data.weekGoal3, data.content3, 
    data.weekGoal4, data.content4, data.weekGoal5, data.content5]]);
  
    const result = {
      result: 'OK'
    }
  
    const out = ContentService.createTextOutput();
    const responseText = JSON.stringify(result);
    out.setMimeType(ContentService.MimeType.JSON);
    out.setContent(responseText);
    return out;
  }
  
  function readAllData() {
    const spreadSheet = SpreadsheetApp.openById('1X76wxqhUmMpNlfXbio91uhVRPUfFwxil4lgudF-Xszg');
    const sheet = spreadSheet.getActiveSheet();
    const values = sheet.getRange(1, 1, sheet.getLastRow(), 13).getValues();
    return values;
  }
  
  function readData(user) {
    const spreadSheet = SpreadsheetApp.openById('1X76wxqhUmMpNlfXbio91uhVRPUfFwxil4lgudF-Xszg');
    const sheet = spreadSheet.getActiveSheet();
    const values = sheet.getRange(1, 1, sheet.getLastRow(), 13).getValues();
    return values.find(row => row[0] === userId);
  }
  
    function writeData(data) {
      const spreadSheet = SpreadsheetApp.openById('1X76wxqhUmMpNlfXbio91uhVRPUfFwxil4lgudF-Xszg');
      const sheet = spreadSheet.getActiveSheet();
      console.log(sheet.getLastRow());
      sheet.getRange(sheet.getLastRow()+1, 1, 1, 13).setValues(data);
    }
  