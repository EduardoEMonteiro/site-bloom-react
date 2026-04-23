export interface ServiceData {
  slug: string
  name: string
  shortName: string
  keyword: string
  description: string
  longDescription: string
  howItWorks: string
  forWhom: string
  duration: string
  faqs: { question: string; answer: string }[]
}

export const services: ServiceData[] = [
  {
    slug: 'coloracao-sao-joao-del-rei',
    name: 'Coloração em São João del-Rei',
    shortName: 'Coloração',
    keyword: 'coloração em São João del-Rei',
    description:
      'Coloração capilar em São João del-Rei para renovar a cor, cobrir brancos ou mudar o visual com avaliação do fio antes do procedimento.',
    longDescription:
      'A coloração pode cobrir fios brancos, devolver brilho, mudar o tom ou corrigir uma cor que não ficou como você queria. No Bloom, em São João del-Rei, a Tamires avalia a cor atual, o histórico químico e a saúde do cabelo antes de definir a fórmula.',
    howItWorks:
      'A conversa começa pelo que você deseja e pelo que seu cabelo permite no momento. Depois disso, a Tamires define a mistura, o tempo de ação e o cuidado final para entregar uma cor bonita sem tratar todos os cabelos como se fossem iguais.',
    forWhom:
      'Indicado para quem quer cobrir brancos, escurecer, clarear levemente, tonalizar ou mudar a cor com mais segurança. Também é uma boa opção para quem já passou por química e precisa de um plano mais cuidadoso.',
    duration: '2 a 4 horas',
    faqs: [
      {
        question: 'Preciso fazer avaliação antes da coloração?',
        answer:
          'Para mudanças maiores ou cabelo com química anterior, sim. A avaliação ajuda a evitar manchas, quebra e expectativas fora do que o fio suporta.',
      },
      {
        question: 'A coloração cobre fios brancos?',
        answer:
          'Sim. A fórmula é escolhida conforme a quantidade de brancos, o tom desejado e o efeito que você prefere: mais natural, mais uniforme ou com reflexo.',
      },
      {
        question: 'Coloração resseca o cabelo?',
        answer:
          'Pode ressecar quando feita sem diagnóstico ou sem cuidado depois. Por isso o atendimento inclui orientação de manutenção e tratamento conforme a necessidade do fio.',
      },
      {
        question: 'De quanto em quanto tempo preciso retocar?',
        answer:
          'Depende do crescimento da raiz, da quantidade de brancos e da cor escolhida. Em muitos casos, o retorno fica entre 4 e 8 semanas.',
      },
    ],
  },
  {
    slug: 'luzes-e-mechas-sao-joao-del-rei',
    name: 'Luzes e Mechas em São João del-Rei',
    shortName: 'Luzes e Mechas',
    keyword: 'luzes e mechas em São João del-Rei',
    description:
      'Luzes e mechas em São João del-Rei para iluminar o cabelo com avaliação do fio, escolha da técnica e cuidado no pós-clareamento.',
    longDescription:
      'Luzes e mechas criam luminosidade, movimento e contraste no cabelo. No Bloom, a Tamires avalia a base atual, a resistência do fio e o resultado desejado para escolher entre técnicas como mechas, balayage, babylights ou iluminação mais marcada.',
    howItWorks:
      'Antes do clareamento, é feita uma análise do cabelo. Durante o procedimento, o tempo de ação é acompanhado de perto. Depois, o fio recebe tonalização e tratamento para devolver toque, brilho e resistência.',
    forWhom:
      'Indicado para quem quer iluminar sem mudar tudo de uma vez, clarear aos poucos ou construir um loiro com mais naturalidade. Em cabelos sensibilizados, pode ser necessário preparar o fio antes.',
    duration: '3 a 5 horas',
    faqs: [
      {
        question: 'Qual a diferença entre luzes, mechas e balayage?',
        answer:
          'A diferença está no desenho, na marcação e no efeito final. Na avaliação, a Tamires indica a técnica mais coerente com o resultado que você quer e com o estado do fio.',
      },
      {
        question: 'Posso fazer mechas em cabelo tingido?',
        answer:
          'Em muitos casos sim, mas precisa avaliar. Cabelo tingido pode abrir cor de forma irregular e às vezes precisa de um plano em etapas.',
      },
      {
        question: 'As mechas estragam o cabelo?',
        answer:
          'Clareamento sempre exige cuidado. A diferença está em respeitar o limite do fio, tratar depois e orientar a manutenção em casa.',
      },
      {
        question: 'Quanto tempo dura o resultado?',
        answer:
          'Depende da técnica e do contraste com a raiz. Alguns efeitos crescem de forma suave e permitem manutenção mais espaçada.',
      },
    ],
  },
  {
    slug: 'cabelo-ruivo-sao-joao-del-rei',
    name: 'Cabelo Ruivo em São João del-Rei',
    shortName: 'Ruivos',
    keyword: 'cabelo ruivo em São João del-Rei',
    description:
      'Cabelo ruivo em São João del-Rei com escolha de tom, avaliação do fundo de clareamento e orientação para manter a cor bonita.',
    longDescription:
      'O ruivo chama atenção, mas também pede escolha certa de tom e manutenção. No Bloom, a Tamires considera sua base atual, seu tom de pele, o histórico químico e sua rotina para construir um ruivo possível de manter.',
    howItWorks:
      'A avaliação define se o cabelo precisa clarear, tonalizar ou apenas receber uma nova fórmula. O objetivo é chegar em um ruivo bonito sem ignorar a saúde do fio e sem prometer um resultado que o cabelo não sustenta naquele dia.',
    forWhom:
      'Indicado para quem quer ficar ruiva pela primeira vez, ajustar um ruivo que desbotou, sair de uma cor escura ou encontrar um tom mais natural, acobreado, intenso ou criativo.',
    duration: '2 a 4 horas',
    faqs: [
      {
        question: 'Ruivo desbota rápido?',
        answer:
          'Ruivos costumam desbotar mais que outras cores. A fórmula, o tratamento e os cuidados em casa fazem muita diferença na durabilidade.',
      },
      {
        question: 'Preciso descolorir para ficar ruiva?',
        answer:
          'Depende da sua cor atual e do ruivo desejado. Cabelos muito escuros ou com coloração anterior podem precisar de clareamento ou de um processo em etapas.',
      },
      {
        question: 'Qual tom de ruivo combina comigo?',
        answer:
          'Isso é definido na avaliação, olhando referências, tom de pele, base do cabelo e manutenção que você quer ter.',
      },
      {
        question: 'Como mantenho o ruivo bonito?',
        answer:
          'Com shampoo adequado, tratamento, proteção contra desbotamento e retoques planejados. A Tamires orienta a rotina depois do atendimento.',
      },
    ],
  },
  {
    slug: 'loiro-sao-joao-del-rei',
    name: 'Loiro em São João del-Rei',
    shortName: 'Loiros',
    keyword: 'loiro em São João del-Rei',
    description:
      'Loiro em São João del-Rei com avaliação do cabelo antes do clareamento e plano para preservar brilho, resistência e toque.',
    longDescription:
      'Ficar loira exige mais do que escolher uma foto de referência. O resultado depende da cor atual, de químicas antigas, da espessura do fio e do quanto o cabelo aguenta clarear com segurança.',
    howItWorks:
      'A Tamires avalia se o loiro pode ser feito em uma sessão ou se precisa de construção gradual. Depois do clareamento, a tonalização e o tratamento entram para ajustar o tom e cuidar da fibra.',
    forWhom:
      'Indicado para quem quer loiro claro, mel, bege, perolado, platinado ou iluminado. Também serve para quem quer corrigir um loiro manchado ou amarelado.',
    duration: '3 a 6 horas',
    faqs: [
      {
        question: 'Consigo ficar platinada em uma sessão?',
        answer:
          'Só dá para saber avaliando o cabelo. Em muitos casos, o caminho mais bonito e seguro é clarear em etapas.',
      },
      {
        question: 'Como tirar o amarelo do loiro?',
        answer:
          'Com tonalização correta e manutenção adequada. O tom certo depende do fundo de clareamento e do efeito que você quer.',
      },
      {
        question: 'Loiro quebra o cabelo?',
        answer:
          'Pode quebrar se o fio já estiver fragilizado ou se o clareamento passar do limite. Por isso a avaliação e o tratamento são tão importantes.',
      },
      {
        question: 'Com que frequência retoco o loiro?',
        answer:
          'Depende da técnica. Mechas esfumadas podem ter manutenção mais espaçada; loiros de raiz exigem retorno mais próximo.',
      },
    ],
  },
  {
    slug: 'hidratacao-capilar-sao-joao-del-rei',
    name: 'Hidratação Capilar em São João del-Rei',
    shortName: 'Hidratação Capilar',
    keyword: 'hidratação capilar em São João del-Rei',
    description:
      'Tratamento capilar em São João del-Rei para fios ressecados, porosos ou sensibilizados por coloração, mechas e química.',
    longDescription:
      'Nem todo cabelo precisa da mesma máscara. Alguns fios precisam de hidratação, outros de nutrição, reconstrução ou uma combinação desses cuidados. No Bloom, o tratamento é escolhido depois de observar o toque, a porosidade e o histórico do cabelo.',
    howItWorks:
      'A Tamires identifica a necessidade do fio e aplica o tratamento adequado. Quando necessário, também orienta um cronograma simples para continuar cuidando em casa sem excesso de produto ou promessa milagrosa.',
    forWhom:
      'Indicado para cabelo opaco, áspero, elástico, quebradiço, ressecado ou que passou recentemente por coloração, progressiva, luzes ou descoloração.',
    duration: '1 a 2 horas',
    faqs: [
      {
        question: 'Meu cabelo precisa de hidratação ou reconstrução?',
        answer:
          'Só olhando o fio dá para diferenciar com segurança. Hidratação repõe água, nutrição repõe lipídios e reconstrução ajuda na resistência.',
      },
      {
        question: 'Posso tratar no mesmo dia da cor?',
        answer:
          'Muitas vezes sim. Em procedimentos químicos, o tratamento pode fazer parte do acabamento ou ser indicado antes/depois, conforme o estado do fio.',
      },
      {
        question: 'De quanto em quanto tempo devo tratar?',
        answer:
          'Depende do cabelo e da rotina. Fios com química geralmente precisam de acompanhamento mais constante.',
      },
    ],
  },
  {
    slug: 'escova-progressiva-sao-joao-del-rei',
    name: 'Escova Progressiva em São João del-Rei',
    shortName: 'Escova Progressiva',
    keyword: 'escova progressiva em São João del-Rei',
    description:
      'Escova progressiva em São João del-Rei para reduzir volume e frizz com avaliação de compatibilidade para cabelos coloridos ou com química.',
    longDescription:
      'A escova progressiva reduz volume, frizz e facilita a rotina. Antes de fazer, é importante entender se o produto é compatível com a cor, o clareamento ou outras químicas que o cabelo já recebeu.',
    howItWorks:
      'A Tamires avalia o fio, aplica o produto de forma controlada e finaliza com selagem. O cuidado principal é respeitar a condição do cabelo e orientar a manutenção depois do procedimento.',
    forWhom:
      'Indicado para quem busca mais praticidade, menos volume e menos frizz. Em cabelos loiros, coloridos ou sensibilizados, a avaliação é indispensável.',
    duration: '2 a 3 horas',
    faqs: [
      {
        question: 'Progressiva combina com cabelo colorido?',
        answer:
          'Pode combinar, mas precisa avaliar compatibilidade. Alguns cabelos precisam de intervalo ou tratamento antes.',
      },
      {
        question: 'Quanto tempo dura a progressiva?',
        answer:
          'Em média de 3 a 6 meses, variando conforme o cabelo, a frequência de lavagem e os cuidados em casa.',
      },
      {
        question: 'Quando posso lavar depois?',
        answer:
          'A orientação depende do produto usado e do estado do fio. A Tamires explica no final do atendimento.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
