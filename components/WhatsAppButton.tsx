'use client'

import { motion } from 'motion/react'
import { WhatsAppIcon } from '@/components/icons'

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/5532998063010?text=Olá%20Tamires!%20Vim%20pelo%20site%20e%20quero%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.1, translateY: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[1000] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all"
            aria-label="Agendar via WhatsApp"
        >
            <WhatsAppIcon className="w-8 h-8" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        </motion.a>
    )
}
