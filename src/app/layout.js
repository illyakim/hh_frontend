import './globals.css'

export const metadata = {
  title: 'HeadHunter',
  description: 'Learning react',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
