'use client'

import { motion } from 'motion/react'
import { WhatsAppIcon } from '@/components/icons'

const whatsappHref =
    'https://wa.me/5532998063010?text=Olá%20Tamires!%20Vim%20pelo%20site%20e%20quero%20marcar%20uma%20avaliação.'

export function WhatsAppButton() {
    return (
        <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.35 }}
            whileHover={{ scale: 1.03, translateY: -3 }}
            whileTap={{ scale: 0.97 }}
            className="fixed bottom-5 right-5 z-[1000] inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 font-black text-white shadow-[0_12px_34px_rgba(37,211,102,0.36)] transition-all hover:shadow-[0_18px_46px_rgba(37,211,102,0.48)] md:bottom-8 md:right-8"
            aria-label="Marcar avaliação pelo WhatsApp"
        >
            <WhatsAppIcon className="h-6 w-6" />
            <span className="hidden sm:inline">Avaliação</span>
        </motion.a>
    )
}
