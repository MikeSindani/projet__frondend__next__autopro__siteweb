import Image from 'next/image'
import React from 'react'
import image from ""

export default function ImageLoading() {
  return (
    <div>
        <Image src={logo} alt="logo" width={"100%"} height={"100%"} />
    </div>
    
  )
}
