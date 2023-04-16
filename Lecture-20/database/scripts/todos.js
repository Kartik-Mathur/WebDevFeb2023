const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'..','data','todos.json');

class TodosDB {
    static addTask(task) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,{
                    encoding: 'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    let todos = JSON.parse(data);
                    todos.push(task);

                    fs.writeFile(
                        filePath,
                        JSON.stringify(todos),
                        (err)=>{
                            if(err) return reject(err);
                            resolve("Task Added Successfully");
                        }
                    )
                }
            )
        })
    }

    static getTask() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                {
                    encoding:'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    resolve(JSON.parse(data));
                }
            )
        })
    }
}

module.exports = TodosDB;