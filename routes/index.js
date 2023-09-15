const router = require('express').Router();
const commentRouter = require('./commentRoute');

router.use('/hello', (req, res) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

router.use('/comments', commentRouter);

module.exports = router;
