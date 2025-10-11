const fs = require('fs');
const path = require('path');

function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });// Create the directory recursively
    console.log(`Directory created: ${dirPath}`);
  } else {
    console.log(`Directory already exists: ${dirPath}`);
  }
}

function createFile(filePath, content = '') {//ファイルを作成する関数
  fs.writeFileSync(filePath, content);
  console.log(`File created: ${filePath}`);
}

function deleteDirectory(dirPath) {//ディレクトリを削除する関数
  if (fs.existsSync(dirPath)) {
    fs.rmdirSync(dirPath, { recursive: true });
    console.log(`Directory deleted: ${dirPath}`);
  } else {
    console.log(`Directory not found: ${dirPath}`);
  }
}

function deleteFile(filePath) {//ファイルを削除する関数
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`File deleted: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
}

// 使用例
createDirectory(path.join(__dirname, 'exampleDir'));
// This script creates a directory if it does not already exist.
// You can change 'exampleDir' to any directory name you want to create.