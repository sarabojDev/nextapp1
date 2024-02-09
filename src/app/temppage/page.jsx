import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            sadfasdfasdfaasd
            <Image
            
            
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
             src={"https://resources.rawpixel.com/image_transparent_png_600/cmF3cGl4ZWwtZGVzaWduLXByb2Q6OmRlc2lnbi9wcmV2aWV3L3Jhd3BpeGVsLzAxaDk3cHdxeXNkaDgzeHllcTVkYXA3bjdhLWhvdmVyLWRlZmF1bHQucG5n.png?v=1705655839"} />
        </div>
    )
}

export default page