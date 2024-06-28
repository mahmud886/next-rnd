
const TestData = ({item}) => {
  if (!item) return <p>No profile data</p>;
  return (
        <div className='my-3 col-md-12'>
          <div className='card' style={{width: '18rem'}}>
            <img src={item?.webThumbnail} className='card-img-top' alt='...'/>
            <div className='card-body'>
              <h2 className='card-text'>{item?.contentName}</h2>
            </div>
          </div>
        </div>
  );
};

export default TestData;
