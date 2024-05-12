import React, { useState } from 'react';

const CommentForm = ({ pageType, onSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) {
      alert('Please enter a comment');
      return;
    }

    const timestamp = new Date().toISOString();
    const commentData = {
      pageType,
      commentText,
      timestamp,
    };

    onSubmit(commentData);
    setCommentText(''); // Clear comment text after submission
  };

  return (
    // <form onSubmit={handleSubmit} style={{ marginBottom: '20px',  }}>
    //   <textarea
    //     value={commentText}
    //     onChange={handleCommentTextChange}
    //     placeholder="Write your comment..."
    //     style={{
    //       width: '200%',
    //       height: '200px',
    //       padding: '10px',
    //       fontSize: '16px',
    //       border: '1px solid #ccc',
    //       borderRadius: '15px',
    //       resize: 'vertical',
    //     }}
    //   ></textarea>
    //   <br />
    //   <button
    //     type="submit"
    //     style={{
    //       backgroundColor: '#007bff',
    //       color: '#fff',
    //       padding: '10px 20px',
    //       fontSize: '16px',
    //       border: 'none',
    //       borderRadius: '20px',
    //       cursor: 'pointer',
    //     }}
    //   >
    //     Submit Comment
    //   </button>
    // </form>
    <form
  onSubmit={handleSubmit}
  style={{
    marginBottom: '20px',

    justifyContent: 'center', // Center horizontally
  }}
>
  <textarea
    value={commentText}
    onChange={handleCommentTextChange}
    placeholder="Write your comment..."
    className='text-center justify-center py-5 md-10 font-bold text-3xl mt-8'
    style={{
      height: '200px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '15px',
      resize: 'vertical',
    }}
  ></textarea>
<br />
        <button
        type="submit"
        className='text-center justify-center py-5 md-10 font-bold text-3xl mt-8'
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        Submit Comment
      </button>
</form>
  );
};

export default CommentForm;
