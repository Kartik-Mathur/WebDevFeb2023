const path = require('path');
const express = require('express');
const app = express();
const multer = require('multer')
require('dotenv').config()
const cloudinary = require('cloudinary').v2;
// const upload = multer({ dest: 'images' })

// const upload = multer({})

cloudinary.config({
    cloud_name: 'du99v4tip',
    api_key: '556146194316937',
    api_secret: 'WFNrAzrS-2DBqP556OWnjs0wNGs'
});

let users = [
    // {title: , imgPath: }
]

const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        console.log(path.extname(file.originalname));
        let extName = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + uniqueSuffix + extName);
    }
})

function fileFilter(req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted

    // To reject this file pass `false`, like so:
    let extName = path.extname(file.originalname);
    if (extName === '.jpg' || extName === '.jpeg')
        return cb(null, true);

    // To accept the file pass `true`, like so:
    cb(null, false)

    // You can always pass an error if something goes wrong:
    // cb(new Error('I don\'t have a clue!'))

}

const upload = multer({ storage: storage, fileFilter: fileFilter });

app.use(upload.single('image'));


app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', (req, res) => {
    let { title } = req.body;
    console.log(req.file);
    // users.push({ title, imgPath: req.file.path.substr(6) });
    // console.log(users);
    cloudinary.uploader.upload(`${req.file.path}`, (error, result) => {
        console.log("Result " ,result);
        users.push({ title, imgPath: result.url });
        res.render("showPics", {
            users
        })

    });

})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});