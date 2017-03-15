var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
var async = require('async')

// Connection URL
var url = 'mongodb://footeducation:Jan12017@ds133549-a0.mlab.com:33549/footeducation';

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('page').find({})
        .toArray(function (err, pages) {
            if (err) {
                console.log("error  ", err);
            }
            else {
                async.eachLimit(pages, pages.length , function(page, callback){

                    var page_lay = page.page_layout.replace(/http:\/\/www.footeducation.com/g, "https://www.footeducation.com");
                    // console.log(page_lay+ '\n\n\n\n')

                    db.collection('page').update(
                        {
                            _id : page._id
                        },
                        {
                            $set: {page_layout : page_lay}

                        },
                        function(err){
                            if(err){
                                callback(err)
                            }
                            else{
                                callback()
                            }
                        }
                    );
                }, function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("done");
                        db.close();
                    }
                });

                db.close();
            }
        });
});
