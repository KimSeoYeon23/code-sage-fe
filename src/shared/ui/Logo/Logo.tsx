'use client'

import React from 'react'

interface LogoProps {
  size?: 'sm' | 'default' | 'lg' | 'xl'
  variant?: 'full' | 'icon'
  className?: string
}

const Logo:React.FC<LogoProps> = ({ size = 'default', variant = 'full', className }) => {
  const sizes = {
    sm: { container: "h-6", icon: "w-5 h-5", text: "text-base" },
    default: { container: "h-8", icon: "w-6 h-6", text: "text-lg" },
    lg: { container: "h-12", icon: "w-10 h-10", text: "text-2xl" },
    xl: { container: "h-16", icon: "w-12 h-12", text: "text-3xl" }
  }

  const currentSize = sizes[size]

  return (
    <div className={'flex gap-1 items-center'}>
      <div className={`${currentSize.icon} bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg`}>
        {/* AI Brain + Code 조합 아이콘 */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-3/4 h-3/4 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Brain 외곽선 */}
          <path
            d="M12 2C8.5 2 6 4.5 6 7.5c0 1.5 0.5 2.8 1.3 3.8C6.5 12.2 6 13.5 6 15c0 3 2.5 5.5 6 5.5s6-2.5 6-5.5c0-1.5-0.5-2.8-1.3-3.7C17.5 10.3 18 9 18 7.5c0-3-2.5-5.5-6-5.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Brain 내부 회로 패턴 */}
          <circle cx="9" cy="8" r="1" fill="currentColor" opacity="0.8" />
          <circle cx="15" cy="8" r="1" fill="currentColor" opacity="0.8" />
          <circle cx="12" cy="11" r="1" fill="currentColor" opacity="0.8" />
          <circle cx="10" cy="14" r="0.8" fill="currentColor" opacity="0.6" />
          <circle cx="14" cy="14" r="0.8" fill="currentColor" opacity="0.6" />

          {/* 연결선 (뉴런 네트워크) */}
          <path
            d="M9 8 L12 11 L15 8 M10 14 L12 11 L14 14"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.7"
          />

          {/* 코드 브래킷 */}
          <path
            d="M7 6 L5 8 L7 10 M17 6 L19 8 L17 10"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.9"
          />
        </svg>
      </div>

      {
        variant === 'full' &&
        <span className={`${currentSize.text} font-bold text-gray-900 tracking-tight`}>
          Code<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sage</span>
        </span>
      }
    </div>
  )
}

export default Logo
