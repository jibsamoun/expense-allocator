import express from 'express';
const router = express.Router();

router.get('/users', (req, res) => {
    // Handle GET /users request
    res.json({ message: 'List of users' });
});

export default router;
