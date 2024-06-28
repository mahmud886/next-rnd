import Image from "next/image";

const TestData = ({item}) => {
  if (!item) return <p>No profile data</p>;
  return (
        <div className='my-3'>
          <div className='card'>
            <Image src={item?.webThumbnail} width={640} height={360} className='w-full card-img-top' alt='...'/>
            <div className='card-body'>
              <h2 className='card-text'>{item?.contentName}</h2>
            </div>
          </div>
        </div>
  );
};

export default TestData;
