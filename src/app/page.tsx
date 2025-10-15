'use client'

import { useState, useEffect } from 'react'
import { 
  Check, CreditCard, FileText, TrendingUp, Smartphone, QrCode, Bell, ArrowRight, Star, Users, Shield, Zap, Calendar, Target, Layers,
  Bot, Brain, Sparkles, MessageSquare, BarChart3, PieChart, DollarSign, AlertTriangle, CheckCircle, Clock, Settings,
  Download, Upload, Send, Eye, Filter, Search, Plus, Edit, Trash2, Copy, Share2, RefreshCw, Wallet, CreditCard as Card,
  Globe, Lock, Headphones, Mail, Phone, MapPin, Award, Briefcase, TrendingDown, Activity, Banknote, Receipt
} from 'lucide-react'

export default function FaturouApp() {
  const [currentView, setCurrentView] = useState('landing')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [user, setUser] = useState(null)
  const [aiAssistant, setAiAssistant] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [balance, setBalance] = useState(2847.50)
  const [invoices, setInvoices] = useState([])
  const [transactions, setTransactions] = useState([])

  // Simulação de IA - Assistente Inteligente
  const aiSuggestions = [
    "💡 Detectei que você tem 3 faturas em atraso. Quer que eu envie lembretes automáticos?",
    "📊 Sua receita aumentou 15% este mês. Que tal criar um plano de investimento?",
    "🎯 Identifiquei o melhor horário para enviar faturas: terças às 10h têm 40% mais conversão.",
    "💰 Você pode economizar €127 em impostos mudando para regime simplificado. Quer simular?",
    "🔔 Lembrete: Prazo do IVA em 5 dias. Já preparei o relatório automático."
  ]

  const [currentAiSuggestion, setCurrentAiSuggestion] = useState(0)

  useEffect(() => {
    // Rotação automática das sugestões da IA
    const interval = setInterval(() => {
      setCurrentAiSuggestion((prev) => (prev + 1) % aiSuggestions.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Simulação de dados em tempo real
  useEffect(() => {
    if (currentView === 'dashboard') {
      // Simular notificações em tempo real
      const notificationInterval = setInterval(() => {
        const newNotifications = [
          "💰 Pagamento de €250 recebido de João Silva",
          "📄 Fatura #1234 foi visualizada pelo cliente",
          "⚠️ Lembrete: Prazo fiscal em 3 dias",
          "✅ Relatório mensal gerado automaticamente",
          "🎯 Meta de faturação atingida: €3.000"
        ]
        const randomNotification = newNotifications[Math.floor(Math.random() * newNotifications.length)]
        setNotifications(prev => [randomNotification, ...prev.slice(0, 4)])
      }, 8000)
      return () => clearInterval(notificationInterval)
    }
  }, [currentView])

  const handleLogin = (e) => {
    e.preventDefault()
    setUser({ name: 'João Silva', email: email })
    setCurrentView('dashboard')
  }

  const handleSignup = (e) => {
    e.preventDefault()
    alert(`Conta criada com sucesso!\\nEmail: ${email}\\nTelefone: ${phone}`)
    setUser({ name: 'Novo Usuário', email: email })
    setCurrentView('dashboard')
  }

  // Landing Page
  if (currentView === 'landing') {
    return (
      <div className="min-h-screen">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Faturou</span>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setCurrentView('login')}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Entrar
                </button>
                <button 
                  onClick={() => setCurrentView('signup')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Criar Conta
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section com Background */}
        <section 
          className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d5a7bfc4-0949-4af3-bdd5-9d3516c226e2.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white">
                    <Bot className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium">Powered by AI • Pronto para App Store</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                    Faturou: IA cuida de tudo para você
                  </h1>
                  <p className="text-xl text-gray-100 leading-relaxed drop-shadow-lg">
                    Inteligência artificial automatiza faturação, pagamentos e impostos. 
                    Para freelancers e empresas em Portugal e Brasil.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-semibold">IA Assistente Ativa</span>
                  </div>
                  <p className="text-gray-200 text-sm">
                    {aiSuggestions[currentAiSuggestion]}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setCurrentView('signup')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>Começar com IA</span>
                  </button>
                  <button
                    onClick={() => setCurrentView('demo')}
                    className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Ver Demo</span>
                  </button>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-200">
                  <div className="flex items-center space-x-1">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>IA 24/7 grátis</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Automação total</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>App Store ready</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">Dashboard IA</h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-300">Online</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
                      <p className="text-sm opacity-90">Saldo otimizado por IA</p>
                      <p className="text-2xl font-bold">€ 2.847,50</p>
                      <p className="text-xs opacity-75">+15% vs mês anterior</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-3">
                        <p className="text-xs text-green-300">Receitas IA</p>
                        <p className="font-semibold text-green-200">€ 3.200</p>
                      </div>
                      <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-3">
                        <p className="text-xs text-blue-300">Economia</p>
                        <p className="font-semibold text-blue-200">€ 127</p>
                      </div>
                    </div>

                    <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-purple-300" />
                        <span className="text-xs text-purple-300">IA Sugestão</span>
                      </div>
                      <p className="text-xs text-white mt-1">Melhor horário para faturar: 10h</p>
                    </div>
                  </div>
                </div>
                
                {/* Elementos decorativos flutuantes */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* IA Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-medium">Inteligência Artificial</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                IA que trabalha 24/7 para você
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nossa inteligência artificial cuida de tudo automaticamente
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Faturação Automática</h3>
                <p className="text-gray-600">
                  IA cria, envia e acompanha faturas automaticamente. Detecta atrasos e envia lembretes inteligentes.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Otimização Fiscal</h3>
                <p className="text-gray-600">
                  IA analisa seus dados e sugere a melhor estratégia fiscal. Calcula impostos e prepara declarações.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Insights Inteligentes</h3>
                <p className="text-gray-600">
                  IA identifica padrões, prevê fluxo de caixa e sugere melhores horários para maximizar recebimentos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Store Ready */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">App Store Ready</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Aplicativo completo pronto para lançamento
              </h2>
              <p className="text-xl text-gray-600">
                Todas as funcionalidades implementadas e otimizadas para iOS e Android
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Segurança Bancária</h3>
                <p className="text-gray-600 text-sm">
                  Criptografia de ponta e conformidade com GDPR/LGPD
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Multi-país</h3>
                <p className="text-gray-600 text-sm">
                  Portugal, Brasil e expansão para toda Europa
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                <p className="text-gray-600 text-sm">
                  Otimizado para velocidade e baixo consumo de bateria
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Suporte 24/7</h3>
                <p className="text-gray-600 text-sm">
                  IA + humanos para resolver qualquer problema
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Seja o primeiro a usar IA na sua faturação
              </h2>
              <p className="text-xl text-blue-100">
                App completo, IA integrada, pronto para App Store
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setCurrentView('signup')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Baixar App (Em breve)</span>
                </button>
                <button
                  onClick={() => setCurrentView('demo')}
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors flex items-center justify-center space-x-2"
                >
                  <Eye className="w-5 h-5" />
                  <span>Testar Web App</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <span className="text-xl font-bold">Faturou</span>
                </div>
                <p className="text-gray-400">
                  IA cuida da sua faturação 24/7
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Produto</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>IA Assistente</li>
                  <li>Faturação Automática</li>
                  <li>Conta Digital</li>
                  <li>App Mobile</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Suporte</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Central de Ajuda</li>
                  <li>Chat IA 24/7</li>
                  <li>Tutoriais</li>
                  <li>API Docs</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Empresa</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Sobre</li>
                  <li>Carreiras</li>
                  <li>Imprensa</li>
                  <li>Investidores</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Faturou. Powered by AI. Ready for App Store.</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  // Login Page
  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-2xl">F</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Entrar no Faturou</h1>
            <p className="text-gray-600">Acesse sua conta com IA</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Entrar
            </button>
          </form>

          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Não tem conta?{' '}
              <button 
                onClick={() => setCurrentView('signup')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Criar agora
              </button>
            </p>
            <button 
              onClick={() => setCurrentView('landing')}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ← Voltar ao início
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Signup Page
  if (currentView === 'signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Criar Conta</h1>
            <p className="text-gray-600">Comece com IA em 30 segundos</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Seu nome"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+351 xxx xxx xxx"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">País</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Portugal</option>
                <option>Brasil</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Criar conta com IA</span>
            </button>
          </form>

          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Já tem conta?{' '}
              <button 
                onClick={() => setCurrentView('login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Entrar
              </button>
            </p>
            <button 
              onClick={() => setCurrentView('landing')}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ← Voltar ao início
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Dashboard - App Principal
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header do App */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Faturou</h1>
                  <p className="text-xs text-gray-500">Olá, {user?.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setAiAssistant(!aiAssistant)}
                  className={`p-2 rounded-lg transition-colors ${aiAssistant ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  <Bot className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors relative">
                  <Bell className="w-5 h-5" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  )}
                </button>
                <button 
                  onClick={() => setCurrentView('landing')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar com IA */}
            <div className="lg:col-span-1 space-y-6">
              {/* IA Assistant */}
              {aiAssistant && (
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="w-6 h-6" />
                    <span className="font-semibold">IA Assistente</span>
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-sm mb-4">
                    {aiSuggestions[currentAiSuggestion]}
                  </p>
                  <div className="flex space-x-2">
                    <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-xs transition-colors">
                      Aplicar
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-xs transition-colors">
                      Mais info
                    </button>
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    <Plus className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-medium">Nova Fatura</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <QrCode className="w-5 h-5 text-green-600" />
                    <span className="text-green-600 font-medium">Link Pagamento</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-600 font-medium">Relatório IA</span>
                  </button>
                </div>
              </div>

              {/* Notifications */}
              {notifications.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4">Notificações</h3>
                  <div className="space-y-3">
                    {notifications.slice(0, 3).map((notification, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">{notification}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Wallet className="w-8 h-8 opacity-80" />
                    <TrendingUp className="w-5 h-5 text-green-300" />
                  </div>
                  <p className="text-blue-100 text-sm">Saldo Total</p>
                  <p className="text-2xl font-bold">€ {balance.toLocaleString()}</p>
                  <p className="text-blue-200 text-xs mt-1">+15% vs mês anterior</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-green-600 text-sm">+12%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Receitas</p>
                  <p className="text-2xl font-bold text-gray-900">€ 3.200</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-red-600 text-sm">-5%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Despesas</p>
                  <p className="text-2xl font-bold text-gray-900">€ 352</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-purple-600 text-sm">12</span>
                  </div>
                  <p className="text-gray-600 text-sm">Faturas</p>
                  <p className="text-2xl font-bold text-gray-900">Este mês</p>
                </div>
              </div>

              {/* Charts */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900">Receitas vs Despesas</h3>
                    <BarChart3 className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Janeiro</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-green-200 rounded-full">
                          <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">€2.800</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Fevereiro</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-green-200 rounded-full">
                          <div className="w-18 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">€3.200</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Março</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-blue-200 rounded-full">
                          <div className="w-12 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">€2.100</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900">Previsão IA</h3>
                    <Brain className="w-5 h-5 text-purple-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-900">Próximo mês</span>
                      </div>
                      <p className="text-2xl font-bold text-purple-900">€ 3.450</p>
                      <p className="text-xs text-purple-700">+8% vs atual</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Confiança da previsão</span>
                        <span className="font-medium text-green-600">94%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="w-[94%] h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Invoices */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Faturas Recentes</h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Filter className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Search className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Cliente</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Valor</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Data</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-medium text-sm">JS</span>
                            </div>
                            <span className="font-medium text-gray-900">João Silva</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium text-gray-900">€ 250,00</td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Pago
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">15/03/2024</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <Eye className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <Share2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-medium text-sm">MS</span>
                            </div>
                            <span className="font-medium text-gray-900">Maria Santos</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium text-gray-900">€ 180,00</td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Clock className="w-3 h-3 mr-1" />
                            Pendente
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">12/03/2024</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <Send className="w-4 h-4 text-blue-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <Edit className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 font-medium text-sm">PC</span>
                            </div>
                            <span className="font-medium text-gray-900">Pedro Costa</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium text-gray-900">€ 320,00</td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Atrasado
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">08/03/2024</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <RefreshCw className="w-4 h-4 text-orange-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <Send className="w-4 h-4 text-blue-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <Phone className="w-4 h-4 text-green-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Demo View
  if (currentView === 'demo') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Demo do Faturou</h1>
            <p className="text-gray-600">Veja como a IA funciona na prática</p>
            <button 
              onClick={() => setCurrentView('landing')}
              className="mt-4 text-blue-600 hover:text-blue-700"
            >
              ← Voltar ao início
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center space-x-3">
                <Bot className="w-8 h-8" />
                <div>
                  <h2 className="text-xl font-bold">IA Assistente Ativo</h2>
                  <p className="text-blue-100">Demonstração em tempo real</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Automação Inteligente</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Fatura #1234 enviada automaticamente</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Brain className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">IA detectou melhor horário: 10h</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">Sugestão fiscal aplicada: -€127</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Métricas em Tempo Real</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Taxa de conversão</span>
                      <span className="font-bold text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Tempo médio pagamento</span>
                      <span className="font-bold text-blue-600">2.3 dias</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Economia fiscal IA</span>
                      <span className="font-bold text-purple-600">€1.247</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Próximas Ações da IA</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border border-orange-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-900">Em 2 horas</span>
                    </div>
                    <p className="text-sm text-gray-700">Enviar lembrete para 3 faturas em atraso</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">Amanhã 9h</span>
                    </div>
                    <p className="text-sm text-gray-700">Gerar relatório fiscal automático</p>
                  </div>
                  <div className="p-4 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-900">Sexta-feira</span>
                    </div>
                    <p className="text-sm text-gray-700">Otimizar preços baseado em dados</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t">
                <button 
                  onClick={() => setCurrentView('signup')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                >
                  <Bot className="w-5 h-5" />
                  <span>Ativar IA na minha conta</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}