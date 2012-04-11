
exports.index = function(req, res){
  res.render('index', {output:"", title: 'Express' });
};
exports.gzip = function(req, res){
  require("gzip")("It's just mind-blowingly awesome. I apologize, and I wish I was more articulate, but it's hard to be articulate when your mind's blown—but in a very good way.", function(err, data){
  
    res.render('index', {output:data.length, title: 'Express' });
  });
};
