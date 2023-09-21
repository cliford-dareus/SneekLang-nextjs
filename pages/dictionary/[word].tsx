
import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router';
import DictionaryResult from '@/components/DictionaryResult'

export default function RandomWord (){
  const router = useRouter();
  console.log(router.query.word)
  const [result, setResult ] = useState();

  useEffect (() => {
      fetch('/api/dictionary', {
        method: 'POST',
        body: JSON.stringify({text: router.query.word})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setResult(data[0])
      })
  }, [])

  return (
    <div className="bg-black h-screen text-white">
      {result && <DictionaryResult result={result}/>}
    </div>

  )
};

RandomWord.getLayout = function getLayout(RandomWord: ReactElement) {
  return <Layout>{RandomWord}</Layout>
}

