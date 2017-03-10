


var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://footeducation:Jan12017@ds133549-a0.mlab.com:33549/footeducation';

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('page').find({})
        .toArray(function (err, page) {
            if (err) {
                console.log("error  ", err);
            }
            else {
                var logs = [];
                for (i = 0; i < page.length; i++) {
                    var splitOn = page[i].seo_title.match(/[^a-zA-Z ]/);
                    logs[i]= page[i].seo_title.split(splitOn)[0];
                    console.log(page[i].seo_title+"                    |                    "+logs[i]);
                }
                db.close();
            }
        });
});
