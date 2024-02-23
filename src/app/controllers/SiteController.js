class SiteController {
  //[get] /news
  index(req, res) {
    res.render('home');
  }

  //[get] /news/:slug
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
