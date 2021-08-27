import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <div className='header'>
            <h6>K52-KC</h6>
          </div>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <div calssName="nut">
            {/* <button> */}
              <a href='/events/nhatruong'>
                View more
              </a>
            {/* </button> */}
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
