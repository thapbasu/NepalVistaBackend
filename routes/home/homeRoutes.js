const {
  home_article_get,
  home_tag_category_get,
  old_react_article,
  category_article_get,
  tag_article_get,
  mostLikedPosts,
} = require('../../controller/home/homeController');

const {
  getArticleDetails,
  like_dislike_get,
  dislike_article,
  like_article,
} = require('../../controller/home/readArticleController');
const userViewController = require('../../controller/home/userViewController');
const { user, auth_user } = require('../../middleware/authMiddleware');
const router = require('express').Router();

router.get('/home-article-get', home_article_get);
router.get('/home/get-tag-category', home_tag_category_get);
router.get('/article/recent-old-get', old_react_article);
router.get('/article/most-popular-article', mostLikedPosts);
router.get('/category-article-get', category_article_get);
router.get('/tag-article-get', tag_article_get);

router.get('/home/article-details/:articleSlug', getArticleDetails);

router.get('/home/like-dislike-get/:articleSlug', user, like_dislike_get);
router.put('/user-like-article', auth_user, like_article);
router.put('/user-dislike-article', auth_user, dislike_article);

router.get('/user-view', userViewController);

module.exports = router;
