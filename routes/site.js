module.exports = function(app){

  // View the homepage
  app.get('/', function(req, res){
    res.render('site/index', {
        layout: '../views/layouts/default'
      , title: 'Welcome'
    });
  });


}; // CLOSE module.exports