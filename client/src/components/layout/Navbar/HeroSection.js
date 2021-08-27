import {useContext,React} from 'react';
import { Link} from 'react-router-dom'
import {AuthContext} from "../../../contexts/AuthContext.js"
// import '../App.css';
// import { Button } from './Button';
import Cards from './card.js';
import './HeroSection.css';
import Table from 'react-bootstrap/Table'

function HeroSection() {
  const {
      authState: {
          user: {
              username
          }
      }
  } = useContext(AuthContext);
  return (
      <div className="profile_page">
        <div class="col-8">
          <div class="content">
            {/* <h1>
              Giới thiệu về EQualEdu
            </h1> */}
            <Cards/>
                        {/* "Nhiều học sinh các tỉnh lẻ đặc biệt hạnh phúc khi biết đến diễn đàn ý nghĩa này. Bạn Lê Duy Thức (19 tuổi) cho biết: "Mình đến từ một tỉnh mà môn tin học chưa được quan tâm nhiều, khi bắt đầu học lập trình thi đấu thì không có ai để nhờ hướng dẫn.

              Biết tới VNOI, mình thường xuyên lên diễn đàn xem mọi người đang học gì, luyện gì để làm quen và học tập theo họ. Cứ có bài khó là hỏi sẽ có ngay người hỗ trợ. VNOI có một kho các bài toán lập trình lớn là công cụ học tập, ôn luyện cho chúng mình. Một cộng đồng như VNOI rất tốt dành cho những bạn đến từ các tỉnh mà tin học chưa phát triển".

              "Chắp cánh thế hệ tin học tương lai

              Ông Nguyễn Long, trưởng Ban tổ chức kỳ thi lập trình sinh viên quốc tế ICPC Việt Nam, đánh giá học sinh Việt Nam tiếp cận với lập trình muộn và việc thành lập VNOI đã tạo ra môi trường học tập và luyện tập, trao đổi về giải thuật và lập trình rất phù hợp và ý nghĩa.

              "VNOI tạo lập các lứa kế cận đạt thành tích cao trong những kỳ thi tin học quốc gia, quốc tế và xa hơn, cao hơn. Nhiều bạn trẻ thành công từ VNOI và các kỳ thi tin học cũng đã và đang là các tình nguyện viên, huấn luyện viên để duy trì và phát huy hiệu quả cho VNOI hướng tới đào tạo các thế hệ tương lai, duy trì vị thế Việt Nam trong bảng xếp hạng lập trình toàn cầu" - ông Long nói." */}
          </div>
        </div>
        <div class="col-4">
          <div class="bxh">
            <Table striped bordered hover size="sm" class="dbban">
                  <thead>
                    <tr >
                      <th class="ll">#</th>
                      <th class="ll">User Name</th>
                      <th class="ll">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="top">
                      <td class="ll">1</td>
                      <td class="ll">{username}</td>
                      <td class="ll">1989</td>
                    </tr>
                    <tr class="top">
                      <td class="ll">2</td>
                      <td class="ll">ngocbi09</td>
                      <td class="ll">100</td>
                    </tr>
                    <tr class="top">
                      <td class="ll">3</td>
                      <td class="ll">ngocbi09</td>
                      <td class="ll">100</td>
                    </tr>
                    <tr class="top">
                      <td class="ll">4</td>
                      <td class="ll">ngocbi09</td>
                      <td class="ll">100</td>
                    </tr>
                    <tr class="top">
                      <td class="ll">5</td>
                      <td class="ll">ngocbi09</td>
                      <td class="ll">100</td>
                    </tr>
                    <tr class="top">
                      <td class="ll">6</td>
                      <td class="ll">ngocbi09</td>
                      <td class="ll">100</td>
                    </tr>
                    <tr class="top">
                      <td class="ll">7</td>
                      <td class="ll">ngocbi09</td>
                      <td class="ll">100</td>
                    </tr>
                    <tr class="top">
                      <td class="ll">8</td>
                      <td class="ll">ngocbi09</td>
                      <td class="ll">100</td>
                    </tr>
                    <tr class="top">
                      <td class="ll">9</td>
                      <td class="ll">ngocbi09</td>
                      <td class="ll">100</td>
                    </tr>
                    <tr class="top">
                      <td class="ll">10</td>
                      <td class="ll">ngocbi09</td>
                      <td class="ll">100</td>
                    </tr>
                  </tbody>
                  <tbody class="linh">
                    <Link 
                      to="/ranking"
                      color="black" class="linh"
                    >
                      All
                    </Link>
                  </tbody>
            </Table>
          </div>
        </div>
      </div>
  );
}

export default HeroSection;
