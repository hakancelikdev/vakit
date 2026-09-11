/**
 * Portuguese (Português, pt-PT) legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Esta página é uma tradução disponibilizada por conveniência; em caso de divergência com a versão inglesa, prevalece a versão inglesa.",

  privacy: {
    meta: {
      title: "Vakit — Política de Privacidade",
      description:
        "Política de privacidade do Vakit. Não é preciso conta nem são recolhidas coordenadas GPS; os registos de khatm e os marcadores sincronizam apenas através do teu próprio iCloud da Apple.",
    },
    title: "Política de <em>Privacidade</em>",
    desc: "Última atualização: 10 de setembro de 2026 — Versão 1.7.4\n\nO Vakit respeita a tua privacidade. Não é preciso conta e não recolhemos informação de identificação pessoal (nome, e-mail, telefone, fotografias, contactos). Os horários das orações, a direção da Qibla e os lembretes são calculados inteiramente no teu dispositivo. O teu progresso de khatm, os marcadores, as metas e as mesquitas favoritas ficam no teu dispositivo e sincronizam apenas dentro da tua própria conta iCloud da Apple — nunca são enviados para os nossos servidores. A tua lista de dhikr é a exceção: é enviada para os nossos servidores juntamente com as estatísticas de utilização, para podermos melhorar a app (ver secção 1). Tudo o que é enviado para os nossos servidores está ligado a um código de utilizador permanente que não contém informação identificativa.",
    sections: [
      {
        t: "1. Dados que recolhemos",
        b: "Dados que NÃO recolhemos:\n• Nome, e-mail, telefone, fotografias, microfone, câmara, contactos\n• Coordenadas GPS (latitude/longitude) – nunca são enviadas para os nossos servidores\n• Credenciais de conta (o Vakit não tem sistema de contas)\n\nDados guardados no teu dispositivo e sincronizados no teu espaço privado do iCloud:\n• Registos de dhikr, progresso de khatm, metas de adoração\n• Marcadores do Alcorão e dos hadiths, histórico de leitura\n• Contadores de suras concluídas, estado das secções de hadith\n• Os teus registos de orações e jejuns em atraso\n• As tuas marcas de dias de dispensa\n• Mesquitas favoritas\n• Preferências da app (idioma, método de cálculo, definições de notificações, tema)\n\nDados enviados para os nossos servidores — ligados a um código de utilizador permanente que não contém informação identificativa (um pseudónimo, não anónimo):\n• Localização regional (país, cidade, concelho) – NÃO coordenadas GPS\n• Modelo do dispositivo, versão do iOS/macOS, versão da app, versão do watchOS\n• Preferências da app (idioma, método de cálculo, tema, escola jurídica, tipo de calendário, o género que escolheste para o guia da oração, as orações para as quais queres notificações e as tuas preferências de leitura do Alcorão e dos hadiths — tamanho da letra, tradução, recitador, grafia). A tua posição de leitura e o teu histórico NÃO estão incluídos.\n• Estatísticas de utilização das funcionalidades (visualizações de ecrãs, utilização de funcionalidades). Mostram que uma secção foi usada — por exemplo, que foi marcado um dia de dispensa ou feito um registo de oração em atraso. O registo em si (a lista dos teus registos) não é enviado. O que é enviado é o facto de a ação ter acontecido e alguns números — por exemplo, a oração que marcaste, as tuas contagens diárias de adoração, a tua qada restante, o número de um versículo ou hadith que guardaste; como qualquer estatística, inclui uma marca temporal.\n• O texto das pesquisas que fazes na app (pesquisa no Alcorão, hadith, dhikr, nomes de Allah, mesquitas e definições) – recolhido para vermos com que palavras não encontras o que procuras e melhorarmos a pesquisa; são guardados no máximo 80 caracteres.\n• A tua lista de dhikr – nome, tipo, categoria e contadores de cada dhikr; incluindo o texto árabe, a descrição e a fonte que introduzes nos dhikr que acrescentas tu mesmo. São recolhidos para vermos que dhikr são usados e com que frequência, para podermos melhorar a secção de dhikr.\n• Relatórios de falhas (através do Firebase Crashlytics, sem dados pessoais)\n\nComo este código de utilizador sincroniza através do porta-chaves do iCloud, os dispositivos com o mesmo Apple ID contam como um só utilizador e o código mantém-se mesmo que apagues e reinstales a app. O código não contém dados de identidade; os teus dados nunca são vendidos nem usados para publicidade.",
      },
      {
        t: "2. Como usamos os teus dados",
        b: "• Cálculo dos horários das orações – A localização é processada localmente no teu dispositivo e o cálculo é feito offline com a biblioteca Adhan.\n• Direção da Qibla – A localização e o rumo da bússola são combinados no dispositivo.\n• Nome do local – Para mostrar o nome do sítio onde estás, as tuas coordenadas são enviadas para o serviço de nomes de locais da Apple; não para os servidores do Vakit.\n• Lembretes de adoração – As notificações locais são agendadas no dispositivo pelo iOS e pelo macOS.\n• Anúncios – Os anúncios de dias abençoados e de novas versões são difundidos pelo Firebase Cloud Messaging; não há segmentação por pessoa.\n• Sermão de sexta-feira – O sermão da semana é descarregado da página pública da Diyanet; o pedido não leva informação identificativa.\n• Mesquitas perto – A tua localização é enviada ao Apple MapKit (procura de mesquitas, distância, direções); não para os servidores do Vakit.\n• Dados do utilizador (dhikr, khatm, marcadores) – Guardados localmente com o Core Data e sincronizados no teu espaço privado do iCloud da Apple. Destes, só a lista de dhikr é também enviada para o servidor do Vakit (ver secção 1).\n• Desenvolvimento e melhoria – As estatísticas de utilização (sem coordenadas GPS) são usadas para acompanhar o desempenho e detetar erros.",
      },
      {
        t: "3. Sincronização com o iCloud (CloudKit)",
        b: "O Vakit sincroniza os teus registos de adoração (dhikr, khatm, marcadores, metas, mesquitas favoritas) entre os teus dispositivos através do CloudKit da Apple. Estes dados:\n• Ficam apenas na base de dados privada do teu próprio Apple ID.\n• Estão encriptados na infraestrutura da Apple; nem nós, nem os funcionários da Apple, nem terceiros lhes conseguimos aceder.\n• Sincronizam automaticamente entre iPhone, iPad, Mac e Apple Watch.\n• Ficam apenas no teu dispositivo se desativares o iCloud.\n• São removidos de todos os teus dispositivos quando usas «Apagar a conta» ou removes os dados do Vakit do iCloud.\n\nMais informações: apple.com/legal/privacy",
      },
      {
        t: "4. Dados no Apple Watch e no Mac",
        b: "O Vakit inclui uma app complementar para watchOS 9+. No Watch:\n• A permissão de localização é dada separadamente no Watch; se o Vakit estiver instalado no iPhone, a localização é recebida através do WatchConnectivity, caso contrário usa-se o GPS do Watch.\n• O sensor da bússola é processado no dispositivo para a Qibla; nunca é enviado para um servidor.\n• Não lemos dados de saúde (HealthKit), de atividade nem de ritmo cardíaco.\n• As notificações são espelhadas a partir do iPhone através do espelhamento de notificações do iOS; se o Watch funcionar sozinho, agenda as suas próprias notificações locais.\n\nNo Mac (macOS 13+):\n• A app para Mac é a mesma app do iPhone; os teus dados continuam guardados no dispositivo e sincronizados no teu próprio iCloud privado.\n• Os Mac não têm bússola, por isso não há bússola da Qibla em tempo real; a direção e a distância são calculadas a partir da tua localização e mostradas em texto.\n• No Mac, a localização vem dos serviços de localização baseados em Wi-Fi e não do GPS, e também nunca é enviada para os nossos servidores.\n• A permissão e as definições de notificações são próprias de cada dispositivo; alterá-las no Mac não afeta o teu iPhone.",
      },
      {
        t: "5. Serviços de terceiros",
        b: "O Vakit usa os seguintes serviços para fins limitados. Nenhum está ligado à tua identidade pessoal:\n\n• Apple iCloud / CloudKit – Sincronização dos dados do utilizador (no teu espaço privado do iCloud).\n• Apple MapKit – Mesquitas perto, mapa e direções (a localização é enviada à Apple).\n• Firebase Crashlytics (Google) – Relatórios de falhas sem dados de identidade (stack trace, modelo do dispositivo, versão do iOS/macOS).\n• Firebase Remote Config (Google) – Sinalizadores de funcionalidades e lançamento gradual (não lê dados do dispositivo).\n• Google AdMob – Apenas para mostrar anúncios de vídeo com recompensa no «modo Sadaka» opcional. Detalhes abaixo.\n• Apple StoreKit 2 – Donativos opcionais (compra dentro da app). Os dados de pagamento são processados pela Apple; o Vakit nunca vê dados de cartão.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Anúncios de dias abençoados e de novas versões. São difundidos por tema; não há segmentação por pessoa.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Texto e áudio do sermão de sexta-feira.\n• Servidor do Vakit (Alemanha, Frankfurt) – Estatísticas de utilização e a tua lista de dhikr, ligadas a um código de utilizador que não contém informação identificativa. Os teus registos de khatm, marcadores, metas e leitura nunca são enviados para lá.\n\nNota: o Firebase Analytics NÃO é usado; o identificador de publicidade (IDFA) não é recolhido.\n\nPolítica de privacidade da Google: policies.google.com/privacy",
      },
      {
        t: "6. Publicidade (modo Sadaka)",
        b: "O Vakit não mostra publicidade. Só no «modo Sadaka» opcional, se o utilizador o iniciar expressamente para apoiar o programador, é mostrado um anúncio de vídeo com recompensa através do Google AdMob. Nesse caso:\n• O anúncio é servido pelo Google AdMob; é sempre não personalizado e classificado para o público em geral (G). O Vakit nunca mostra o pedido de App Tracking Transparency e o identificador de publicidade (IDFA) não é partilhado.\n• Quando o ecrã «Mantém o Vakit vivo» abre, o SDK de publicidade é iniciado e pré-carrega um anúncio; nenhum anúncio é mostrado a menos que escolhas vê-lo.\n• O modo Sadaka pode ser desativado à distância através do Firebase Remote Config; também podes simplesmente optar por nunca o usar.\n\nPrivacidade do Google AdMob: support.google.com/admob/answer/6128543",
      },
      {
        t: "7. Donativos (compra dentro da app)",
        b: "O Vakit é gratuito. Para apoiares o programador, podes fazer donativos opcionais em escalões de ₺10 a ₺10.000 no ecrã «Mantém o Vakit vivo». Estas transações:\n• São processadas pelo Apple StoreKit 2; os dados de pagamento (cartão, IBAN, Apple Pay) são enviados apenas à Apple.\n• O Vakit nunca vê nem guarda o teu método de pagamento ou os teus dados financeiros.\n• Os reembolsos só podem ser pedidos através da Apple (reportaproblem.apple.com).",
      },
      {
        t: "8. Conservação dos dados",
        b: "• Dados locais no dispositivo – Guardados até apagares a app.\n• Dados no iCloud – Guardados até removeres o espaço do Vakit do iCloud ou desativares o teu Apple ID.\n• Estatísticas de utilização no servidor – Conservadas durante 180 dias (cerca de 6 meses) e depois apagadas automaticamente. Os textos das pesquisas seguem o mesmo prazo.\n• Relatórios de falhas (Crashlytics) – Conservados durante 90 dias e depois apagados.\n• Registos do servidor – Rodados no prazo de 30 dias.",
      },
      {
        t: "9. Os teus direitos (KVKK / RGPD)",
        b: "Ao abrigo da KVKK turca e do RGPD da UE, tens o direito de:\n• Saber que dados são recolhidos sobre ti\n• Opor-te ao tratamento de dados (podes revogar as permissões de Localização, Notificações ou Movimento em Definições → Vakit no iOS, ou em Definições do Sistema → Vakit no Mac)\n• Pedir a eliminação dos teus dados: Definições → Apagar a conta remove tudo no teu dispositivo e no iCloud. Para apagarmos as estatísticas de utilização no nosso servidor, escreve para hakancelikdev@gmail.com; o teu pedido é cumprido no prazo máximo de 30 dias.\n• Portabilidade dos dados\n• Apresentar queixa junto da autoridade da KVKK\n\nEnvia os teus pedidos para hakancelikdev@gmail.com; respondemos no prazo máximo de 30 dias.",
      },
      {
        t: "10. Privacidade das crianças",
        b: "O Vakit é disponibilizado na App Store com classificação etária 4+, mas não recolhemos conscientemente dados pessoais de utilizadores com menos de 13 anos. Se achares que uma criança com menos de 13 anos forneceu dados, escreve para hakancelikdev@gmail.com e apagaremos esses dados de imediato.",
      },
      {
        t: "11. Segurança",
        b: "Todos os dados locais ficam no teu dispositivo, protegidos pela sandbox do iOS/macOS e pela encriptação do dispositivo. Os dados no iCloud estão encriptados na infraestrutura da Apple. Os dados enviados para o nosso servidor são transmitidos por HTTPS/TLS e guardados numa base de dados encriptada; não contêm informação de identidade. O Vakit faz também deteção de jailbreak, depurador e injeção de código, para proteção adicional durante operações sensíveis.",
      },
      {
        t: "12. Alterações à política",
        b: "Esta política pode ser atualizada à medida que a app evolui. Nas alterações substanciais, a data de «Última atualização» desta página é renovada e é mostrado um aviso dentro da app. Recomendamos que revejas esta política periodicamente.",
      },
      {
        t: "13. Contacto",
        b: "Para questões, pedidos ou comentários sobre privacidade: hakancelikdev@gmail.com\n\nResponsável pelo tratamento: Hakan Çelik (Turquia)",
      },
    ],
  },

  terms: {
    meta: {
      title: "Vakit — Termos de Utilização",
      description:
        "Termos de utilização do Vakit. De utilização gratuita, com donativos opcionais (compras dentro da app); todas as funcionalidades principais são gratuitas.",
    },
    title: "Termos de <em>Utilização</em>",
    desc: "Última atualização: 10 de setembro de 2026 — Versão 1.7.4\n\nAo descarregares, instalares ou usares a nossa app, aceitas ficar vinculado a estes Termos. Lê estes Termos com atenção.",
    sections: [
      {
        t: "1. Aceitação dos Termos",
        b: "Ao acederes e usares o Vakit, aceitas ficar vinculado aos termos e condições deste acordo. Se não concordares, não uses este serviço.",
      },
      {
        t: "2. Descrição do serviço",
        b: "O Vakit é uma app gratuita com ferramentas de adoração como horários das orações, direção da Qibla, Alcorão, hadith, contador de dhikr, guias da oração e da ablução, registo de khatm e de adoração, sermão de sexta-feira, mesquitas perto e um calendário de dias religiosos. Funciona em iOS 16.4+ e macOS 13+, e inclui uma app complementar para Apple Watch com watchOS 9+.",
      },
      {
        t: "3. Utilização gratuita e donativos opcionais",
        b: "Todas as funcionalidades principais do Vakit são gratuitas. A app não mostra publicidade (exceto os anúncios de vídeo com recompensa do «modo Sadaka» opcional, que o próprio utilizador inicia).\n\nOs utilizadores que queiram apoiar o programador podem fazer donativos opcionais em escalões de ₺10 a ₺10.000 no ecrã «Mantém o Vakit vivo». Estes donativos:\n• São processados através do Apple In-App Purchase (StoreKit 2).\n• São produtos consumíveis; os donativos não desbloqueiam funcionalidades adicionais nem subscrições.\n• Os pedidos de reembolso só podem ser feitos através da Apple (reportaproblem.apple.com).\n• Aplicam-se os termos de pagamento da Apple e as regras da App Store.",
      },
      {
        t: "4. Modo Sadaka (anúncio com recompensa)",
        b: "O «modo Sadaka» é uma funcionalidade opcional em que o utilizador vê voluntariamente um curto anúncio de vídeo com recompensa para apoiar o programador. O anúncio é servido através do Google AdMob. Usar esta funcionalidade não é obrigatório; o programador também a pode desativar à distância através do Firebase Remote Config.",
      },
      {
        t: "5. App complementar para Apple Watch",
        b: "O Vakit inclui uma app complementar para watchOS 9+ com horários das orações, bússola da Qibla e complicações. A utilização da app do Watch está sujeita a estes Termos. Devido às limitações do hardware do Apple Watch (precisão do GPS, desvio da bússola, bateria), os resultados no Watch podem diferir dos do iPhone.",
      },
      {
        t: "6. Responsabilidades do utilizador",
        b: "És responsável por:\n• Escolher a localização e o método de cálculo corretos\n• Usar a app de acordo com as leis aplicáveis e as regras da App Store\n• Não tentar fazer engenharia inversa, piratear ou usar indevidamente a app\n• Manter o teu dispositivo e a tua conta iCloud seguros (os teus dados são sincronizados entre dispositivos através do iCloud da Apple)",
      },
      {
        t: "7. Serviços de terceiros",
        b: "O Vakit usa os seguintes serviços de terceiros e está sujeito aos termos de cada um:\n• Apple iCloud / CloudKit (sincronização dos dados do utilizador)\n• Apple MapKit (mesquitas perto, mapas)\n• Firebase Crashlytics, Remote Config e Cloud Messaging (Google)\n• Google AdMob (apenas para o modo Sadaka)\n• Apple StoreKit 2 (donativos)\n• Diyanet (texto e áudio do sermão de sexta-feira)\n• Biblioteca Adhan (cálculo dos horários das orações, código aberto)\n• SwiftAA (cálculo astronómico, código aberto)\n\nOs termos e as políticas de privacidade destes serviços pertencem aos respetivos fornecedores.",
      },
      {
        t: "8. Propriedade intelectual",
        b: "O código e o design da app pertencem a Hakan Çelik; a app é de código aberto, sob a licença MIT.\n\nO Vakit usa conteúdos e bibliotecas de terceiros com respeito:\n• Texto árabe do Alcorão: domínio público\n• Tradução turca: Diyanet İşleri Başkanlığı Meali\n• Coleções de hadith: derivadas de compilações de domínio público\n• Áudio da recitação do Alcorão: as autorizações e licenças dos artistas estão listadas em AUDIO-LICENSES.md\n• Adhan, SwiftAA, GRDB.swift: as respetivas licenças de código aberto\n\nA app usa o áudio do adhan e das recitações estritamente para fins de adoração religiosa.",
      },
      {
        t: "9. Limitação de responsabilidade",
        b: "A app é fornecida «tal como está». Os cálculos dos horários das orações e da Qibla procuram ser exatos, mas:\n• Podem ocorrer desvios devido à precisão da localização, ao sinal GPS, à calibração da bússola e ao método de cálculo escolhido.\n• Para decisões importantes de adoração, recomenda-se a confirmação junto das autoridades religiosas locais.\n• Os sensores do Apple Watch (bússola magnética, GPS) podem acrescentar desvio adicional.\n• Pode ocorrer perda de dados devido a problemas de sincronização do iCloud, falhas de rede ou perda do dispositivo; faz cópias de segurança dos dados importantes.\n\nO programador não é responsável por danos diretos ou indiretos decorrentes da utilização da app.",
      },
      {
        t: "10. Eliminação da conta e dos dados",
        b: "O Vakit não exige conta. Apagar a app remove todos os dados locais. Para remover os dados sincronizados pelo iCloud: Definições > Apagar a conta, ou, no iOS, Definições > Apple ID > iCloud > Vakit > Apagar dados (no Mac, Definições do Sistema > Conta Apple > iCloud). Se quiseres que as estatísticas de utilização guardadas no nosso servidor sejam apagadas, escreve para hakancelikdev@gmail.com; o teu pedido é cumprido no prazo máximo de 30 dias.",
      },
      {
        t: "11. Alterações aos Termos",
        b: "Estes Termos podem ser atualizados à medida que a app evolui e para refletir requisitos legais. Nas alterações substanciais, a data de «Última atualização» é renovada e é mostrado um aviso dentro da app. Continuar a usar a app significa aceitar os Termos atualizados.",
      },
      {
        t: "12. Lei aplicável e foro competente",
        b: "Estes Termos regem-se pelas leis da República da Turquia. Os litígios serão resolvidos nos tribunais turcos; em matéria de direitos do consumidor, são competentes os tribunais de consumo locais. Se residires na União Europeia, os teus direitos de consumidor locais ficam salvaguardados.",
      },
      {
        t: "13. Contacto",
        b: "Para questões sobre estes Termos: hakancelikdev@gmail.com\n\nProgramador: Hakan Çelik (Turquia)",
      },
    ],
  },

  "ads-policy": {
    meta: {
      title: "Vakit — Política de Publicidade",
      description:
        "Política de publicidade do Vakit, compatível com o halal. Não mostramos anúncios de jogos de azar, álcool, conteúdo para adultos, produtos com juros nem adivinhação.",
    },
    titleBefore: "Política de ",
    titleEm: "Publicidade",
    desc: "Última atualização: 10 de setembro de 2026 — Versão 1.7.4\n\nNuma app islâmica, os anúncios que vês passam a fazer parte do teu momento de adoração. É por isso que o Vakit não mostra publicidade. A única exceção é opcional: um utilizador que queira apoiar a app pode escolher ver um curto anúncio de vídeo com recompensa. Esta página descreve as regras que se aplicam a esses anúncios.",
    sections: [
      {
        t: "1. Onde aparecem anúncios",
        b: "O Vakit não mostra anúncios de banner, intersticiais nem de abertura em nenhum ecrã. O único anúncio é um curto vídeo com recompensa que um utilizador pode escolher ver no ecrã «Mantém o Vakit vivo» («modo Sadaka») para apoiar a app. Nunca és obrigado a usá-lo e nenhuma funcionalidade depende dele.",
      },
      {
        t: "2. Categorias que nunca mostramos",
        b: "Os anúncios das seguintes categorias estão bloqueados na rede de publicidade:\n\n• Jogos de azar, apostas, casino, apostas desportivas, póquer\n• Álcool e produtos de tabaco\n• Conteúdo para adultos, encontros, conteúdo sexual, produtos sexuais\n• Nudez de qualquer tipo\n• Empréstimos com juros, crédito rápido, investimentos com juros\n• Adivinhação, astrologia, videntes, magia, tarot\n• Carne de porco e produtos derivados\n• Esquemas de enriquecimento rápido, armadilhas de marketing multinível (MLM)\n• Propaganda religiosa de outras crenças",
      },
      {
        t: "3. Salvaguardas técnicas",
        b: "As seguintes definições são aplicadas do lado da rede de publicidade (Google AdMob):\n\n• Classificação máxima de conteúdo: G (público em geral).\n• Em Brand Safety > Block Content, todas as categorias acima estão assinaladas.\n• Lista de bloqueio de URL e palavras-chave: anúncios que contenham termos como «casino», «betting», «gambling», «flirt», «dating», «horoscope», «psychic», «tarot» não passam.\n• Os anúncios são sempre não personalizados; o Vakit nunca mostra o pedido de App Tracking Transparency e o identificador de publicidade (IDFA) não é partilhado.",
      },
      {
        t: "4. Se vires um anúncio impróprio",
        b: "Se vires um anúncio que entre em conflito com as tuas sensibilidades religiosas, escreve para hakancelikdev@gmail.com com uma captura de ecrã. Cada denúncia válida é adicionada à lista de bloqueio do AdMob.",
      },
      {
        t: "5. Contacto",
        b: "Para questões, denúncias ou sugestões de categorias: hakancelikdev@gmail.com\n\nProgramador: Hakan Çelik (Turquia)",
      },
    ],
  },
};
