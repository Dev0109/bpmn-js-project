const path = require('path');

module.exports = {
    mode: 'development', // 預設以 development 模式建置
    context: path.resolve(__dirname, 'src'), // 目錄位置，若無指定預設為根目錄 . 
    entry: "./app.js", // entry 指定要打包的 js，也可以用 entry: { name: path, ... }的方式指定多個檔案}
    output: { // 打包後的設定
        path: path.resolve(__dirname, 'dist'), // 目錄位置
        filename: "bundle.js" // 打包後的名稱
    }
  }