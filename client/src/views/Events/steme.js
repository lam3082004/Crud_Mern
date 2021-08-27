import React from 'react'
import Cardsteme from './Cardsteme';
// import './events.css';

const steme = () => {
    return (
        <>
            <div className='cards'>
                <h1>KC STEME</h1>
                <div className='cards__container'>
                    <ul className='cards__items'>
                        <Cardsteme
                        src='https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/228404488_891840391439179_1683521702046517669_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PIl0agiL6GwAX9ddpA6&_nc_oc=AQklHg-Se12NsxWmS2Z9bErzefvhcKT0FE7qUI-mjnQk78QjsMllbmkUjNHjaW_5wxk&_nc_ht=scontent.fhan5-7.fna&oh=61df2b571da5db0c9329134b450cb581&oe=61428A50'
                        text='Steme'

                        />
                    </ul>
                    </div>
            </div>
        </>
    )
}

export default steme
