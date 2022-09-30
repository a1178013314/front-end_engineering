let fs = require('fs')
let path = require('path')
console.log(`当前文件路径是:${__dirname}`)

if (__dirname.indexOf("package") !== -1) {
    copyGitattributes()
    copyGitignore()
}else{
    console.warn("没有在monorepo项目中执行")
}

function copyGitattributes() {
    //路径问题不要太纠结先实现基本功能
    let fromPath = path.join(__dirname, ".gitattributes")
    let toPaht = path.join(__dirname, "..", "..", "..", ".gitattributes")
    fs.readFile(fromPath, (err, data) => {
        fs.writeFile(toPaht, data, (err, deta) => {
            if (err) {
                throw (err)
            }
        })
    })
}

function copyGitignore() {
    //路径问题不要太纠结先实现基本功能
    let fromPath = path.join(__dirname, ".gitignore")
    let toPaht = path.join(__dirname, "..", "..", "..", ".gitignore")
    fs.readFile(fromPath, (err, data) => {
        fs.writeFile(toPaht, data, (err, deta) => {
            if (err) {
                throw (err)
            }
        })
    })
}