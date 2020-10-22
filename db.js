
import {Client, query } from 'faunadb';
const {
    Ref,
    Paginate,
    Get,
    Match,
    Index,
    Collection,
} = query;

let client = new Client({secret: process.env.FAUNA_SERVER_KEY });

export function getPollBySlug(slug) {
    return client.query(
        Get(
            Match(
                Index('polls_by_slug'),
                slug
            )
        )   
    )
}

export function getAllPolls(){
    return client.query(
        Paginate(
            Match(
                Index('all_polls_summary')
            )
        )
    )
}

export function getPollById(id) {
    return client.query(
        Get(
            Ref(
                Collection('Polls'),
                id
            )
        )
    )
}