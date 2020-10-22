import {getPollBySlug} from '../../../db/db.js';
export default async (req, res) => {
    try {
        let poll = await getPollBySlug(req.query.slug);
        res.status(200);
        res.json(poll.data)
    } catch(err) {
        res.status(404);
        res.json({slug: 'not found', poll: []})
    }
}