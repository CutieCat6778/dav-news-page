import Image from "next/image";
import { formatDate } from "@/utils/date"
import Weather from "@/components/weather" 
import "../globals.css"

export default function Home() {
  return (
    <div className="w-full min-h-screen items-center flex flex-col">
      <a href="/" className="absolute flex items-center max-height-[100px]">
        <Image src={"/logo.jpg"} alt="DAV NEWS LOGO" objectFit="cover" width={200} height={200} className="w-[4vw] h-[4vw] object-bottom object-cover"/>
        <h1 className="text-4xl font-bold text-blue-900">DAVInternational</h1>
      </a>
      <nav className="w-full flex items-center px-10">
        <a href="/" className="mr-4 flex items-center">
          <Image src={"/logo.jpg"} alt="DAV NEWS LOGO" objectFit="cover" width={200} height={200} className="w-[4vw] h-[4vw] object-bottom object-cover"/>
          <h1 className="text-2xl font-extrabold text-blue-900">DAVNEWS</h1>
        </a>
        <div className="flex items-center">
          <div className="border-r-2 pr-4 mr-4">
            <h1 className="text-neutral-700 font-extrabold">Hà Nội</h1>
            <h2 className="text-neutral-500">{formatDate(new Date())}</h2>
          </div>
          <Weather/>
        </div>
        <div className="min-w-[150px] ml-auto flex items-center text-blue-900">
          <svg aria-hidden="true" focusable="false" className="mr-4 octicon octicon-person Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="24" height="24" fill="currentColor" display="inline-block" overflow="visible"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg>
          <svg className="octicon octicon-mail mr-4" viewBox="0 0 16 16" version="1.1" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg>
          <svg aria-hidden="true" focusable="false" className="mr-8 octicon octicon-comment-discussion Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="24" height="24" fill="currentColor" display="inline-block" overflow="visible"><path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path></svg>
          <h1 className="font-semibold text-xl">Đăng nhập</h1>
        </div>
      </nav>
      <nav className="w-[90%] px-8 flex items-center justify-around pb-2 mt-2">
        <h3>
          Chính Trị 
        </h3>
        <h3>
         Thời Sự 
        </h3>
        <h3>
          Thế giới
        </h3>
        <h3>
          Kinh Tế
        </h3>
        <h3>
       Đời Sống
        </h3>
        <h3>
       Sức Khoẻ
        </h3>
        <h3>
       Giới Trẻ
        </h3>
        <h3>
       Giáo Dục
        </h3>
        <h3>
       Du Lịch
        </h3>
        <h3>
       Văn Hoá
        </h3>
        <h3>
       Giải Trí
        </h3>
        <h3>
       Thể Thao
        </h3>
        <h3>
       Công Nghệ
        </h3>
        <h3>
          Xe
        </h3>
        <h3>
          Video
        </h3>
        <h3>
       Tiêu Dùng
        </h3>
        <h3>
       Thời Trang Trẻ
        </h3>
      </nav>
      <div className="w-[90%] h-[2px] bg-black"/>
      <main className="pt-8 w-[60%] h-[70%] flex justify-start flex-col items-center ">
        <h1 className="text-4xl font-bold">Thầy Thanh Phong: "Sinh viên thành công là người biết giữ đưọc hai chữ cân bằng"</h1>
        <div className="w-full flex items-center my-4">
          <div className="flex items-center mr-10">
            <Image alt="Nhom 4" height={128} width={128} src="/nhom_4.jpg" className="w-10 h-10 rounded-full bg-blue-900 mr-4"/>
            <h2>Nhóm 4</h2>
          </div>
          <h2 className="text-neutral-500">{formatDate(new Date())}</h2>
        </div>
        <audio className="w-[80%] rounded-[12px] bg-neutral-400 my-4" controls>
          <source src="/audio.mp3" type="audio/mpeg"/>
        </audio>
        <p className="mt-5 italic">
            (DAVNEWS) - Năng động, chăm chỉ, đa nhiệm - sinh viên ngày nay đang hiện lên như một thế hệ "toàn năng" giữa kỷ nguyên tốc độ. Nhưng phía sau những chiếc CV dày dặn, lịch trình dày đặc và hình ảnh luôn bận rộn ấy là một mặt tối ít được nhắc đến: sức khỏe thể chất và tinh thần đang bị bào mòn từng ngày. 
        </p>
        <h2 className="font-bold text-xl w-full text-left py-4">Cuộc đua không vạch đích: Sinh viên và vòng xoáy “đa nhiệm”</h2>
        <p>
          “Vừa học vừa làm”, “thức xuyên đêm”, “chạy deadline” đang trở thành những từ khóa quen thuộc phản ánh thực tế cuộc sống của hầu hết sinh viên hiện nay. Không khó để bắt gặp hình ảnh sinh viên gục đầu bên laptop, ăn vội bát mì trong thư viện, hay thức trắng đêm tại các quán cà phê mở 24h. Một bộ phận lớn sinh viên đang lựa chọn đánh đổi bữa ăn, giấc ngủ và thậm chí sức khỏe để theo kịp tiến độ học tập, hoạt động ngoại khóa và công việc làm thêm. “Chạy deadline xuyên đêm là chuyện bình thường,” một sinh viên ngành Truyền thông chia sẻ.
          <br/>
          <br/>
          Tình trạng đảo lộn giờ giấc, thiếu ngủ kéo dài và ăn uống thất thường không còn là hiện tượng cá biệt, mà đã trở thành một “lối sống” phổ biến. Trong bối cảnh cạnh tranh ngày càng gay gắt, nhiều sinh viên cảm thấy bắt buộc phải luôn bận rộn, phải “đa nhiệm” để không bị bỏ lại phía sau. Cường độ học tập cao, lịch trình dày đặc cùng kỳ vọng thành tích khiến không ít người trẻ rơi vào trạng thái mệt mỏi triền miên, cả về thể chất lẫn tinh thần.
          <br/>
          <br/>
          Đáng chú ý, lối sống này đang được ngầm xem là “tiêu chuẩn” của sự thành công - nơi mà năng động và kiệt sức chỉ cách nhau một ranh giới mỏng. Và câu hỏi đặt ra là: Liệu đây là sự chủ động thích nghi hay là dấu hiệu của một thế hệ đang bị cuốn theo áp lực vô hình?
        </p>
        <h2 className="font-bold text-xl w-full text-left py-4">
        Khi áp lực không chỉ đến từ bài vở mà còn từ những ánh nhìn kỳ vọng
        </h2>
        <p className="mb-4">
          Tình trạng sinh viên bỏ bữa, thiếu ngủ vì mải "chạy deadline", dẫn đến sức khỏe thể chất và tinh thần bị ảnh hưởng nghiêm trọng, đã không còn là điều xa lạ trong đời sống hiện nay. Thực tế này bắt nguồn từ nhiều nguyên nhân phức tạp, đan xen lẫn nhau.
          <br/>
          <br/>
          Một trong những yếu tố hàng đầu buộc sinh viên “chạy deadline" chính là khối lượng kiến thức và yêu cầu môn học ngày càng lớn. Chương trình đào tạo hiện đại thường được thiết kế với nhiều môn học, đòi hỏi sinh viên phải nắm vững kiến thức và kỹ năng thực hành. Các hình thức bài tập như tiểu luận, báo cáo, thuyết trình nhóm,... và các kỳ thi dồn dập khiến sinh viên luôn trong tình trạng căng thẳng. Để đảm bảo hoàn thành tất cả các bài tập đúng hạn và đạt kết quả tốt, việc dành phần lớn thời gian cho học tập, thậm chí thức khuya hay bỏ bữa để học bài đã trở thành điều không thể tránh khỏi đối với nhiều sinh viên.
        </p>
        <Image src="/main.jpg" alt="main" height="600" width="800" className="aspect-video object-cover"/>
        <span className="text-sm mt-2 text-neutral-400 font-semibold">Hình ảnh sinh viên miệt mài “chạy deadline”</span>
        <span className="text-sm mt-2 text-neutral-400 font-semibold">( Nguồn: Quỳnh Anh )</span>
        <p className="text-lg my-6">
          Bên cạnh áp lực từ chương trình học, kỳ vọng từ gia đình và xã hội cũng tạo nên gánh nặng tâm lý không nhỏ. Nhiều bạn trẻ phải đối mặt với áp lực phải đạt thành tích cao, có việc làm tốt sau khi ra trường, thậm chí là mang lại niềm tự hào cho gia đình. Chính những kỳ vọng này, dù xuất phát từ tình yêu thương, lại vô tình đẩy sinh viên vào áp lực phải hoàn hảo. Bạn L.T.D, sinh viên Học viện Ngoại giao chia sẻ: "Áp lực học tập ở trường đã lớn, nhưng mình còn cảm thấy áp lực từ gia đình và bạn bè nữa. Ai cũng mong mình đạt được kết quả tốt, có công việc ổn định sau này. Điều đó khiến mình không dám lơ là bất cứ lúc nào."
        </p>
        <Image src="/pic2.webp" alt="main" height="600" width="800" className="aspect-video object-cover"/>
        <span className="text-sm mt-2 text-neutral-400 font-semibold">Sinh viên đang chịu áp lực ngày càng lớn từ bạn bè, người thân</span>
        <span className="text-sm mt-2 text-neutral-400 font-semibold">( Nguồn: ybox.vn )</span>
        <p className="mt-4">
          Một nguyên nhân cốt lõi khác dẫn đến tình trạng này là kỹ năng quản lý thời gian và tự chăm sóc bản thân của sinh viên còn hạn chế. Đặc biệt là những sinh viên mới xa nhà, chưa có kinh nghiệm sắp xếp lịch trình cá nhân một cách hợp lý, khoa học. Thay vì phân bổ công việc đều đặn, nhiều bạn thường xuyên rơi vào tình trạng "nước đến chân mới nhảy", dẫn đến việc phải "chạy deadline" cấp tốc vào những phút cuối. Việc này kéo theo chuỗi ngày bỏ bữa, thiếu ngủ triền miên, tạo thành thói quen khó bỏ và ảnh hưởng trực tiếp đến sức khỏe.
        </p>
        <h2 className="font-bold text-xl w-full text-left py-4">
          Hệ luỵ âm thầm: Khi sức khỏe và tinh thần phải trả giá
        </h2>
        <p>
          Không chỉ là những đêm mất ngủ hay bữa ăn vội vã, vòng xoáy “đa nhiệm” đang để lại những hệ luỵ sâu sắc và lâu dài đối với sức khỏe thể chất và tinh thần của sinh viên. Theo một nghiên cứu của Đại học Huế, tỷ lệ sinh viên có các dấu hiệu của căng thẳng, lo âu và trầm cảm tương ứng là 51,84%; 81,55% và 57,09%. Trong đó, tỷ lệ sinh viên có dấu hiệu từ nặng đến rất nặng đối với rối loạn căng thẳng là 7,96%; rối loạn lo âu là 35,92% và trầm cảm là 8,55%.
        </p>
        <Image src="/anh3.jpg" alt="main" height="600" width="800" className="aspect-video object-cover my-4"/>
        <span className="text-sm mt-2 mb-6 text-neutral-400 font-semibold max-w-[60%] text-center">Hình ảnh minh hoạ. Tỷ lệ sinh viên gặp các vấn đề căng thẳng, lo âu và trầm cảm theo nghiên cứu tại Đại học Huế.</span>
        <p>
          Tình trạng mất ngủ cũng đang trở nên phổ biến trong giới sinh viên. Một khảo sát tại Trường Đại học Y Dược TP.HCM cho thấy, 52,8% sinh viên y khoa bị mất ngủ và 70,9% ngủ ít hơn 7 tiếng mỗi ngày. Thiếu ngủ kéo dài không chỉ ảnh hưởng đến khả năng tập trung và hiệu suất học tập mà còn làm gia tăng nguy cơ mắc các bệnh lý về tim mạch, tiêu hóa và rối loạn tâm thần.
          <br/>
          <br/>
          Đáng lo ngại hơn, khi sự bận rộn được ngợi ca như một biểu hiện của tính cầu tiến, thì việc thừa nhận mình đang kiệt sức lại dễ bị xem là yếu đuối. Chính điều này khiến không ít sinh viên lựa chọn im lặng trước những dấu hiệu stress nặng, thay vì tìm kiếm sự giúp đỡ. Một nghiên cứu tại Trường Đại học Khoa học Xã hội và Nhân văn TP.HCM vào năm 2023 cho thấy, 77,4% sinh viên có biểu hiện đau khổ tâm lý và 89,67% từng thực hiện ít nhất một hành vi tự làm hại bản thân như kéo/giật/bứt tóc, tự đánh/đập đầu mình hay tự cắn.
          <br/>
          <br/>
          Vòng xoáy bận rộn không điểm dừng đang mang đến những hệ lụy khó lường cho sức khỏe của sinh viên. Một thế hệ trẻ khỏe mạnh không thể được xây dựng trên nền tảng của sự mệt mỏi triền miên và áp lực vô hình. Đây không chỉ là vấn đề cá nhân, mà là lời cảnh tỉnh cho cả hệ thống giáo dục và xã hội về việc cần tạo dựng một môi trường học đường lành mạnh, nơi sự cân bằng và sức khỏe tâm thần được đặt lên hàng đầu.
        </p>
        <h2 className="font-bold text-xl w-full text-left py-4">
          Lắng nghe từ giảng đường: Làm gì để sinh viên không kiệt sức?
        </h2>
        <p>
          Trao đổi với nhóm báo, thầy Trần Hồng Phong - giảng viên tại Học viện Ngoại giao - cho biết, tình trạng mệt mỏi, thiếu sức sống thường bắt đầu xuất hiện ở sinh viên vào nửa sau của học kỳ, khi các kỳ thi và sự kiện trong Học viện diễn ra dày đặc. Trong giai đoạn này, sinh viên cần biết ưu tiên những công việc quan trọng, cân nhắc giảm bớt việc làm thêm và một số hoạt động câu lạc bộ để dành thời gian nghỉ ngơi, đảm bảo sức khỏe.
        </p>
        <Image src="/teacher.jpg" alt="main" height="600" width="800" className="aspect-video object-cover my-4"/>
        <span className="text-sm mt-2 text-neutral-400 font-semibold max-w-[60%] text-center">Thầy Trần Hồng Phong - giảng viên Học viện Ngoại giao chia sẻ cùng nhóm phóng viên (Ảnh: Quỳnh Anh)</span>
        <p className="mb-10 mt-6">
          Theo thầy Phong: “Áp lực là điều không thể tránh khỏi, dù còn ngồi trên ghế nhà trường hay sau này bước ra ngoài xã hội. Việc sinh viên cần làm là học cách cân bằng.” Thức khuya, bỏ bữa để chạy deadline, ôn thi hay làm thêm có thể mang lại hiệu quả trong ngắn hạn, nhưng về lâu dài, sự đánh đổi sức khỏe này sẽ có thể trở thành gánh nặng cho gia đình.  
          <br/>
          <br/>
          Không dừng lại ở trách nhiệm của sinh viên, khi bàn về vai trò của nhà trường trong việc đảm bảo sức khỏe thể chất và tinh thần cho người học, thầy Phong đề xuất một số thay đổi: “Căng-tin và nhà thể chất là hai thứ không thể thiếu”.
          <br/>
          <br/>
          Việc mở một căng-tin với thực đơn đa dạng, khoa học ngay trong khuôn viên trường sẽ giúp sinh viên có những bữa ăn nhanh chóng, tiện lợi nhưng vẫn đủ chất và đảm bảo vệ sinh. Song song đó, việc duy trì vận động thể chất thường xuyên là yếu tố then chốt cho một cơ thể khỏe mạnh và một tinh thần vững vàng.
          <br/>
          <br/>
          Lựa chọn sống “đa nhiệm” không sai, nhưng khi nó cuốn sinh viên vào một cuộc đua không có điểm dừng, thì mệt mỏi và kiệt sức là điều tất yếu. Việc học cách lùi lại, thiết lập giới hạn và chăm sóc sức khỏe tinh thần không chỉ là lựa chọn cá nhân, mà là cách để thế hệ trẻ duy trì nội lực bền vững trên hành trình trưởng thành.
        </p>
        <iframe width="1000" height="632" className="mb-10"
          src="https://www.youtube.com/embed/aZSrO6llVJw">
        </iframe>
      </main>
    </div>
  );
}
