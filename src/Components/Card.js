import React from 'react';

const Card = ({name, email, id }) => {
  return (
        <div className='tc bg-light-blue dib br3 pa5 grow bw2 shadow-5'>
            <img alt='robots' src={`https://flathash.com/${id}?150x150`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;