// import fs from 'fs';
// import path from 'path';
// import { v4 as uuidv4 } from 'uuid';

// const commentsFilePath = path.resolve('./public/comments.json');

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
//       const comments = JSON.parse(commentsData);
//       res.status(200).json(comments);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch comments' });
//     }
//   } else if (req.method === 'POST') {
//     try {
//       const { pageType, movieId, tvshowId, liveId, adultId, commentText } = req.body;
//       const timestamp = new Date().toISOString();

//       const newComment = {
//         id: uuidv4(),
//         pageType,
//         movieId,
//         tvshowId,
//         liveId,
//         adultId,
//         commentText,
//         timestamp,
//       };

//       const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
//       const comments = JSON.parse(commentsData);

//       comments.push(newComment);

//       fs.writeFileSync(commentsFilePath, JSON.stringify(comments));

//       res.status(201).json(newComment);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to post comment' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// Example server-side code using Express.js
const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/comments', async (req, res) => {
  try {
    const { pageType, movieId, commentText } = req.body;

    // Read existing comments from comment.json
    const commentsData = await fs.readFile('comment.json', 'utf-8');
    const comments = JSON.parse(commentsData);

    // Create new comment object
    const newComment = {
      id: generateUniqueId(), // Implement your own unique ID generation
      pageType,
      movieId,
      commentText,
      timestamp: new Date().toISOString(),
    };

    // Append new comment to existing comments array
    comments.push(newComment);

    // Write updated comments back to comment.json
    await fs.writeFile('comment.json', JSON.stringify(comments, null, 2));

    // Send response with the new comment
    res.status(201).json(newComment);
  } catch (error) {
    console.error('Failed to post comment:', error);
    res.status(500).send('Failed to post comment. Please try again later.');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
