import { Router as getRouter } from 'express';
import fs from 'fs';
import { Markdown as markdown } from 'node-markdown';
const router = getRouter();

router.get('/posts/:id', (req, res) => {
  fs.readFile(`posts/${req.params.id}.md`, (err, data) => {
    res.send(markdown(data.toString()));
  });
});

export default router;
