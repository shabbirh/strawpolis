import {useRouter} from 'next/router';
import {getPollBySlug} from '../../db';
import Poll from '../../components/Poll';
export default function Page(props) {

    console.log(props.poll);

    return <Poll title={props.title} poll={props.poll}></Poll>
}

export async function getServerSideProps(context) {
    let {data} = await getPollBySlug(context.query.slug);
    return {
        props: {
            ...data
        }
    }
}