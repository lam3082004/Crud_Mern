import React from 'react'
import CardTinhoc from './CardTinhoc';

const tinhoc = () => {
    return (
        <>
            <div className='cards'>
                <h1>EqualEdu</h1>
                <div className='cards__container'>
                    <ul className='cards__items'>
                        <CardTinhoc
                        src='https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/238927588_172948621604575_1964728486829518596_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=13WRwGIwBLsAX_SwgPr&_nc_ht=scontent-hkt1-1.xx&oh=d4e4453304cc5d4feaffdb06d9326c7c&oe=6141436C'
                        text='Tin Học'
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default tinhoc