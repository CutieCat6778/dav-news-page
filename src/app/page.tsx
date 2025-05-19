import Image from "next/image";
import { formatDate } from "@/utils/date"
import Weather from "@/components/weather" 

export default function Home() {
  return (
    <div className="w-full min-h-screen items-center flex flex-col">
      <div className="absolute flex items-center max-height-[100px]">
        <Image src={"/logo.jpg"} alt="DAV NEWS LOGO" objectFit="cover" width={200} height={200} className="w-[4vw] h-[4vw] object-bottom object-cover"/>
        <h1 className="text-4xl font-bold text-blue-900">DAVInternational</h1>
      </div>
      <nav className="w-full flex items-center px-10">
        <div className="mr-4 flex items-center">
        <Image src={"/logo.jpg"} alt="DAV NEWS LOGO" objectFit="cover" width={200} height={200} className="w-[4vw] h-[4vw] object-bottom object-cover"/>
          <h1 className="text-2xl font-extrabold text-blue-900">DAVNEWS</h1>
        </div>
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
      <nav className="w-[90%] px-8 flex items-center justify-around pb-2">
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
      <main className="px-14 p-6 w-full grid grid-cols-4 grid-rows-3">
        <div className="max-w-[14vw]">
          <Image src="/tien_2.webp" alt="Teacher Image" height={600} width={800} className="w-[100%] h-[70%] aspect-auto object-cover bg-neutral-700"/>
          <h2 className="mt-2">Hoa hậu Nguyễn Thúc Thuỳ Tiên bị khỏi tố</h2>
        </div>
        <div className="w-[90%] col-span-2 row-span-3">
          <Image src="/teacher.jpg" alt="Teacher Image" height={600} width={800} className="w-[100%] h-[70%] bg-neutral-700 object-cover"/>
          <h2 className="mt-4 font-bold text-2xl">Thầy Thanh Phong: "Sinh viên thành công là người biết giữ đưọc hai chữ cân bằng"</h2>
          <p className="text-neutral-500 mt-4">
            Trò chuyện với thầy Thanh Phong - giảng viên Học Viện Ngoại Giao. Thầy đã chia sẻ quan điểm về tầm quan trọng của việc giữ "hai chữ cân bằng" trong hành trình truởng thành của người trẻ.
          </p>
        </div>
        <div className="max-w-[24vw] flex flex-row-reverse">
          <Image src="/tien_1.webp" alt="Teacher Image" height={600} width={800} className="w-[100%] h-[70%] aspect-auto object-cover bg-neutral-700"/>
          <h2 className="mt-2 max-w-[10vw] mr-[2vw]">Hoa hậu Thuỳ Tiên "lách" trách nhiệm vụ kẹo Kẻa như thế nào?</h2>
        </div>
        <div className="max-w-[14vw]">
          <Image src="/trump.webp" alt="Teacher Image" height={600} width={800} className="w-[100%] h-[70%] aspect-auto object-cover bg-neutral-700"/>
          <h2 className="mt-2">Ông Trump có thể bổ sung lệnh trừng phạt với Nga</h2>
        </div>
        <div className="max-w-[24vw] flex flex-row-reverse">
          <Image src="/da-nang.webp" alt="Teacher Image" height={600} width={800} className="w-[100%] h-[70%] aspect-auto object-cover bg-neutral-700"/>
          <h2 className="mt-2 max-w-[10vw] mr-[2vw]">Nghiên cứu chuyển hơn 1.000 dân về Đà Nẵng hoặc Quảng Ngãi sau sát nhập</h2>
        </div>
        <div className="max-w-[14vw]">
          <h2 className="my-1 text-2xl font-bold">Tâm Điểm</h2>
          <h2 className="mt-2">Tuyển sinh lớp 1, 6 "nhà gần truờng": Nhiều lợi ích nhưng cần minh bạch</h2>
        </div>
        <div className="max-w-[24vw] flex flex-row-reverse">
          <Image src="/russia.webp" alt="Teacher Image" height={600} width={800} className="w-[100%] h-[70%] aspect-auto object-cover bg-neutral-700"/>
          <h2 className="mt-2 max-w-[10vw] mr-[2vw]">Chuyên Gia: Tên lửa Iskander-1000 của Nga hiếm khi bắn truợt</h2>
        </div>
      </main>
    </div>
  );
}
