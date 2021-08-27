import React from 'react'
import './events.css';
import Button from 'react-bootstrap/button';
// import FloatingLabel from "react-bootstrap-floating-label";
// import Form from "react-bootstrap/Form"
// import like from "../../assets/like.svg"


const Cardnhatruong = () => {
    return (
        <div>
            <li className='cards__item'>
                <div className='cards__item__link'>
                    <figure className='cards__item__pic-wrap'>
                        <img
                        className='cards__item__img'
                        alt='EqualEdu'
                        />
                    </figure>
                    <div class="steme">
                        <p class="lead">
                            <br/><b>EqualEdu Pro</b><br/>
                        </p>
                        <div class="ccc">
                            <Button variant="danger" type="submit">
                                Upgrade<br/> 
                                200$
                            </Button>
                            {/* <IconButton >
                                <FavoriteIcon />
                                <Typography component='span' color='textSecondary'>
                                1000
                                </Typography>
                            </IconButton> */}
                        </div>
                        <br/>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Cardnhatruong
