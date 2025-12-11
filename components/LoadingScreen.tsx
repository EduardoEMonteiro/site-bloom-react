/**
 * Loading Screen Component
 * Shows percentage counter and logo while site loads
 */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function LoadingScreen() {
    const [count, setCount] = useState(0)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        // Animate counter from 0 to 100
        const duration = 2500 // 2.5 seconds
        const steps = 100
        const stepDuration = duration / steps

        let currentCount = 0
        const interval = setInterval(() => {
            currentCount++
            setCount(currentCount)

            if (currentCount >= 100) {
                clearInterval(interval)
                // Fade out after reaching 100%
                setTimeout(() => {
                    setIsHidden(true)
                }, 500)
            }
        }, stepDuration)

        return () => clearInterval(interval)
    }, [])

    if (isHidden) return null

    return (
        <div className={`fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center transition-opacity duration-1000 ${count >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
            <div className="text-[120px] font-black text-[#D4AF37] leading-none mb-8 tabular-nums">
                {count}
            </div>

            <Image
                src="/images/logo.webp"
                alt="Bloom"
                width={120}
                height={120}
                className="mt-4 animate-pulse"
                style={{
                    filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))',
                }}
                priority
            />
        </div>
    )
}
