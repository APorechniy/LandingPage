import type { Metadata, Viewport } from 'next'
import './global.css'

export const metadata: Metadata = {
    title: 'Beautifier | IT-услуги за один день',
    description: 'От идеи до реализации за 1 день! Разработка лендингов под ключ',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    openGraph: {
        title: 'Beautifier | IT-услуги за один день',
        description: 'От идеи до реализации за 1 день! Разработка лендингов под ключ',
        url: 'https://beautifier.ru',
        siteName: 'Beautifier',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Beautifier - preview',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },

    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.ico', sizes: '16x16', type: 'image/png' },
            { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
    },

    appleWebApp: {
        title: 'Beautifier',
        statusBarStyle: 'black-translucent',
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#0f1620',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru" suppressHydrationWarning data-theme="dark">
            <body>
                {children}
            </body>
        </html>
    )
}
