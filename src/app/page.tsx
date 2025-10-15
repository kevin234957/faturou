'use client'

import { useState } from 'react'
import { Check, CreditCard, FileText, TrendingUp, Smartphone, QrCode, Bell, ArrowRight, Star, Users, Shield, Zap, Calendar, Target, Layers } from 'lucide-react'

export default function FaturouLanding() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria integrado com sistema de captura de leads
    alert(`Obrigado! Entraremos em contato em breve.\nEmail: ${email}\nTelefone: ${phone}`)
    setEmail('')
    setPhone('')
  }

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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Entrar
            </button>
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
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Lançamento em breve</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                  Faturou: sua conta e faturação em um só lugar
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed drop-shadow-lg">
                  Receba pagamentos, emita faturas e organize suas finanças sem complicação. 
                  Para freelancers e trabalhadores independentes em Portugal e Brasil.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600"
                  required
                />
                <input
                  type="tel"
                  placeholder="WhatsApp (opcional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Quero testar grátis
                </button>
              </form>

              <div className="flex items-center space-x-4 text-sm text-gray-200">
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Grátis por 3 dias</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Sem cartão de crédito</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">Dashboard</h3>
                    <Bell className="w-5 h-5 text-gray-300" />
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
                    <p className="text-sm opacity-90">Saldo disponível</p>
                    <p className="text-2xl font-bold">€ 2.847,50</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-3">
                      <p className="text-xs text-green-300">Receitas</p>
                      <p className="font-semibold text-green-200">€ 3.200</p>
                    </div>
                    <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-lg p-3">
                      <p className="text-xs text-red-300">Despesas</p>
                      <p className="font-semibold text-red-200">€ 352,50</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Faturas emitidas</span>
                      <span className="font-medium text-white">12</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Próximo prazo fiscal</span>
                      <span className="font-medium text-orange-300">15 dias</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos flutuantes */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplifique sua vida financeira com ferramentas profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Conta digital</h3>
              <p className="text-gray-600">
                Receba pagamentos direto no app, saldo disponível e cartão virtual.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Faturação automática</h3>
              <p className="text-gray-600">
                Emita faturas e recibos adaptados ao Brasil (MEI/Simples) e Portugal (Recibo Verde / Isento IVA).
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Controle financeiro + alertas</h3>
              <p className="text-gray-600">
                Visualize receitas, despesas e prazos fiscais sem perder tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Como funciona
            </h2>
            <p className="text-xl text-gray-600">
              3 passos simples para começar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Crie sua conta</h3>
              <p className="text-gray-600">
                Cadastro rápido em 30 segundos com seus dados básicos
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Gere faturas</h3>
              <p className="text-gray-600">
                Crie faturas ou cobre clientes via link/QR Code
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Receba e controle</h3>
              <p className="text-gray-600">
                Pagamento direto na conta + exporte relatórios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visão Geral do Aplicativo - Wireframes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Visão Geral do Aplicativo
            </h2>
            <p className="text-xl text-gray-600">
              Conheça as principais funcionalidades do Faturou 2.0
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cadastro Rápido e Seguro</h3>
              <p className="text-gray-600">
                Comece em apenas três etapas. Coletamos apenas os dados essenciais para emitir seus documentos fiscais (Nome, NIF/CPF e regime de faturação). A barra de progresso garante que você saiba sempre onde está.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Controle Financeiro Completo</h3>
              <p className="text-gray-600">
                Acompanhe receitas e despesas em gráficos simples. Visualize seu saldo atual e o potencial de cash advance (adiantamento de recebíveis) em widgets de destaque. Alertas visuais indicam prazos e faturas em atraso.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Emissão de Faturas em Minutos</h3>
              <p className="text-gray-600">
                Crie faturas, recibos e notas fiscais com apenas alguns cliques. Selecione o modelo fiscal (MEI, Simples Nacional, Recibo Verde, Isento IVA) e exporte para PDF com a identidade visual do seu projeto.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Recebimento Sem Burocracia</h3>
              <p className="text-gray-600">
                Gere links de cobrança e QR Codes exclusivos para clientes. Acompanhe o histórico de transações em tempo real e filtre por status (pendente, pago, atrasado) para nunca perder um recebimento.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Nunca Mais Perca um Prazo</h3>
              <p className="text-gray-600">
                Receba lembretes fiscais importantes (datas de impostos) e notificações instantâneas de novos pagamentos. Tudo via push notification no app, garantindo que você esteja sempre em dia com o fisco e o fluxo de caixa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Gestão de Contratos Simples</h3>
              <p className="text-gray-600">
                Utilize modelos pré-configurados para gerar contratos básicos de serviço. Armazene e organize todos os seus documentos importantes dentro do Faturou 2.0 para acesso rápido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fluxo do Usuário */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Fluxo do Usuário: Do Cadastro ao Recebimento
            </h2>
            <p className="text-xl text-gray-600">
              Veja como é simples usar o Faturou em 6 etapas
            </p>
          </div>

          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold relative z-10">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Cadastro / Onboarding</h3>
                <p className="text-sm text-gray-600">
                  Criação de conta em 30s.
                </p>
              </div>

              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                <p className="text-sm text-gray-600">
                  Visão geral imediata de finanças e alertas.
                </p>
              </div>

              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Criar Fatura</h3>
                <p className="text-sm text-gray-600">
                  Geração de documento fiscal conforme seu regime.
                </p>
              </div>

              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Enviar Cobrança</h3>
                <p className="text-sm text-gray-600">
                  Envio via link, QR Code ou e-mail.
                </p>
              </div>

              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Receber Pagamento</h3>
                <p className="text-sm text-gray-600">
                  Dinheiro na sua conta digital Faturou.
                </p>
              </div>

              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold relative z-10">
                  6
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Alertas / Notificações</h3>
                <p className="text-sm text-gray-600">
                  Confirmação de recebimento e lembretes fiscais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Roadmap Faturou 2.0
            </h2>
            <p className="text-xl text-gray-600">
              Próximos 6 meses de desenvolvimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 space-y-4 border-l-4 border-blue-500">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Mês 1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Multi-moeda e Dashboard</h3>
              <p className="text-gray-600">
                Lançamento de Multi-moeda e aprimoramento do Dashboard de performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 space-y-4 border-l-4 border-purple-500">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Mês 2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Pagamentos Recorrentes</h3>
              <p className="text-gray-600">
                Implementação de Pagamentos Recorrentes e melhoria nos Links de Cobrança.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 space-y-4 border-l-4 border-green-500">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-green-600" />
                <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Mês 3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Cash Advance Inteligente</h3>
              <p className="text-gray-600">
                Lançamento do Cash Advance Inteligente para adiantamento de faturas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 space-y-4 border-l-4 border-orange-500">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-orange-600" />
                <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">Mês 4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Integração Fiscal</h3>
              <p className="text-gray-600">
                Integração Fiscal Automatizada para envio direto de dados ao órgão regulador.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-6 space-y-4 border-l-4 border-yellow-500">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-yellow-600" />
                <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">Mês 5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Gestão de Projetos</h3>
              <p className="text-gray-600">
                Funcionalidades de Gestão de Projetos e relatórios de rentabilidade detalhados.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-6 space-y-4 border-l-4 border-cyan-500">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">Mês 6</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">IA e Gamificação</h3>
              <p className="text-gray-600">
                Gamificação e integração de Inteligência Artificial para sugestões financeiras personalizadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              O que nossos usuários dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-lg">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Faturou simplificou minha vida como freelancer! Tudo num só lugar e sem burocracia."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  J
                </div>
                <div>
                  <p className="font-semibold text-gray-900">João</p>
                  <p className="text-sm text-gray-600">Designer freelance</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-lg">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Agora posso controlar meus recibos e saldo sem me preocupar com impostos."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria</p>
                  <p className="text-sm text-gray-600">Tradutora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Pronto para simplificar suas finanças?
            </h2>
            <p className="text-xl text-blue-100">
              Junte-se a milhares de freelancers que já escolheram o Faturou
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:ring-opacity-50"
                required
              />
              <input
                type="tel"
                placeholder="WhatsApp para early access"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Comece grátis agora</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="flex items-center justify-center space-x-6 text-blue-100 text-sm">
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4" />
                <span>3 dias grátis</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4" />
                <span>Cancele quando quiser</span>
              </div>
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
                Sua conta e faturação em um só lugar
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Conta digital</li>
                <li>Faturação</li>
                <li>Relatórios</li>
                <li>Preços</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Central de ajuda</li>
                <li>Contato</li>
                <li>Status</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Cookies</li>
                <li>Segurança</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Faturou. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}