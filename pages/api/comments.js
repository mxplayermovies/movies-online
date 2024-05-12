// // // pages/api/comments.js

// // import fs from 'fs';
// // import path from 'path';

// // export default function handler(req, res) {
// //   const commentsFilePath = path.join(process.cwd(), 'public', 'comments.json');

// //   if (req.method === 'GET') {
// //     // Fetch comments from the JSON file
// //     try {
// //       const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
// //       const comments = JSON.parse(commentsData);
// //       res.status(200).json(comments);
// //     } catch (error) {
// //       console.error('Error reading comments file:', error);
// //       res.status(500).json({ message: 'Error fetching comments' });
// //     }
// //   } else if (req.method === 'POST') {
// //     // Handle comment submission and write to the JSON file
// //     const { pageType, commentText, timestamp } = req.body;

// //     try {
// //       const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
// //       const comments = JSON.parse(commentsData);

// //       const newComment = { pageType, commentText, timestamp };
// //       comments.push(newComment);

// //       fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2));

// //       res.status(201).json({ message: 'Comment added successfully!' });
// //     } catch (error) {
// //       console.error('Error writing comment to file:', error);
// //       res.status(500).json({ message: 'Error adding comment' });
// //     }
// //   } else {
// //     res.status(405).json({ message: 'Method Not Allowed' });
// //   }
// // }


// // pages/api/comments.js

// import fs from 'fs';
// import path from 'path';

// const commentsFilePath = path.join(process.cwd(), 'public', 'comments.json');

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
//       const comments = JSON.parse(commentsData);
//       res.status(200).json(comments);
//     } catch (error) {
//       console.error('Error reading comments file:', error);
//       res.status(500).json({ message: 'Error fetching comments' });
//     }
//   } else if (req.method === 'POST') {
//     const { pageType, commentText, timestamp } = req.body;

//     try {
//       const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
//       const comments = JSON.parse(commentsData);

//       const newComment = { pageType, commentText, timestamp };
//       comments.push(newComment);

//       fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2));

//       res.status(201).json({ message: 'Comment added successfully!', comment: newComment });
//     } catch (error) {
//       console.error('Error adding comment:', error);
//       res.status(500).json({ message: 'Error adding comment' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

// pages/api/comments.js

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
