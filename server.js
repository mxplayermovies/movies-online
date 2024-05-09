// const express = require('express');
// const next = require('next');
// const path = require('path');
// const compression = require('compression');

// const port = process.env.PORT || 3000;
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // Serve static files with caching headers
//   server.use(
//     '/static',
//     express.static(path.join(__dirname, 'static'), {
//       maxAge: dev ? '0' : '365d',
//       immutable: true
//     })
//   );

//   // Compress responses using gzip
//   server.use(compression());

//   // Custom caching for specific SSR routes
//   const ssrRoutes = ['/tvshow/:id', '/movie/:id', '/live/:id', '/adult/:id'];
//   ssrRoutes.forEach((route) => {
//     server.get(route, (req, res) => {
//       // Set cache control headers for SSR pages
//       res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
//       return handle(req, res);
//     });
//   });

//   // Default route handler for Next.js pages
//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

//   // Start the server
//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });


const express = require('express');
const next = require('next');
const fs = require('fs');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files with caching headers
  server.use(
    '/static',
    express.static(path.join(__dirname, 'static'), {
      maxAge: dev ? '0' : '365d',
      immutable: true
    })
  );

  // Compress responses using gzip
  server.use(compression());

  // Custom caching for specific SSR routes
  const ssrRoutes = ['/tvshow/:id', '/movie/:id', '/live/:id', '/adult/:id'];
  ssrRoutes.forEach((route) => {
    server.get(route, (req, res) => {
      // Parse JSON data based on route
      const dataFilePath = path.join(__dirname, 'public', 'data', `${route.split('/')[1]}.json`);
      try {
        const jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
        // Assuming each JSON file contains an array of objects
        const itemId = req.params.id;
        const item = jsonData.find((item) => item.id === itemId);
        if (!item) {
          return res.status(404).json({ error: 'Item not found' });
        }
        // Render the appropriate Next.js page with data
        return app.render(req, res, route, { item });
      } catch (error) {
        console.error('Error reading JSON file:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    });
  });

  // Default route handler for Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
