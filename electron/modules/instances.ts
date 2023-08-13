import fs from 'fs'
import path from 'path'
import { webContents } from 'electron'

export default () => {
    const directoryPath = path.join(__dirname, '../../../.minecraft/launcher/profiles/')

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err)
        }

        let jsonFiles = files.filter((file) => path.extname(file).toLowerCase() === '.json')
        console.log(jsonFiles)

        jsonFiles.forEach((file) => {
            fs.readFile(path.join(directoryPath, file), 'utf8', function (err, data) {
                if (err) {
                    console.log('Error reading file:', err)
                    return
                }

                let jsonObject = JSON.parse(data)

                console.log(jsonObject.name)
            })
        })
    })
}
