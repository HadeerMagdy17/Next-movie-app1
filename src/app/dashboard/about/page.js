import Image from 'next/image'
import React from 'react'
import myImg from "../../images/test.avif"

export default function aboutPage() {
  return (
    <div>
     <div className="max-w-6xl mx-auto p-3 space-y-4">
      <h1 className="text-2xl font-medium text-amber-600 pb-3">About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id aliquam
        neque excepturi dolore, porro animi numquam eveniet dignissimos ab
        necessitatibus corrupti fugit sequi consequatur accusantium, eligendi
        veritatis similique iusto accusamus tempore maxime. Magnam minima
        voluptates ipsum ad? Eligendi esse sint velit cupiditate iusto illum
        repellat ea aspernatur laudantium harum.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id aliquam
        neque excepturi dolore, porro animi numquam eveniet dignissimos ab
        necessitatibus corrupti fugit sequi consequatur accusantium, eligendi
        veritatis similique iusto accusamus tempore maxime. Magnam minima
        voluptates ipsum ad? Eligendi esse sint velit cupiditate iusto illum
        repellat ea aspernatur laudantium harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id aliquam
        neque excepturi dolore, porro animi numquam eveniet dignissimos ab
        necessitatibus corrupti fugit sequi consequatur accusantium, eligendi
        veritatis similique iusto accusamus tempore maxime. Magnam minima
        voluptates ipsum ad? Eligendi esse sint velit cupiditate iusto illum
        repellat ea aspernatur laudantium harum.
      </p>
      {/* <img src={myImg} alt="test"/> */}
      <Image src={myImg} alt="test"/>
      {/* <img src="/1.AVIF" alt="test" /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id aliquam
        neque excepturi dolore, porro animi numquam eveniet dignissimos ab
        necessitatibus corrupti fugit sequi consequatur accusantium, eligendi
        veritatis similique iusto accusamus tempore maxime. Magnam minima
        voluptates ipsum ad? Eligendi esse sint velit cupiditate iusto illum
        repellat ea aspernatur laudantium harum.
      </p>
    </div>
    </div>
  )
}
