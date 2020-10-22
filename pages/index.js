import Link from 'next/link'
import {getAllPolls} from '../db';

const Page = ({polls}) => {
  return <ul>
    {polls.map(p => {
      return <li>
        <Link href={`/polls/${p.slug}`}>{p.title}</Link>
      </li>
    })}
  </ul>
}

export default Page;
export async function getServerSideProps(context){
  let {data} = await getAllPolls();
  let polls = data.map(d => ({title: d[1], slug: d[0]}))
  return {
    props: {
      polls
    }
  }
}