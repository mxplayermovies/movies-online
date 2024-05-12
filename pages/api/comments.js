import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const commentsFilePath = path.resolve('./public/comments.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
      const comments = JSON.parse(commentsData);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch comments' });
    }
  } else if (req.method === 'POST') {
    try {
      const { pageType, movieId, tvshowId, liveId, adultId, commentText } = req.body;
      const timestamp = new Date().toISOString();

      const newComment = {
        id: uuidv4(),
        pageType,
        movieId,
        tvshowId,
        liveId,
        adultId,
        commentText,
        timestamp,
      };

      const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
      const comments = JSON.parse(commentsData);

      comments.push(newComment);

      fs.writeFileSync(commentsFilePath, JSON.stringify(comments));

      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error: 'Failed to post comment' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// import express from 'express';
// import { v4 as uuidv4 } from 'uuid';
// import { readFile, writeFile } from 'fs/promises';
// import path from 'path';

// const app = express();
// const port = process.env.PORT || 3000;
// const commentsFilePath = path.resolve('./public/comments.json');

// app.use(express.json());

// app.post('/api/comments', async (req, res) => {
//   try {
//     const { pageType, movieId, tvshowId, liveId, adultId, commentText } = req.body;

//     // Validate request data (adjust based on your requirements)
//     if (!pageType || !commentText) {
//       return res.status(400).json({ error: 'Invalid request. Missing required data.' });
//     }

//     // Read existing comments from comments.json
//     const commentsData = await readFile(commentsFilePath, 'utf-8');
//     const comments = JSON.parse(commentsData);

//     const newComment = {
//       id: uuidv4(),
//       pageType,
//       movieId,
//       tvshowId,
//       liveId,
//       adultId,
//       commentText,
//       timestamp: new Date().toISOString(),
//     };

//     // Append new comment to existing comments array
//     comments.push(newComment);

//     // Write updated comments back to comments.json
//     await writeFile(commentsFilePath, JSON.stringify(comments, null, 2));

//     // Send response with the new comment
//     res.status(201).json(newComment);
//   } catch (error) {
//     console.error('Failed to post comment:', error);
//     res.status(500).send('Failed to post comment. Please try again later.');
//   }
// });

// // Handle GET requests to /api/comments (optional)
// app.get('/api/comments', async (req, res) => {
//   try {
//     const commentsData = await readFile(commentsFilePath, 'utf-8');
//     const comments = JSON.parse(commentsData);
//     res.status(200).json(comments);
//   } catch (error) {
//     console.error('Failed to fetch comments:', error);
//     res.status(500).send('Failed to fetch comments.');
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
