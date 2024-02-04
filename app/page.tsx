"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function GalleryPage() {
  // Replace with your actual image URLs
  const imageUrls = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    // ...add as many images as you like
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imageUrls.length - 1));
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < imageUrls.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <>
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={imageUrls[currentImageIndex]} />
        {/* Add other meta tags as needed */}
      </Head>
      <div className="gallery-container">
        <button onClick={showPreviousImage}>Previous</button>
        <Image
          src={imageUrls[currentImageIndex]}
          alt="Gallery Image"
          width={600} // Adjust the size as needed
          height={400}
          priority={true}
        />
        <button onClick={showNextImage}>Next</button>
      </div>
      {/* The rest of your page content goes here */}
    </>
  );
}
