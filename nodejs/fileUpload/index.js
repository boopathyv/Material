var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/myproject';
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});
app.get('/hey',(req,res)=>{
	res.json({'hello':'hello'});
})
app.post('/fileupload', upload.single('image'), (req, res, next) => {
	console.log('uploaded..');
   // MongoClient.connect({useNewUrlParser: true,url:url,useUnifiedTopology: true}, (err, db) => {
        //assert.equal(null, err);
        //insertDocuments(db, 'public/images/uploads/' + req.file.filename, () => {
          //  db.close();
            //res.json({'message': 'File uploaded successfully'});
        //});
   // });
});
// module.exports = app;
var insertDocuments = function(db, filePath, callback) {
	var collection = db.collection('user');
    collection.insertOne({'imagePath' : filePath }, (err, result) => {
		assert.equal(err, null);
        callback(result);
    });
}
app.listen(3005,console.log('listening at port 3005'));