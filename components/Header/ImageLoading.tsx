import Image from 'next/image'
import React from 'react'
import logo from "../../asset/logo.png"

export default function ImageLoading() {
  return (
    <div>
        <Image src={logo} alt="logo" width={1200} height={800} />
    </div>
    
  )
}
