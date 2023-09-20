import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router';

export default function RandomWord (){
  const router = useRouter();
  
  return (
    <div className="bg-black h-screen text-white">
    </div>
  )
};


RandomWord.getLayout = function getLayout(RandomWord: ReactElement) {
  return <Layout>{RandomWord}</Layout>
}

