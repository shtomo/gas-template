/**
 * SSにGASメニューをつけるためのサンプルコード
 */
function onOpenSample () {
  SpreadsheetApp.getActive().addMenu('menuName', [
    {
      name: 'itemName',
      functionName: 'targetFunctionName'
    }
  ])
}
