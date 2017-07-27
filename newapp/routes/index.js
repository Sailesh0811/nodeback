/**
 * Created by Sailesh on 23-07-2017.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs')
var fse = require("fs-extra")
/* GET home page. */
a = ["c","e","c","c","d"]

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/read',function (req,res,next) {
    ress = []
    folder = 'about'
    file = req.body.file
    actual = ''
    given = '';
    console.log (folder,file)
    ress.push(fs.readFileSync('home/'+folder+'/'+file ).toString());
    console.log(ress)
    res.send(JSON.stringify(ress));

})
router.post('/ls',function (req,res,err) {
    var str = []
    console.log(req.body.data);
    fs.readdir(req.body.data, function (err, files) {
        files.forEach(function (file) {
        str.push(file);
})
    ;
    console.log(str);
    res.send(JSON.stringify(str))

});
})
module.exports = router;