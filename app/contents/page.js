import React from 'react';
import {getItem} from "@/lib/api-calls";
import TestData from "@/components/TestData";
import Link from "next/link";


const ContentPage = async () => {
  const data = await getItem()
  return (
    <div className='mt-10'>
      <h2>Contents Page Highlights</h2>
      <br/>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            {
              data?.data?.contents && data?.data?.contents.map((item, index) => (
                <Link href={`/contents/${item.id}`} key={index} className='m-0'>
                  <TestData  item={item}/>
                </Link>
              ))
            }
          </div>
      </div>
  );
};

export default ContentPage;