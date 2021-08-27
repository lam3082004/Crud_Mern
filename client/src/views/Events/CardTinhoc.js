import React from 'react';
import './events.css';
import Button from 'react-bootstrap/button';
import FloatingLabel from "react-bootstrap-floating-label";
import Form from "react-bootstrap/Form"
import like from "../../assets/like.svg"
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import {IconButton,Typography} from '@material-ui/core';

function Cardsteme(props) {
    
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__link'>
                    <figure className='cards__item__pic-wrap'>
                        <img
                        className='cards__item__img'
                        alt='Steme Image'
                        src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                    <div class="steme">
                        <p class="lead">
                                <b>//HACKATHON NGHỆ AN 2021//</b><br/>
                            📣CÔNG BỐ DANH SÁCH BAN TỔ CHỨC HACKATHON 2021📣
                                🎉🎉🎉HACKATHON NGHỆ AN 2021 đang bước vào những khâu chuẩn bị cuối cùng, sức nóng đang được đẩy cao hơn bao giờ hết. Đồng hành cùng HACKATHON NGHỆ AN 2021 không thể thiếu đi sự góp mặt của những nhà tài trợ sẽ gắn bó với chương trình đến cuối chặng đường. Xin hân hạnh giới thiệu sự góp mặt của các nhà tài trợ:
                                <br/>🏆GOSTREAM – CÔNG TY CỔ PHẦN CÔNG NGHỆ<br/>
                            ✔✔✔Trang chủ: https://gostreamtech.com
                                🏆SỞ KHOA HỌC VÀ CÔNG NGHỆ TỈNH NGHỆ AN<br/>
                            ✔✔✔Trang chủ: http://ngheandost.gov.vn<br/>
                                🏆CÔNG TY CỔ PHẦN PHÁT TRIỂN CÔNG NGHỆ REDSAND<br/>
                            ✔✔✔Trang chủ: https://redsand.vn<br/>
                                🏆CÔNG TY CỔ PHẦN CÔNG NGHỆ WAND<br/>
                            ✔✔✔Trang chủ: https://wand.vn<br/>
                            Và các đơn vị khác đồng hành cùng HACKATHON NGHỆ AN 2021.<br/>
                            "Chúng tôi rất vinh dự khi nhận được sự tài trợ đến từ các công ty, các ban ngành lớn trong lĩnh vực công nghệ trên địa bàn toàn tỉnh Nghệ An. Đây sẽ là một sự hỗ trợ to lớn cho cuộc thi HACKATHON NGHỆ AN 2021 diễn ra thành công và tốt đẹp nhất. Xin trân trọng cảm ơn! ! !"<br/>
                            -------------------------------<br/>
                            HACKATHON NGHỆ AN 2021 - CUỘC CHƠI MỚI - CƠ HỘI MỚI CHO TECH LOVERS<br/>
                            📧 Email: hackathonnghean@gmail.com<br/>
                            📍 Fanpage cuộc thi: Hackathon Nghệ An<br/>
                            💡 Group cuộc thi: Hackathon Nghệ An
                            {/* <p class="lai"><b>30</b> <img src={like} alt='add-post' width='20' height='20' /></p> */}
                        </p>
                            {/* <p><b>30</b> <img src={like} alt='add-post' width='20' height='20' /></p> */}
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '700px' }}
                            />
                        </FloatingLabel>
                        <div class="ccc">
                            <Button variant="outline-success" type="submit">
                                Submit
                            </Button>
                            {/* <IconButton >
                                <FavoriteIcon />
                                <Typography component='span' color='textSecondary'>
                                1000
                                </Typography>
                            </IconButton> */}
                        </div>
                            <p class="lai"><b>30</b> <img src={like} alt='add-post' width='20' height='20' /></p>
                    </div>
                </div>
            </li>
        </>
    );
}

export default Cardsteme;
