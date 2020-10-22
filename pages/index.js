import Head from 'next/head'

import {useEffect, useState} from 'react'; 

export default function Home() {
  const [name, setName] = useState('initial');
  useEffect(() =>{
    fetch('api/polls/murica2')
    .then(res => res.json())
    .then((data) => {
      setName(data.slug)
    })
  },[name])
  return (
    <div>
      <Head>
        <title>hello {name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      hello {name}
    </div>
  )
}
