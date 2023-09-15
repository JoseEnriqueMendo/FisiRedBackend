const commentService = require('../services/commentService');

const commentController = {
  getComments: async () => {
    const response = await commentService.getAll();
    return response;
  },

  getOneComment: async (commentId) => {
    const response = await commentService.getOneComment(commentId);
    return response;
  },

  getCommentsPost: async (postId, cantidad) => {
    cant = cantidad !== undefined ? cantidad : -1;
    const response = await commentService.getCommentsPost(postId, cant);
    return response;
  },

  addComment: async (content, postId, userId) => {
    const response = await commentService.addComment(content, postId, userId);
    return response;
  },

  updateComment: async (content, commentId) => {
    const response = await commentService.UpdateComment(commentId, content);
    return response;
  },
  deleteComment: async (commentId) => {
    const response = await commentService.deleteComment(commentId);
    return response;
  },

  countCommetsPost: async (postId) => {
    const response = await commentService.countCommentPost(postId);
    return response;
  },
};

module.exports = commentController;
