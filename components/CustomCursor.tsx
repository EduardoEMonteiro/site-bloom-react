/**
 * Custom Cursor Component
 * Creates a custom cursor effect (desktop only)
 */

'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Only show on desktop
        const isDesktop = window.matchMedia('(min-width: 968px)').matches
        if (!isDesktop) return

        setIsVisible(true)

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })

            // Follower with slight delay
            setTimeout(() => {
                setFollowerPosition({ x: e.clientX, y: e.clientY })
            }, 100)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    if (!isVisible) return null

    return (
        <>
            {/* Main cursor */}
            <div
                className="fixed w-5 h-5 border-2 border-[#D4AF37] rounded-full pointer-events-none z-[9999] transition-all duration-150 mix-blend-difference"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />

            {/* Follower */}
            <div
                className="fixed w-10 h-10 border border-[#D4AF37] rounded-full pointer-events-none z-[9998] transition-all duration-300 opacity-50"
                style={{
                    left: `${followerPosition.x}px`,
                    top: `${followerPosition.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    )
}
