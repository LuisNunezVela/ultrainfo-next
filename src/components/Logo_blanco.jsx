import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LogoBlanco = () => {
  return (
    <Link href="">
        <Image src="/Ultrainfo_blanco.svg" width={230} height={48} alt="UltraInfo logo" />
    </Link>
  )
}

export default LogoBlanco
