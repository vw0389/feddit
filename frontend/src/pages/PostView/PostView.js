import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data';

import VoteBlock from '../../components/VoteBlock';

function PostView() {
  const { subfeddit: subfeddit, id: id } = useParams();
  const postData = data.find(post => post.id == id);
  const { votes, member, createdAt, title, body } = postData;

  return (
    <article>
      <VoteBlock votes={votes} />
      <div className='content'>
        <div className='post-topline'>
          <div className='post-info'>
            <a href={`f/${subfeddit}`} className='subfeddit'>
              f/{subfeddit}
            </a>
            <span className='poster'>
              Posted by <a href={`m/${member}`}>m/{member}</a>
            </span>
            <p className='postedAt'>on {createdAt}</p>
          </div>
          <button>Join</button>
        </div>

        <h4 className='title'>{title}</h4>
        <h5 className='body'>{body}</h5>
        {/* Comments Section */}
        <h4>Comments Section</h4>
      </div>
    </article>
  );
}

export default PostView;
