import {useState} from 'react';
export default function PollItem(props){
    const [count, setCount] = useState(props.count);
    return <div onClick={() => setCount(count + 1)}>
       {`${props.name}: ${count}`} 
    </div>
}