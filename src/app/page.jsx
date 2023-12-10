import React from 'react';
import './css/page.css';
import Footer from './Footer/Footer'
import Link from 'next/link'
import Image from 'next/image'



export default function Home() {
    return (
        <div>
            <div className='top w-full'>
                <img className="banner w-full mb-72" src="image/logo.jpg" alt="logo" />
                <h2 className="text-3xl font-bold text-black mb-4 grid place-items-center">TOP 8</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 p-12 mb-72">
                    <ProductItem id="16" name="벨란디 캐시미어 블렌드 발마칸 코트" image="/images/아우터1.jpg" price="100.99" />
                    <ProductItem id="21" name="이지 와이드 데님 팬츠 그레이 " image="/images/하의1.jpg" price="24.99" />
                    <ProductItem id="6" name="3버튼 카라 니트 네이비" image="/images/상의1.jpg" price="35.99" />
                    <ProductItem id="19" name="남성 로고 트랙수트 자켓 " image="/images/아우터4.jpg" price="65.99" />
                    <ProductItem id="20" name="여성 로고 스트라이프 울 가디건 - 멀티컬러" image="/images/아우터5.jpg" price="82.99" />
                    <ProductItem id="23" name="원턱 파라슈트 카고 데님팬츠_그레이" image="/images/하의3.jpg" price="65.99" />
                    <ProductItem id="25" name="Mid Rise 와이드 데님 팬츠" image="/images/하의5.jpg" price="82.99" />
                    <ProductItem id="12" name="스탠스미스 - 화이트 그린" image="/images/신발2.jpg" price="80.99" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

function ProductItem({ id, name, image, price }) {
    return (
        <div className="card">
            <Link href={`/product/${id}`}>
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt={name}
                    className="rounded shadow object-cover h-96 w-full"
                />
            </Link>
            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/product/${id}`}>
                    <h2 className="text-lg font-bold underline-none">{name}</h2>
                </Link>
                <p>${price}</p>
            </div>
        </div>
    );
}

