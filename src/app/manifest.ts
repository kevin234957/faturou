import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Faturou - IA Faturação',
    short_name: 'Faturou',
    description: 'Inteligência artificial cuida da sua faturação 24/7. Para freelancers e empresas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    categories: ['business', 'finance', 'productivity'],
    lang: 'pt-PT',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-mobile-1.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Dashboard principal com IA'
      },
      {
        src: '/screenshot-mobile-2.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Faturação automática'
      },
      {
        src: '/screenshot-desktop-1.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Visão completa do dashboard'
      }
    ]
  }
}