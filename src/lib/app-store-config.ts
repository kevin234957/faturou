// Configurações para App Store
export const APP_CONFIG = {
  // Informações básicas
  name: 'Faturou - IA Faturação',
  version: '1.0.0',
  build: '1',
  bundleId: 'com.faturou.app',
  
  // App Store Connect
  appStoreId: '123456789',
  teamId: 'XXXXXXXXXX',
  
  // Metadados para App Store
  metadata: {
    title: 'Faturou - IA cuida da sua faturação',
    subtitle: 'Automação inteligente para freelancers',
    description: `Faturou é o primeiro app com inteligência artificial que cuida completamente da sua faturação.

🤖 IA ASSISTENTE 24/7
• Cria e envia faturas automaticamente
• Detecta atrasos e envia lembretes inteligentes
• Otimiza horários para máxima conversão
• Sugere melhorias fiscais personalizadas

💰 CONTA DIGITAL INTEGRADA
• Receba pagamentos direto no app
• Cartão virtual para despesas
• Saldo sempre atualizado
• Transferências instantâneas

📊 RELATÓRIOS INTELIGENTES
• Previsões de receita com 94% de precisão
• Análise de padrões de pagamento
• Identificação de melhores clientes
• Alertas fiscais automáticos

🌍 MULTI-PAÍS
• Portugal: Recibo Verde, IVA, Regime Simplificado
• Brasil: MEI, Simples Nacional, Nota Fiscal
• Expansão para toda Europa em breve

✨ FUNCIONALIDADES PREMIUM
• Faturação ilimitada
• Cash advance inteligente
• Integração com contabilidades
• Suporte prioritário 24/7

Ideal para:
• Freelancers e consultores
• Pequenas empresas
• Trabalhadores independentes
• Prestadores de serviços

Baixe agora e deixe a IA cuidar de tudo para você!`,
    
    keywords: [
      'faturação', 'invoice', 'freelancer', 'IA', 'artificial intelligence',
      'contabilidade', 'impostos', 'receitas', 'pagamentos', 'MEI',
      'recibo verde', 'automação', 'fintech', 'conta digital'
    ],
    
    categories: {
      primary: 'Business',
      secondary: 'Finance'
    },
    
    ageRating: '4+',
    contentRating: 'Everyone',
    
    supportedLanguages: ['pt-PT', 'pt-BR', 'en-US', 'es-ES'],
    
    screenshots: {
      iphone: [
        {
          file: 'screenshot-iphone-1.png',
          title: 'Dashboard com IA ativa'
        },
        {
          file: 'screenshot-iphone-2.png', 
          title: 'Faturação automática'
        },
        {
          file: 'screenshot-iphone-3.png',
          title: 'Conta digital integrada'
        },
        {
          file: 'screenshot-iphone-4.png',
          title: 'Relatórios inteligentes'
        },
        {
          file: 'screenshot-iphone-5.png',
          title: 'Configurações e perfil'
        }
      ],
      ipad: [
        {
          file: 'screenshot-ipad-1.png',
          title: 'Visão completa do dashboard'
        },
        {
          file: 'screenshot-ipad-2.png',
          title: 'Gestão avançada de faturas'
        }
      ]
    },
    
    appPreview: {
      iphone: 'app-preview-iphone.mp4',
      ipad: 'app-preview-ipad.mp4'
    }
  },
  
  // Configurações técnicas
  technical: {
    minimumOSVersion: {
      ios: '14.0',
      android: '7.0'
    },
    
    permissions: [
      'INTERNET',
      'ACCESS_NETWORK_STATE',
      'CAMERA',
      'WRITE_EXTERNAL_STORAGE',
      'READ_EXTERNAL_STORAGE',
      'VIBRATE',
      'RECEIVE_BOOT_COMPLETED',
      'WAKE_LOCK'
    ],
    
    features: [
      'PWA Ready',
      'Offline Support',
      'Push Notifications',
      'Biometric Authentication',
      'Dark Mode',
      'Accessibility Support',
      'Multi-language',
      'Cloud Sync'
    ],
    
    integrations: [
      'Apple Pay',
      'Google Pay',
      'PayPal',
      'Stripe',
      'MB Way',
      'Multibanco',
      'PIX',
      'Boleto'
    ]
  },
  
  // Informações de contato
  contact: {
    supportEmail: 'suporte@faturou.com',
    website: 'https://faturou.com',
    privacyPolicy: 'https://faturou.com/privacidade',
    termsOfService: 'https://faturou.com/termos'
  },
  
  // Configurações de monetização
  monetization: {
    model: 'freemium',
    freeFeatures: [
      'IA Assistente básica',
      '10 faturas por mês',
      'Conta digital',
      'Relatórios básicos'
    ],
    premiumFeatures: [
      'IA Assistente avançada',
      'Faturas ilimitadas',
      'Cash advance',
      'Relatórios detalhados',
      'Suporte prioritário',
      'Integração contabilidade'
    ],
    pricing: {
      monthly: 29.99,
      yearly: 299.99,
      currency: 'EUR'
    }
  }
}

// Configurações de build para diferentes plataformas
export const BUILD_CONFIG = {
  ios: {
    bundleId: 'com.faturou.app',
    teamId: 'XXXXXXXXXX',
    provisioningProfile: 'Faturou App Store',
    signingCertificate: 'iPhone Distribution',
    icons: {
      '20x20': 'icon-20.png',
      '29x29': 'icon-29.png',
      '40x40': 'icon-40.png',
      '58x58': 'icon-58.png',
      '60x60': 'icon-60.png',
      '80x80': 'icon-80.png',
      '87x87': 'icon-87.png',
      '120x120': 'icon-120.png',
      '180x180': 'icon-180.png',
      '1024x1024': 'icon-1024.png'
    }
  },
  
  android: {
    packageName: 'com.faturou.app',
    versionCode: 1,
    targetSdkVersion: 34,
    minSdkVersion: 24,
    keystore: 'faturou-release-key.keystore',
    icons: {
      'mdpi': 'icon-48.png',
      'hdpi': 'icon-72.png',
      'xhdpi': 'icon-96.png',
      'xxhdpi': 'icon-144.png',
      'xxxhdpi': 'icon-192.png'
    }
  },
  
  web: {
    domain: 'app.faturou.com',
    ssl: true,
    cdn: 'cloudflare',
    analytics: 'google-analytics',
    monitoring: 'sentry'
  }
}

// Checklist para App Store
export const APP_STORE_CHECKLIST = {
  required: [
    '✅ App funcional completo',
    '✅ Ícones em todas as resoluções',
    '✅ Screenshots para iPhone e iPad',
    '✅ Descrição detalhada',
    '✅ Política de privacidade',
    '✅ Termos de serviço',
    '✅ Suporte a acessibilidade',
    '✅ Testes em dispositivos reais',
    '✅ Certificados de distribuição',
    '✅ Perfis de provisionamento'
  ],
  
  recommended: [
    '✅ App Preview (vídeo)',
    '✅ Localização para múltiplos idiomas',
    '✅ Suporte a Dark Mode',
    '✅ Otimização para iPad',
    '✅ Integração com Apple Pay',
    '✅ Notificações push',
    '✅ Suporte offline',
    '✅ Testes de performance'
  ],
  
  marketing: [
    '✅ Landing page otimizada',
    '✅ Estratégia de ASO (App Store Optimization)',
    '✅ Campanhas de pré-lançamento',
    '✅ Parcerias com influencers',
    '✅ Conteúdo para redes sociais',
    '✅ Press kit para imprensa'
  ]
}