/**
 * SSにGASメニューをつけるためのサンプルコード
 */
function onOpenSample () {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('Custom Menu')
    .addItem('First item', 'menuItem1')
    .addSeparator()
    .addSubMenu(ui.createMenu('Sub-menu').addItem('Second item', 'menuItem2'))
    .addToUi()
}
