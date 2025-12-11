import { cn } from '@/lib/utils'

export interface TeamMember {
    id: string
    name: string
    role: string
    image: string
    bio?: string
}

export interface TeamCarouselProps {
    members: TeamMember[]
    title?: string
    titleSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    titleColor?: string
    background?: string
    cardWidth?: number
    cardHeight?: number
    cardRadius?: number
    showArrows?: boolean
    showDots?: boolean
    keyboardNavigation?: boolean
    touchNavigation?: boolean
    animationDuration?: number
    autoPlay?: number
    pauseOnHover?: boolean
    visibleCards?: number
    sideCardScale?: number
    sideCardOpacity?: number
    grayscaleEffect?: boolean
    className?: string
    cardClassName?: string
    titleClassName?: string
    infoPosition?: 'bottom' | 'overlay' | 'none'
    infoTextColor?: string
    infoBackground?: string
    onMemberChange?: (member: TeamMember, index: number) => void
    onCardClick?: (member: TeamMember, index: number) => void
    initialIndex?: number
}
