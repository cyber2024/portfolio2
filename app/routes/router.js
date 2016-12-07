var router = function(app){
  app.route('/')
  .get(function(req,res){
    res.sendFile(app.path + '/app/public/index.html');
  });
}

module.exports = router;
