import {getItem} from "@/lib/api-calls";
import Link from "next/link";
import TestData from "@/components/TestData";
import React from "react";


export default async function Home() {
  const data = await getItem()
  return (
    <div>
      <h2>Home Page</h2>
      <br/>
      <div className='container mx-auto'>
        <div className='row'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
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
}
