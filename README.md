# Bloomts - Site Oficial

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fbloomts.com.br)](https://bloomts.com.br)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8.svg)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)

Site oficial da Bloomts desenvolvido com Next.js 16 e React 19, oferecendo uma experiência moderna, performática e totalmente responsiva com animações fluidas e efeitos visuais impressionantes.

🔗 **[Ver site ao vivo](https://bloomts.com.br)** | **[Demo na Vercel](https://site-bloom-react.vercel.app)**

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### Core
- **[Next.js 16.0.8](https://nextjs.org/)** - Framework React com App Router
- **[React 19.2.1](https://react.dev/)** - Biblioteca JavaScript para UI com React Compiler
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first

### UI & Animações
- **[Motion](https://motion.dev/)** - Biblioteca de animações (Framer Motion)
- **[Swiper](https://swiperjs.com/)** - Carrossel/slider moderno e responsivo
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrossel leve com autoplay
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e customizáveis
- **[tsParticles](https://particles.js.org/)** - Efeitos de partículas interativos

### Componentes & Estilização
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis (Avatar)
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Suporte a tema claro/escuro
- **[class-variance-authority](https://cva.style/)** - Gerenciamento de variantes de componentes
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes Tailwind
- **[tw-animate-css](https://github.com/ben-rogerson/tw-animate-css)** - Animações CSS com Tailwind

### Deploy
- **[Vercel](https://vercel.com/)** - Plataforma de deploy e hosting

## ✨ Funcionalidades

- ⚡ Performance otimizada com Next.js 16 e React 19 Compiler
- 🎨 Animações suaves e fluidas com Motion (Framer Motion)
- ✨ Efeitos de partículas interativos com tsParticles
- 🎡 Carrosséis responsivos com Swiper e Embla
- 🌓 Suporte a tema claro/escuro
- 📱 Design totalmente responsivo
- 🔍 SEO otimizado
- ♿ Acessibilidade (WCAG) com Radix UI
- 🌐 Server-Side Rendering (SSR)
- 📦 Code Splitting automático
- 🖼️ Otimização de imagens com next/image
- 🎯 Ícones customizáveis com Lucide React

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/) ou [bun](https://bun.sh/)

## 🎲 Instalação e Execução

```bash
# Clone este repositório
git clone https://github.com/EduardoEMonteiro/site-bloom-react.git

# Acesse a pasta do projeto
cd site-bloom-react

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install

# Execute em modo de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🛠️ Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria a build de produção
npm run start        # Inicia o servidor de produção
npm run lint         # Executa o ESLint
```

## 📦 Estrutura do Projeto

```
bloom-react/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React reutilizáveis
│   └── ui/               # Componentes base (Radix UI)
├── lib/                   # Funções utilitárias
│   └── utils.ts          # Helpers e utilitários
├── public/                # Arquivos estáticos
├── .gitignore
├── components.json        # Configuração de componentes
├── eslint.config.mjs      # Configuração ESLint
├── next.config.ts         # Configuração Next.js
├── package.json           # Dependências e scripts
├── postcss.config.mjs     # Configuração PostCSS
├── tailwind.config.ts     # Configuração Tailwind
└── tsconfig.json          # Configuração TypeScript
```

## 🎨 Principais Bibliotecas

### Animações

**Motion (Framer Motion v12.23.26)**
```tsx
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo animado
</motion.div>
```

**tsParticles**
```tsx
import Particles from "react-tsparticles";
// Efeitos de partículas interativos para backgrounds
```

### Carrosséis

**Swiper**
```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Carrossel moderno e responsivo
```

**Embla Carousel**
```tsx
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
// Carrossel leve com autoplay
```

### Temas

**next-themes**
```tsx
import { ThemeProvider } from 'next-themes';
// Suporte a tema claro/escuro
```

## 🌐 Deploy

O projeto está automaticamente integrado com a Vercel através do GitHub. Cada push na branch `main` gera um novo deploy automático.

### Deploy Manual

```bash
# Build local
npm run build

# Testar build localmente
npm run start
```

### Ambientes

- **Produção**: [bloomts.com.br](https://bloomts.com.br)
- **Preview**: [site-bloom-react.vercel.app](https://site-bloom-react.vercel.app)

## 🎯 Personalizações

### Modificando Tema

Edite `app/globals.css` para personalizar as cores do tema:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* ... cores personalizadas */
  }
  
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... cores do modo escuro */
  }
}
```

### Adicionando Ícones Lucide

```tsx
import { Home, User, Settings } from "lucide-react";

<Home className="w-6 h-6" />
```

Explore todos os ícones em [lucide.dev](https://lucide.dev/).

## 📚 Recursos e Documentação

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev/)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [Motion (Framer Motion) Documentation](https://motion.dev/)
- [Swiper Documentation](https://swiperjs.com/)
- [Embla Carousel Documentation](https://www.embla-carousel.com/)
- [tsParticles Documentation](https://particles.js.org/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

## ⚙️ Tecnologias Avançadas

### React 19 Compiler
Este projeto utiliza o **babel-plugin-react-compiler** para otimizações automáticas de performance, eliminando a necessidade de memoização manual em muitos casos.

### Tailwind CSS 4
Versão mais recente do Tailwind com melhorias de performance e novas funcionalidades.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrões de Commit

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação, espaços em branco
- `refactor:` Refatoração de código
- `test:` Adição ou correção de testes
- `chore:` Manutenção geral
- `perf:` Melhorias de performance

## 📝 Licença

Este projeto é privado e pertence à Bloomts.

## 👨‍💻 Autor

**Eduardo E. Monteiro**

- GitHub: [@EduardoEMonteiro](https://github.com/EduardoEMonteiro)
- Website: [bloomts.com.br](https://bloomts.com.br)

## 📧 Contato

Para dúvidas ou sugestões, entre em contato:

- 📧 Email: eduardoemonteiro@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/eduardoemonteiro

---

Desenvolvido com 💙 por [Eduardo E. Monteiro](https://github.com/EduardoEMonteiro)

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!