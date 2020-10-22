import {getAllPolls} from '../../../db/db.js';
export default async (req, res) => {
    try {
        let polls = await getAllPolls();
        res.status(200);
        res.json(polls);
    } catch(err) {
        res.status(404);
        res.end();
    }
}