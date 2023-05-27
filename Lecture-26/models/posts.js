const { ObjectId } = require("mongodb");
const { getDB } = require("../database/database");
const collectionName = 'posts';


class Posts {
    constructor(imageUrl, description, title) {
        this.imageUrl = imageUrl;
        this.description = description;
        this.title = title;
        this.comments = [];
    }

    save() {
        return getDB().collection(collectionName)
            .insertOne(this);
    }

    static getPosts() {
        // return getDB().collection(collectionName).find({});
        return new Promise(async (resolve, reject) => {
            try {
                let data = await getDB().collection(collectionName).find({}).toArray();
                console.log(data);
                resolve(data);
            }
            catch (err) {
                reject(err);
            }
        })
    }

    static deletePost(id) {
        return new Promise(async (resolve, reject) => {
            let db = getDB().collection(collectionName);
            try {
                await db.deleteOne({ _id: new ObjectId(id) })
                let data = await db.find({}).toArray();
                resolve(data);
            } catch (err) {
                reject(err);
            }
        })
    }

    static getPost(id) {
        return new Promise(async (resolve, reject) => {
            let db = getDB().collection(collectionName);
            try {
                let data = await db.findOne({ _id: new ObjectId(id) });
                resolve(data);
            } catch (err) {
                reject(err);
            }
        })
    }

    static updatePost(newPost) {
        const { id, description, imageUrl, title } = newPost;
        return new Promise(async (resolve, reject) => {
            let db = getDB().collection(collectionName);
            try {
                await db.updateOne(
                    { _id: new ObjectId(id) },
                    {
                        $set: {
                            description,
                            title,
                            imageUrl
                        }
                    }
                )
                resolve("Updated Successfully");
            } catch (err) {
                reject(err);
            }
        })
    }

    static addComment(id,comment){
        return new Promise(async (resolve,reject)=>{
            let db = getDB().collection(collectionName);

            try{
                let data = await db.findOne({_id: new ObjectId(id)});
                // console.log(data);
                let newComments = data.comments || [];
                newComments.push(comment);
                await db.updateOne(
                    {_id: new ObjectId(id)},
                    {
                        $set:{
                            comments: newComments
                        }
                    }
                )

                resolve(newComments);
            }
            catch(err){
                reject(err);
            }
        })
    }
}

module.exports = Posts;