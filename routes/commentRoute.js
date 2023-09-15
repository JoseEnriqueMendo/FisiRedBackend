const router = require('express').Router();
const commentController = require('../controllers/commentController');

//

router.get('/getComments', async (req, res) => {
  const response = await commentController.getComments();
  res.send(response);
});

router.get('/getOneComment/:commentId', async (req, res) => {
  const commentId = req.params.commentId;
  const response = await commentController.getOneComment(commentId);
  res.send(response);
});

router.get('/getpostComments/:postId', async (req, res) => {
  const postId = req.params.postId;
  const cantidad = req.query.amount;
  const response = await commentController.getCommentsPost(postId, cantidad);
  res.send(response);
});

router.post('/addComent', async (req, res) => {
  const { content, postId } = req.body;
  // Implementar Cuando el front funcione o pasarlo por el body
  // const {userId}= req;
  const response = await commentController.addComment(
    content,
    postId,
    '6503399db637b81eaa4140d8'
  );

  res.send(response);
});

router.patch('/updateComment/:commentId', async (req, res) => {
  const { content } = req.body;
  const commentId = req.params.commentId;
  const response = await commentController.updateComment(content, commentId);

  res.send(response);
});

router.delete('/deleteComment/:commentId', async (req, res) => {
  const commentId = req.params.commentId;
  const response = await commentController.deleteComment(commentId);
  res.send(response);
});

router.get('/countCommentsPost/:postId', async (req, res) => {
  const postId = req.params.postId;
  const response = await commentController.countCommetsPost(postId);
  res.send(response);
});

module.exports = router;
