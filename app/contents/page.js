import React from 'react';
import {getItem} from "@/lib/api-calls";
import TestData from "@/components/TestData";
import Link from "next/link";


const ContentPage = async () => {
  const data = await getItem()
  return (
    <div>
      <h2>Contents Page</h2>
      <br/>
      <div className='container mx-auto'>
        <div className='row'>
            <div className='grid grid-cols-4 gap-2'>
              {
                data?.data?.contents && data?.data?.contents.map((item, index) => (
                  <Link href={`/contents/${item.id}`} key={index}>
                    <TestData  item={item}/>
                  </Link>
                ))
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;