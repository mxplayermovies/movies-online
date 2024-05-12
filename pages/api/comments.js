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

import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
const commentsFilePath = path.resolve('../public/comments.json');

app.use(express.json());

app.get('/api/comments', async (req, res) => {
  try {
    const commentsData = await readFile(commentsFilePath, 'utf-8');
    const comments = JSON.parse(commentsData);
    res.status(200).json(comments);
  } catch (error) {
    console.error('Failed to fetch comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

app.post('/api/comments', async (req, res) => {
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

    const commentsData = await readFile(commentsFilePath, 'utf-8');
    const comments = JSON.parse(commentsData);

    comments.push(newComment);

    await writeFile(commentsFilePath, JSON.stringify(comments, null, 2));

    res.status(201).json(newComment);
  } catch (error) {
    console.error('Failed to post comment:', error);
    res.status(500).json({ error: 'Failed to post comment' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
