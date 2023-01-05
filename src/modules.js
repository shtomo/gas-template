const modules = {
  /**
   * 列名の配列と行をなす値の配列からEntityをつくる関数
   *
   * @param {string[]} colNames
   * @param {CellValue[]} row
   * @returns {Entity}
   */
  generateEntity (colNames, row) {
    return Object.fromEntries(
      colNames.map((colName, i) => {
        return [colName, row[i]]
      })
    )
  }
}
