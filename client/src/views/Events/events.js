import React from 'react'
import './events.css';
import CardItem from './CardItem';
import CardItem1 from './CardItem1';
import CardItem2 from './CardItem2';
import CardItem3 from './CardItem3';
import CardItem4 from './CardItem4';
import CardItem5 from './CardItem5';


const events = () => {
    return (
        <>
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cc'>
                    <ul className='cards__items'>
                        <CardItem2
                        src='images/contest.jpg'
                        text='Trang web tìm kiếm cuộc thi, với mục đích tạo sân chơi bổ ích thể hiện tài năng cho tất cả các học sinh trong trường. Có thể lựa chọn lĩnh vực, phân môn mà mình muốn tham gia. Cùng tìm hiểu trên trang web ...'
                        label='EqualEdu'
                        />
                        <CardItem1
                        src='https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/228404488_891840391439179_1683521702046517669_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PIl0agiL6GwAX9ddpA6&_nc_oc=AQklHg-Se12NsxWmS2Z9bErzefvhcKT0FE7qUI-mjnQk78QjsMllbmkUjNHjaW_5wxk&_nc_ht=scontent.fhan5-7.fna&oh=61df2b571da5db0c9329134b450cb581&oe=61428A50'
                        text='Càng ngày con người càng muốn hướng đến sự đơn giản mà hiệu quả, tăng năng suất trong công việc và nâng cao chất lượng cuộc sống. Bắt đầu với sự ra đời của bánh xe, bóng đèn, ô tô, điện thoại và bây giờ... là Smart City'
                        label='Steme'
                        path='/services'
                        />
                        <CardItem3
                        src='images/img-3.jpg'
                        text='//HACKATHON NGHỆ AN 2021//📣CÔNG BỐ DANH SÁCH BAN TỔ CHỨC HACKATHON 2021📣🎉🎉🎉HACKATHON NGHỆ AN 2021 đang bước vào những khâu chuẩn bị cuối cùng, sức nóng đang được đẩy cao hơn bao giờ hết. Đồng hành cùng ...'
                        label='Tin học'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/chess.jpg'
                        text='Vậy là còn một tháng nữa là năm học 2021-2022 sẽ bắt đầu, bạn đã chuẩn bị cho bản thân những gì rồi?Nhằm nâng cao tinh thần thể thao giữa mùa dịch cũng như nâng cao khả năng tư duy của các bạn học sinh trong ...'
                        label='cờ vua'
                        />
                        <CardItem4
                        src='images/bongda.jpg'
                        text='Vòng 1 Giải bóng đá KC Cup chào đón tân học sinh Giải bóng đá KC cup chào đón nhưng tân học sinh đang được tổ chức tại sân bóng Đại học Vinh nhằm kết nối những con người mới-cũ của trường chuyên Đại Học Vinh.'
                        label='đá bóng'
                        />
                        <CardItem5
                        src='images/bongro.jpg'
                        text='[ Xuân khép cửa cho hạ kia cởi áo ]Cậu có nghe thấy tiếng chim lảnh lót đón hè sang? Có tưởng tượng được ngày những đàn em K55 đang phơi đồng phục trắng tinh, phù hiệu THPT Chuyên rung rinh và trên bàn học K53 là...'
                        label='Bóng rổ'
                        />
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default events
