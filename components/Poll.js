import {useEffect, useState} from 'react';
export default function Poll(props) {
    const [poll, setPoll] = useState([]);
    useEffect(() => {
        fetch(`/api/polls/${props.slug}`)
        .then(res => res.json())
        .then( ({poll}) => setPoll(poll))
    }, [props.slug])
    return <ul>{poll.map(([item, count], index) => <li key={index}>{`${item}: ${count}`}</li>)}</ul>
}