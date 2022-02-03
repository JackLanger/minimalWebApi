const fs = require('fs')

class controller {
    async getAllData(){
        return new Promise((resolve, _) =>{resolve(fs.readFileSync('./api/v1/modules/test.xml'))});
    }
    async getData(id){
        return new Promise((resolve,reject)=>{

            // do some iteration and filtering by id
            fs.readFileSync('../api/v1/modules/test.xml');

        });
    }
    async getDataWhere(query){
        return new Promise((resolve,reject)=>{
            //filte the data using the query string
        });
    }

    async updateData(data){
        return new Promise((resolve,reject)=>{
            // update the data
        });
    }

    async deleteData(data){
        return new Promise((resolve,reject)=>{
            // find and delete the data
        });
    }
    async createEntry(data){
        return new Promise((resolve,reject)=>{
            // create a new entry from the data provided.
        });
    }
}
module.exports = controller;