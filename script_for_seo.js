var MongoClient = require('mongodb').MongoClient;
var getUrls = require('get-urls');
var restler = require('restler');
var assert = require('assert');
var async = require('async');

// Connection URL
var url = 'mongodb://footeducation:Jan12017@ds133549-a0.mlab.com:33549/footeducation';
// var url = 'mongodb://127.0.0.1/footeducationpages';

MongoClient.connect(url, function(err, db) {

    db.collection('page').find({})
        .toArray(function (err, pages) {
            if (err) {
                console.log("error  ", err);
                db.close();
            }
            else {

                // pages = pages.splice(0, 2);


                async.eachLimit(pages, 5 , function(page, callback) {
                    // console.log(page);
                    var page_lay = getUrls(page.page_layout, {stripWWW: false});
                    // console.log(page.seo_title + '\n', page_lay , '\n');
                    var URLS = Array.from(page_lay);
                    // console.log(URLS.length,'\n'+page.seo_title+'\n' ,URLS );

                    async.eachLimit(URLS, 5, function (url, callback) {
                        if (url) {
                            // console.log(url);
                            restler.get(url).on('complete', function (data, response) {
                                if (response == null){
                                    null;
                                }
                                else if(response.statusCode == 404){

                                    console.log("<strong>"+page.seo_title+"</strong><br><a href=\""+url+"\">"+url+"</a><br><br>");


                                   // console.log(page.seo_title,"\n" , url, "\n" , response.statusCode);
                                }
                                else{
                                    // console.log(page.seo_title, url, response.statusCode);
                                    null;
                                }

                                // console.log(data, response)
                                callback()

                            });
                        }
                        else {
                            callback();
                        }
                    }, function (err) {
                        if (err) {
                            callback(err)
                        }
                        else {
                            callback();
                        }
                    })
                }, function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("done");

                    }
                    db.close();
                });

            }
        });
});


// db.collection('page').update(
//     {
//         _id : page._id
//     },
//     {
//         $set: {page_layout : page_lay}
//
//     },
//     function(err){
//         if(err){
//             callback(err)
//         }
//         else{
//             callback()
//         }
//     }
// );
