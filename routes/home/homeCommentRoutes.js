const router = require('express').Router();
const {
  auth_user,
  auth_sub_admin,
} = require('../../middleware/authMiddleware');
const {
  user_comment,
  get_user_comment,
  comment_reply,
  comment_home_delete,
  comment_reply_home_delete,
} = require('../../controller/home/homeCommentController');
router.post('/home/user-comment', user_comment);
router.get('/get-home-comment/:articleId', get_user_comment);
router.post('/comment-reply', comment_reply);
router.post('/comment-home-delete', auth_sub_admin, comment_home_delete);
router.post(
  '/comment-reply-home-delete',
  auth_sub_admin,
  comment_reply_home_delete
);

module.exports = router;
