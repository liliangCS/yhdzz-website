const { readdir, rename } = require('fs')
const path = require('path')
const dir_public = path.resolve(__dirname, "../public")

const imgToJPG = (dir) => {
  readdir(dir, 'utf-8', (err, files) => {
    if (err) throw err
    files.forEach((file, index) => {
      const oldName = file
      const newName = index + 1 + ".jpg"
      rename(path.resolve(dir, oldName), path.resolve(dir, newName), (err) => {
        if (err) return console.log(err.message)
        console.log(`${oldName}重命名为${newName}成功`)
      })
    })
  })
}

imgToJPG(dir_public)