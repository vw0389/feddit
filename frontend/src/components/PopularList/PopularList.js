import React, { useState } from 'react';
import Post from '../Post';
import data from '../../data';

function PopularList() {
  const [testData, setTestData] = useState(data);
  return (
    <div className='pop-list'>
      {testData.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
export default PopularList;
