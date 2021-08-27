import React from 'react';
import './card.css';
// import CardItem from './CardItem';
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
        <div className='cards'>
            <h1 class="display-5">Giới thiệu về EQualEdu</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Card
                    // src='images/img-9.jpg'
                    // label='Adventure'
                    // path='/servicesư'
                    >
                        <p class="">
                            "Nhiều học sinh các tỉnh lẻ đặc biệt hạnh phúc khi biết đến diễn đàn ý nghĩa này. Bạn Lê Duy Thức (19 tuổi) cho biết: "Mình đến từ một tỉnh mà môn tin học chưa được quan tâm nhiều, khi bắt đầu học lập trình thi đấu thì không có ai để nhờ hướng dẫn.
                            Biết tới VNOI, mình thường xuyên lên diễn đàn xem mọi người đang học gì, luyện gì để làm quen và học tập theo họ. Cứ có bài khó là hỏi sẽ có ngay người hỗ trợ. VNOI có một kho các bài toán lập trình lớn là công cụ học tập, ôn luyện cho chúng mình. Một cộng đồng như VNOI rất tốt dành cho những bạn đến từ các tỉnh mà tin học chưa phát triển".
                            "Chắp cánh thế hệ tin học tương lai
                            Ông Nguyễn Long, trưởng Ban tổ chức kỳ thi lập trình sinh viên quốc tế ICPC Việt Nam, đánh giá học sinh Việt Nam tiếp cận với lập trình muộn và việc thành lập VNOI đã tạo ra môi trường học tập và luyện tập, trao đổi về giải thuật và lập trình rất phù hợp và ý nghĩa.
                            "VNOI tạo lập các lứa kế cận đạ
                        </p>
                    </Card>
                    
                </ul>
                {/* <ul className='cards__items'>
                    <CardItem
                    src='images/img-3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem
                    src='images/img-4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/products'
                    />
                    <CardItem
                    src='images/img-8.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/sign-up'
                    />
                </ul> */}
            </div>
        </div>
        </div>
    );
}

export default Cards;
