// Root layout — shell mínimo compartilhado por todos os route groups.
// O (site)/layout.tsx adiciona Header, Footer, LoadingScreen etc.
// O links/layout.tsx é completamente isolado.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
