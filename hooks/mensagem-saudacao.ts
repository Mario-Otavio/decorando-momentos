export function useMensagemSaudacao() {
  const obterMensagemSaudacao = (mensagemBase: string = "Gostaria de informações sobre a locação de decorações temáticas"): string => {
    const agora = new Date()
    const hora = agora.getHours()
    
    let saudacao: string
    
    // Manhã: 5h às 11h59
    if (hora >= 5 && hora < 12) {
      saudacao = "Olá, bom dia!"
    }
    // Tarde: 12h às 17h59
    else if (hora >= 12 && hora < 18) {
      saudacao = "Olá, boa tarde!"
    }
    // Noite: 18h às 4h59
    else {
      saudacao = "Olá, boa noite!"
    }
    
    return `${saudacao} ${mensagemBase}`
  }

  /**
   * Retorna a mensagem formatada e codificada para URL do WhatsApp
   * @param mensagemBase Mensagem base que será adicionada após a saudação
   * @returns Mensagem codificada para uso em URLs
   */
  const obterMensagemWhatsApp = (mensagemBase?: string): string => {
    const mensagem = obterMensagemSaudacao(mensagemBase)
    return encodeURIComponent(mensagem)
  }

  /**
   * Retorna o período do dia atual
   * @returns 'manha' | 'tarde' | 'noite'
   */
  const obterPeriodoDia = (): 'manha' | 'tarde' | 'noite' => {
    const agora = new Date()
    const hora = agora.getHours()
    
    if (hora >= 5 && hora < 12) {
      return 'manha'
    } else if (hora >= 12 && hora < 18) {
      return 'tarde'
    } else {
      return 'noite'
    }
  }

  return {
    obterMensagemSaudacao,
    obterMensagemWhatsApp,
    obterPeriodoDia,
  }
}
