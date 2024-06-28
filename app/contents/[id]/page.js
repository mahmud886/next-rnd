
import {getItem} from "@/lib/api-calls";
import Player from "@/components/Player";
import {Suspense} from "react";

const ContentDetails = async ({params: {id}}) => {
  const data = await getItem()
  const item = data?.data?.contents && data?.data?.contents.find(item => item.id === parseInt(id));
  if (!item) return <p>No profile data</p>;
  return (
    <div className='container flex flex-col items-center'>
      <div className='flex flex-col items-center py-4'>
        <h1 className='text-xl font-semibold'>{item?.contentName}</h1>
      </div>

        <Player url={item?.contentAes128HlsUrl}/>
    </div>
  );
};

export default ContentDetails;