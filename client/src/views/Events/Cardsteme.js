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
                            <br/>|𝐒𝐌𝐀𝐑𝐓 𝐂𝐈𝐓𝐘 - 𝐓𝐇𝐀̀𝐍𝐇 𝐏𝐇𝐎̂́ 𝐓𝐔̛𝐎̛𝐍𝐆 𝐋𝐀𝐈 𝐋𝐈𝐄̣̂𝐔 𝐂𝐎́ 𝐍𝐇𝐔̛ 𝐂𝐇𝐔́𝐍𝐆 𝐓𝐀 𝐓𝐔̛𝐎̛̉𝐍𝐆 𝐓𝐔̛𝐎̛̣𝐍𝐆|<br/>
                            Càng ngày con người càng muốn hướng đến sự đơn giản mà hiệu quả, tăng năng suất trong công việc và nâng cao chất lượng cuộc sống. Bắt đầu với sự ra đời của bánh xe, bóng đèn, ô tô, điện thoại và bây giờ... là Smart City. Với trí tưởng tượng phong phú cùng sự đi lên không ngừng của khoa học công nghệ, viễn cảnh con người xây dựng nơi ở dưới đáy biển hay thậm chí là trên hành tinh khác hoàn toàn không phải bất khả thi. Cùng KC STEME điểm tên những ý tưởng và dự án thú vị về thành phố tương lai nhé!<br/>                                              
                            <b>𝐊𝐡𝐚́𝐦 𝐩𝐡𝐚́ 𝐭𝐡𝐞̂́ 𝐠𝐢𝐨̛́𝐢 𝐝𝐮̛𝐨̛́𝐢 đ𝐚̣𝐢 𝐝𝐮̛𝐨̛𝐧𝐠</b> <br/>
                            Dự án tổ hợp sinh thái dưới biển Aequorea là minh chứng cho việc con người là không có giới hạn. Xu thế xây nhà dưới biển được dự báo sẽ giúp giảm thiểu tác động của biến đổi khí hậu, đồng thời góp phần “dọn dẹp” đại dương. Aequorea có khả năng tự cung cấp năng lượng, được bảo vệ vững chắc nhờ một bộ khung tạo thành từ quá trình vôi hóa tự nhiên nhờ calcium carbonate (CaCO3) có trong thành phần nước biển. Aequorea có thể ngắm nhìn trọn vẹn đại dương.
                            Bề mặt công trình khổng lồ này là các khu nhà kính phát triển nông nghiệp hữu cơ, vườn cây ăn trái và trồng rau, cho phép cây vươn trên mặt biển để quang hợp, hấp thụ ánh nắng và nước ngọt từ mưa. Các rạn san hô sẽ được trồng trên ban công tạo thành vườn ươm cho các loài thực vật và động vật thủy sinh cư ngụ. Bên dưới Aequorea tích hợp hệ thống lọc nước biển để cung cấp nước ngọt cho cư dân sử dụng. Nhóm thiết kế cũng sử dụng phương án tách muối từ nước biển qua một hệ thống màng lọc để sản xuất nước ngọt phục vụ sinh hoạt và làm việc. Không khí sạch và rất giàu oxy được cung cấp tự nhiên thông qua hệ thống quạt gió, hoặc từ các trạm điện phân nước biển.
                            <br/>𝐓𝐡𝐨̂𝐧𝐠 𝐦𝐢𝐧𝐡 𝐯𝐚̀ 𝐭𝐡𝐢́𝐜𝐡 𝐮̛́𝐧𝐠<br/>
                            Không thể bỏ qua xu hướng tích hợp công nghệ trí tuệ nhân tạo (AI) để phát triển các thành phố thông minh trong tương lai. 
                            Đến năm 2020, smart city sẽ là một thị trường tăng trưởng nhanh, sở hữu khả năng thích ứng linh hoạt với nhu cầu nhằm nâng cao chất lượng cuộc sống người dân. Sự độc đáo của thành phố AI hướng đến những thay đổi về giao thông, trong đó sẽ xuất hiện các mô hình đô thị không đèn giao thông từ khoảng năm 2025. Sự kết nối diện rộng của hệ thống cơ sở hạ tầng với mạng Internet, từ vỉa hè cho đến các tòa nhà, sẽ thay đổi hoàn toàn việc sử dụng các phương tiện, cho phép tự động hóa khả năng quản lý năng lượng và hoạt động giao thông.Các ví dụ như là kết hợp các dịch vụ y tế thành phố với các quầy thuốc, xe riêng và các dịch vụ giao hàng bằng máy bay không người lái. Thậm chí, AI còn được tích hợp để vận chuyển rác theo yêu cầu dựa trên việc giám sát số theo cư dân, hơn là chỉ dựa vào các thùng rác có cảm biến.
                            <br/>𝐂𝐡𝐢𝐧𝐡 𝐩𝐡𝐮̣𝐜 𝐤𝐡𝐨̂𝐧𝐠 𝐠𝐢𝐚𝐧<br/>
                            Giới khoa học coi ý tưởng kiến tạo thành phố trên sao Hỏa hay xây dựng trạm vũ trụ Asgardia chẳng khác nào kịch bản của phim viễn tưởng của Hollywood.
                            Những khách sạn kiểu này bao gồm nhiều tổ hợp như khu vui chơi, tiếp đón khách và nhà nghỉ được kết nối với nhau bởi thang máy. Các phòng ngủ được sắp xếp theo vòng tròn, cho phép dễ dàng quan sát Trái Đất cùng các hành tinh khác trong khi du khách tận hưởng các dịch vụ.
                            Chưa hết, SpaceX đưa ra ý tưởng xây dựng thành phố trên Mặt Trăng theo hình lục giác, tận dụng chính các nguồn nguyên liệu sẵn có ở Mặt Trăng, do các robot điều khiển từ xa đảm trách. SpaceX cũng chia sẻ thông tin về kế hoạch 20 năm hoàn thiện thành phố đầu tiên trên sao Hỏa, đưa con người trở thành giống loài sinh sống liên hành tinh. Kế hoạch đầy tham vọng thiết lập một thành phố tự duy trì trên sao Hỏa dự kiến cần khoảng 1.000 phi thuyền không gian nhằm vận chuyển hàng hóa, hạ tầng, và phi hành đoàn lên sao Hỏa trong quá trình xây dựng. Thậm chí, Asgardia đã lên kế hoạch phát triển các công trình khổng lồ trên quỹ đạo gần mặt đất, làm trạm trung chuyển hàng hóa và lưu trú cho con người đề phòng các thảm họa tương lai. 
                            Vậy là hành trình khám phá Smart city đã phải dừng lại ở đây rồi. Các bạn hãy like , follow page để biết thêm nhiều kiến thức bổ ích về khoa học nha. Và đừng quên để lại cho chúng mình ý kiến về Thành phố Tương Lai lý tưởng của bạn nha!<br/>
                            <b>Mọi thông tin chi tiết liên hệ:</b> <br/>
                            📬 Gmail : stemkc@gmail.com<br/>
                            Fanpage : https://www.facebook.com/kcsteme/<br/>
                            Chủ nhiệm CLB : Hoàng Thương
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
