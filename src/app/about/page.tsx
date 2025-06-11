'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import SiteCarouselComponent from '@/components/Carousel'; 
// Removed Carousel as AntCarousel, keeping Avatar
import { Avatar } from 'antd'; 
import { UserOutlined, EyeOutlined, HistoryOutlined } from '@ant-design/icons';
import FooterComp from '@/components/Footer';

export default function About() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <SiteCarouselComponent />

      <main className="flex-grow px-6 py-8 md:px-12 lg:px-24">
        <div className="space-y-10 max-w-7xl mx-auto">

          {/* History Section */}
          <section className="bg-white p-6 rounded-lg shadow-md min-h-[280px]">
            <div className="flex items-center mb-4"> {/* Title container */}
              <HistoryOutlined className="text-2xl mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Бидний Түүх</h2>
            </div>
            <div> {/* Content container */}
              <p className="text-gray-700 leading-relaxed">
                1993 оноос эхлэн Хөдөлмөр, нийгмийн харилцааны чиглэлээр дээд боловсролын сургалт явуулж буй манай сургууль нь 
                Монгол Улсад анх удаа энэ салбарт мэргэшсэн боловсон хүчнийг бэлтгэх зорилгоор байгуулагдсан. Өнгөрсөн хугацаанд 
                бид 5000 гаруй мэргэжилтнийг амжилттай төгсгөн, хөдөлмөрийн зах зээлд нийлүүлж, салбарын хөгжилд үнэтэй хувь нэмэр 
                оруулсаар байна. Судалгаа, олон улсын хамтын ажиллагаа, чанартай боловсролын системээрээ бид хөгжлийн шинэ шатанд хүрээд байна.
              </p>
            </div>
          </section>

          {/* Team Section - Now a Grid */}
          <section className="bg-white p-6 rounded-lg shadow-md min-h-[280px]">
            <div className="flex items-center mb-4"> {/* Title container */}
              <UserOutlined className="text-2xl mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Манай Хамт Олон</h2>
            </div>
            <div> {/* Content container */}
              <p className="text-gray-700 leading-relaxed mb-6">
              Манай сургууль нь салбартаа тэргүүлэгч, туршлагатай, эрдмийн зэрэг цолтой багш, судлаачдаас бүрдсэн хамт олонтой.
               Тэд зөвхөн хичээл заахаас гадна оюутнуудыг хувь хүний хувьд төлөвших, ёс зүйтэй, олон улсын хөдөлмөрийн зах зээлд өрсөлдөх
              чадвартай мэргэжилтэн болоход нь чиглүүлж, сургахыг эрхэм зорилгоо болгодог. Бид багш, судлаачдынхаа хөгжлийг тогтмол дэмжиж,
              мэргэжлийн чадвар, орчин үеийн мэдлэгийг тасралтгүй шинэчилж ажилладаг.
              </p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md min-h-[280px]">
            <div className="flex items-center mb-4"> {/* Title container */}
              <UserOutlined className="text-2xl mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Улирдлага зохион байгуулалт</h2>
            </div>
            <div> {/* Content container */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor quas, dolores cupiditate, impedit alias non similique nisi totam repellendus consequuntur nulla. Laboriosam deleniti quidem odit ullam, omnis culpa beatae?
                Molestiae repellendus quidem eaque, ad non fugit unde repudiandae, et eos, maiores accusantium voluptatum voluptas illum laudantium illo fuga numquam odit. Autem voluptatibus doloremque dicta dolores corporis ab, consequuntur veritatis.
                Et natus impedit vero eligendi dolor dolore placeat earum! Provident aliquam omnis ipsa ex repellat fuga beatae optio dolore nisi cum ea ullam, nostrum ab corrupti earum sapiente sunt. Dignissimos.
              </p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md min-h-[280px]">
            <div className="flex items-center mb-4"> {/* Title container */}
              <EyeOutlined className="text-2xl mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Алсын Хараа</h2>
            </div>
            <div> {/* Content container */}
              <p className="text-gray-700 leading-relaxed">
                Хөдөлмөр, нийгмийн харилцааны чиглэлээр Монголдоо тэргүүлэгч, бүс нутагт өрсөлдөх чадвартай, сургалт-судалгааны 
                интеграцлагдсан их сургууль болохыг бид зорьдог. Бид дэлхийн жишигт нийцсэн боловсролын тогтолцоог нэвтрүүлж, 
                нийгмийн хэрэгцээнд нийцсэн, ёс зүйтэй, чадамжтай мэргэжилтэн бэлтгэхийг эрхэмлэн ажиллаж байна.
              </p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4"> {/* Title container */}
              <UserOutlined className="text-2xl mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Эрхэм зорилго</h2>
            </div>
            <div> {/* Content container */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Бид өндөр чадамжтай, хөрвөх чадвар бүхий, мэргэжлийн ёс зүй, хүнлэг чанарыг эрхэмлэсэн дэлхийн иргэнийг бэлтгэнэ.
              </p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4"> {/* Title container */}
              <UserOutlined className="text-2xl mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Үнэт зүйлс</h2>
            </div>
            <div> {/* Content container */}
                <ul className='text-gray-700 leading-relaxed list-disc pl-6'>
                    <li>Сахилга бат</li>
                    <li>Боловсролын ёс зүй</li>
                    <li>Хүртээмжтэй боловсрол</li>
                    <li>Хамтын ажиллагаа</li>
                    <li>Үр ашиг</li>
                </ul>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4"> {/* Title container */}
              <UserOutlined className="text-2xl mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Уриа</h2>
            </div>
            <div> {/* Content container */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Эрдмээр чимж, хөдөлмөрөөр жигүүрлэе.
              </p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4"> {/* Title container */}
              <UserOutlined className="text-2xl mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Чанарын бодлого</h2>
            </div>
            <div> {/* Content container */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis saepe voluptatum distinctio consequatur nihil repellendus facilis veniam dolor quia repudiandae non vel architecto, harum sint magni illum error eaque officia.
                Reprehenderit eaque fuga vero. Debitis veniam minima asperiores et non unde, rerum, ipsam voluptatibus ducimus quasi laudantium libero obcaecati nesciunt commodi aliquam nihil maiores. Dolore quisquam impedit repellat exercitationem cumque.
                Velit, error officia. Sed id qui excepturi quae iste eos illo, delectus exercitationem saepe quis possimus, odit accusantium eaque quia? Unde a dolore accusamus expedita nesciunt laudantium rem, perspiciatis quasi.
              </p>
            </div>
          </section>
        </div>
      </main>
      <FooterComp />
    </div>
  );
}