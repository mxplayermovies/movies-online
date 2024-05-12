// utils/commentService.js

const getComments = (contentType, contentId) => {
    const key = `${contentType}_${contentId}_comments`;
    const commentsStr = localStorage.getItem(key);
    return commentsStr ? JSON.parse(commentsStr) : [];
  };
  
  const addComment = (contentType, contentId, text) => {
    const key = `${contentType}_${contentId}_comments`;
    const comments = getComments(contentType, contentId);
    const newComment = { id: generateUniqueId(), text };
    const updatedComments = [...comments, newComment];
    localStorage.setItem(key, JSON.stringify(updatedComments));
    return newComment;
  };
  
  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  };
  
  export { getComments, addComment };
  