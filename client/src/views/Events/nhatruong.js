import React from 'react'
import Cardnhatruong from './Cardnhatruong';

const nhatruong = () => {
    return (
        <>
            <div className='cards'>
                <h1>EqualEdu</h1>
                <div className='cards__container'>
                    <ul className='cards__items'>
                        <Cardnhatruong
                        src='http://media.thanhnienviet.vn/uploads/2021/06/07/1-1623037594.jpg'
                        text='EqualEdu Pro'

                        />
                    </ul>
                    </div>
            </div>
        </>
    )
}

export default nhatruong