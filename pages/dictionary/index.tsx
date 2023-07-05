import { Layout } from '@/components/Layout';
import React, { ReactElement } from 'react'

type Props = {}

const Dictionary = () => {
  return (
    <div className='bg-green-700 flex-1 p-4 rounded-tr-xl rounded-tl-xl'>Dictionary</div>
  )
}

Dictionary.getLayout = function getLayout(Dictionary: ReactElement) {
    return <Layout>{Dictionary}</Layout>;
  };

export default Dictionary