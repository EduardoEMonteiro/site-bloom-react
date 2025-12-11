/**
 * 📚 AULA 1: COMPONENTE HEADER
 * 
 * Vamos converter o header HTML para React/TypeScript
 * 
 * CONCEITOS QUE VOCÊ VAI APRENDER:
 * 1. 'use client' - Componentes que usam interatividade no navegador
 * 2. useState - Gerenciar estado (dados que mudam)
 * 3. useEffect - Executar código quando algo acontece
 * 4. JSX - HTML dentro do JavaScript
 * 5.ClassName condicional - Mudar classes dinamicamente
 */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

/**
 * EXPLICAÇÃO: 'use client'
 * 
 * No Next.js, componentes são renderizados no SERVIDOR por padrão.
 * Mas nosso header precisa detectar scroll = navegador!
 * Por isso usamos 'use client' para dizer:
 * "Ei Next.js, este componente roda no navegador"
 */

export function Header() {
    /**
     * EXPLICAÇÃO: useState
     * 
     * Em React, quando dados mudam, a interface atualiza automaticamente.
     * useState cria uma "variável especial" que React observa.
     * 
     * const [valor, funcaoParaMudar] = useState(valorInicial)
     * 
     * Aqui: scrolled começa como false
     * Quando rolarmos a página, vamos mudar para true
     */
    const [scrolled, setScrolled] = useState(false)

    /**
     * EXPLICAÇÃO: useEffect
     * 
     * Executar código quando o componente aparece na tela.
     * Aqui vamos:
     * 1. Adicionar um listener de scroll
     * 2. Quando scroll > 50px, mudar scrolled para true
     * 3. Limpar o listener quando componente sair da tela
     */
    useEffect(() => {
        const handleScroll = () => {
            // Se scrollY > 50, scrolled = true, senão = false
            setScrolled(window.scrollY > 50)
        }

        // Adiciona o listener
        window.addEventListener('scroll', handleScroll)

        // IMPORTANTE: Cleanup function
        // Remove o listener quando componente é destruído
        return () => window.removeEventListener('scroll', handleScroll)
    }, []) // [] = executar apenas uma vez, quando componente aparecer

    /**
     * EXPLICAÇÃO: JSX (Return)
     * 
     * JSX parece HTML, mas é JavaScript!
     * Diferenças importantes:
     * 
     * HTML:           JSX:
     * class=""        className=""
     * for=""          htmlFor=""
     * <img>           <img />
     * onclick=""      onClick={}
     * style=""        style={{}}
     */
    return (
        <header
            /**
             * EXPLICAÇÃO: className condicional
             * 
             * Em HTML você faria isso com JavaScript:
             *   if (scrolled) header.classList.add('scrolled')
             * 
             * Em React, usamos template strings:
             *   `classe-fixa ${condicao ? 'classe-extra' : ''}`
             * 
             * Aqui: se scrolled = true, adiciona 'scrolled'
             */
            className={`fixed top-0 w-full z-[1000] px-[5%] transition-all duration-500 ${scrolled
                ? 'py-4 bg-[rgba(1,34,32,0.95)] shadow-[0_10px_40px_rgba(0,0,0,0.3)]'
                : 'py-6 bg-[rgba(1,34,32,0.3)]'
                } backdrop-blur-[20px] border-b border-[rgba(255,248,175,0.1)]`}
        >
            <div className="max-w-[1400px] mx-auto flex justify-between items-center">

                {/**
         * EXPLICAÇÃO: Image do Next.js
         * 
         * Em vez de <img>, usamos <Image> do Next.js
         * Vantagens:
         * - Otimização automática de tamanho
         * - Lazy loading (carrega só quando visível)
         * - Formatos modernos (WebP)
         * 
         * IMPORTANTE:
         * - src começa com "/" = público
         * - width/height são obrigatórios
         * - alt sempre necessário (acessibilidade)
         */}
                <Image
                    src="/images/logo.webp"
                    alt="Bloom por Tamires Sousa - Salão de Beleza em São João Del Rei"
                    width={100}
                    height={100}
                    className={`relative z-10 w-auto transition-all duration-500 ${scrolled
                        ? 'h-[70px] sm:h-[85px] md:h-[100px] -mt-[10px] -mb-[10px] sm:-mt-[12px] sm:-mb-[12px] md:-mt-[15px] md:-mb-[15px]'
                        : 'h-[80px] sm:h-[90px] md:h-[100px] -mt-[20px] -mb-[20px] sm:-mt-[25px] sm:-mb-[25px] md:-mt-[30px] md:-mb-[30px]'
                        }`}
                    style={{
                        filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))'
                    }}
                    priority // Carrega imediatamente (não faz lazy load)
                />

                <nav className="flex gap-3 sm:gap-4 md:gap-6">
                    {/**
           * EXPLICAÇÃO: Links
           * 
           * Mantemos <a> normal para links externos
           * Para links internos (entre páginas do seu site),
           * usaríamos <Link> do next/link
           */}
                    <a
                        href="https://instagram.com/bloomhairts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              relative flex items-center justify-center
              w-[45px] h-[45px] rounded-full
              bg-[rgba(255,255,255,0.05)]
              text-[#e8e8e8] text-xl
              transition-all duration-300
              hover:text-[#000000] hover:-translate-y-1
              before:content-[''] before:absolute before:w-full before:h-full
              before:rounded-full before:bg-[#D4AF37]
              before:scale-0 before:transition-transform before:duration-300
              before:-z-10
              hover:before:scale-100
            "
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        href="https://wa.me/5532998063010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              relative flex items-center justify-center
              w-[45px] h-[45px] rounded-full
              bg-[rgba(255,255,255,0.05)]
              text-[#e8e8e8] text-xl
              transition-all duration-300
              hover:text-[#000000] hover:-translate-y-1
              before:content-[''] before:absolute before:w-full before:h-full
              before:rounded-full before:bg-[#D4AF37]
              before:scale-0 before:transition-transform before:duration-300
              before:-z-10
              hover:before:scale-100
            "
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </nav>
            </div>
        </header>
    )
}

/**
 * 🎓 RESUMO DO QUE APRENDEMOS:
 * 
 * 1. 'use client' - Para componentes interativos
 * 2. useState - Para dados que mudam (scrolled)
 * 3. useEffect - Para eventos (scroll listener)
 * 4. JSX - class → className, <img> → <img />
 * 5. Image - Otimização automática de imagens
 * 6. Template strings - Para classes condicionais
 * 7. Cleanup - Remover listeners para evitar memory leaks
 * 
 * PRÓXIMA AULA: Footer (mais simples, sem interatividade)
 */
