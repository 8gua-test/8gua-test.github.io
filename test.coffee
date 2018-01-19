fs = require 'fs-extra'
file = "./404.html"
s = fs.lstatSync(file)
console.log s.isDirectory()
console.log s.isFile()
console.log s.isSymbolicLink()
console.log fs.realpathSync(file)


