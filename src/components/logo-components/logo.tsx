import Image from 'next/image'
import LogoImage from '../../assets/logo/logo-1.png'

export default function Logo() {
  return (
    <div className="h-12">
      <Image className="w-full h-full object-contain" src={LogoImage} alt="AlphaCorp" />
    </div>
  )
}
