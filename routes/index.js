
/*
 * GET home page.
 */

var gzip = require('gzip');
var Q = require('q');

exports.index = function(req, res){
  res.render('index', {output:"", title: 'Gzipper' });
};

exports.gzip = function(req, res){
  var data = req.param('data',''),
      deferred = Q.defer();

  gzip(data,deferred.node());

  deferred.promise.then(function(gzipped){
    res.render('index', {output:gzipped.length, title: 'Gzipper' });
  });
};
