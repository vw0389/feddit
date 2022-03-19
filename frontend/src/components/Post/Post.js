import React from 'react';
import { Link } from 'react-router-dom';

import './post.css';

import VoteBlock from '../VoteBlock';

function Post(post) {
  const { subfeddit, member, createdAt, title, body, votes, id } = post.post;

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
        <Link
          to={`/f/${subfeddit}/p/${id}`}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <h4 className='title'>{title}</h4>
          <h5 className='body'>{body}</h5>
        </Link>
      </div>
    </article>
  );
}

export default Post;
