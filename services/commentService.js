const serviceResponse = require('../entities/serviceResponse');
const comments = require('../models/commentModel');

const commentService = {
  // Obtiene todos los comentarios guardados
  getAll: async () => {
    const response = new serviceResponse();
    try {
      const comentario = await comments.find();
      response.setSucessResponse(
        'Todos los Comentarios Encontrados Exitosamente',
        comentario
      );
    } catch (error) {
      response.setErrorResponse(error.message, 500);
    } finally {
      return response;
    }
  },

  getOneComment: async (CommentId) => {
    const response = new serviceResponse();
    try {
      const comentario = await comments.findById(CommentId);
      response.setSucessResponse('Comentario Encontrado Exitosamente', comentario);
    } catch (error) {
      response.setErrorResponse(error.message, 500);
    } finally {
      return response;
    }
  },

  getCommentsPost: async (postId, cant) => {
    const response = new serviceResponse();
    let comentario;
    try {
      if (cant === -1) {
        comentario = await comments.find({ post: postId });
      } else {
        comentario = await comments.find({ post: postId }).limit(cant);
      }

      response.setSucessResponse(
        'Comentarios de la publicación Encontrados Exitosamente',
        comentario
      );
    } catch (error) {
      response.setErrorResponse(error.message, 500);
    } finally {
      return response;
    }
  },

  // Añade un comentario de un post
  addComment: async (content, postId, userId) => {
    const response = new serviceResponse();

    try {
      const newComment = new comments({
        user: userId,
        post: postId,
        content,
      });
      const comentario = await newComment.save();
      // AÑADIR EL COMENTARIO A LA PUBLICACIÓN
      response.setSucessResponse('Comentario Guardado Exitosamente', comentario);
    } catch (error) {
      response.setErrorResponse(error.message, 500);
    } finally {
      return response;
    }
  },
  // Actualiza un comentario de un post
  UpdateComment: async (commentId, content) => {
    const response = new serviceResponse();
    try {
      const comentario = await comments.findByIdAndUpdate(
        commentId,
        { content: content },
        { new: true }
      );
      // AÑADIR EL COMENTARIO A LA PUBLICACIÓN
      response.setSucessResponse('Comentario Actualizado Exitosamente', comentario);
    } catch (error) {
      response.setErrorResponse(error.message, 500);
    } finally {
      return response;
    }
  },

  // Elimina un comentario de un post
  deleteComment: async (commentId) => {
    const response = new serviceResponse();
    try {
      const comentario = await comments.findByIdAndRemove(commentId);
      // Eliminar EL COMENTARIO A LA PUBLICACIÓN TBM
      response.setSucessResponse('Comentario Eliminado Exitosamente', comentario);
    } catch (error) {
      response.setErrorResponse(error.message, 500);
    } finally {
      return response;
    }
  },

  countCommentPost: async (postId) => {
    const response = new serviceResponse();
    try {
      const comentario = await comments.countDocuments({ post: postId });
      response.setSucessResponse(
        'El numero de comentarios de esta publicación es: ' + comentario,
        comentario
      );
    } catch (error) {
      response.setErrorResponse(error.message, 500);
    } finally {
      return response;
    }
  },
};

module.exports = commentService;
