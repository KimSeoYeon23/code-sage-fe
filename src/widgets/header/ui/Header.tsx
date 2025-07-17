'use client'

import Logo from "@/src/shared/ui/Logo/Logo";


const Header = () => {
  return (
    <div className='p-2 border-b flex items-center justify-between w-full'>
      <Logo />
      <div className='text-sm flex'>
        <span>Dashbaord</span>
        <span>Dashbaord</span>
        <span>Dashbaord</span>
      </div>
    </div>
  )
}

export default Header
