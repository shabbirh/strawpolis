import PollItem from './PollItem';
export default function Poll(props) {
    return <>
        <h1>{props.title}</h1>
        <ul>
            {props.poll.map(([name, count], index) => (
                <li key={index}>
                    <PollItem name={name} count={count}></PollItem>
                </li>
            ))}
        </ul>
    </>
}