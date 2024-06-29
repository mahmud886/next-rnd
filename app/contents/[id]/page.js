
import {getItem} from "@/lib/api-calls";
import Player from "@/components/Player";
import {notFound} from "next/navigation";
import {Suspense} from "react";


export async function generateStaticParams({params: {id}}){
  const data = await getItem()
  return data?.data?.contents && data?.data?.contents.map((item)=> {
    id = item.id
  })
}

const ContentDetails = async ({params: {id}}) => {
  const data = await getItem()
  const item = data?.data?.contents && data?.data?.contents.find(item => item.id === parseInt(id));

  if(!item){
    notFound()
  }
  if (!item) return <p>No profile data</p>;
  return (
    <div className='container flex flex-col items-center'>
      <div className='flex flex-col items-center py-4'>
        <h1 className='text-xl font-semibold'>{item?.contentName}</h1>
      </div>

        <Suspense fallback={<div className="loading">Loading Video...</div>}>
          <Player url={item?.contentAes128HlsUrl}/>
        </Suspense>
    </div>
  );
};

export default ContentDetails;