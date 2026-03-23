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
    description: 'Coloração capilar profissional em São João del-Rei com técnica de colorimetria avançada. Bloom por Tamires Sousa — referência em cores vibrantes e duradouras.',
    longDescription:
      'A coloração capilar é o processo de alterar ou intensificar a cor natural dos fios utilizando pigmentos e oxidantes. No Bloom por Tamires Sousa, em São João del-Rei, cada coloração é precedida de uma análise colorimétrica completa para garantir o resultado ideal sem comprometer a saúde da fibra.',
    howItWorks:
      'Tamires realiza uma consultoria prévia para avaliar o histórico químico do cabelo, escolher a tonalidade ideal e definir o protocolo de aplicação. O processo inclui preparo dos fios, aplicação técnica e cronograma capilar pós-química para preservar a cor e a saúde.',
    forWhom:
      'Indicado para quem deseja mudar de cor, cobrir fios brancos ou intensificar a tonalidade atual. Atende todos os tipos de cabelo — liso, ondulado, cacheado e crespo — com protocolos adaptados para cada textura.',
    duration: '2 a 4 horas',
    faqs: [
      {
        question: 'Quanto custa coloração em São João del-Rei?',
        answer:
          'O valor varia conforme o comprimento do cabelo e a complexidade da cor. Entre em contato pelo WhatsApp para receber um orçamento personalizado no Bloom por Tamires Sousa.',
      },
      {
        question: 'Preciso de avaliação antes de fazer coloração no Bloom?',
        answer:
          'Sim. Para colorações complexas, Tamires realiza uma consultoria prévia para avaliar a saúde do fio e o histórico químico, garantindo o melhor resultado.',
      },
      {
        question: 'A coloração danifica o cabelo?',
        answer:
          'Com técnica correta e produtos de alta performance, o dano é mínimo. No Bloom, utilizamos colorimetria Schwarzkopf e cronograma capilar pós-química para preservar a integridade dos fios.',
      },
      {
        question: 'Com que frequência devo retocar a coloração?',
        answer:
          'Em média a cada 4 a 6 semanas, dependendo da velocidade de crescimento e da tonalidade escolhida. Tamires orienta cada cliente individualmente.',
      },
    ],
  },
  {
    slug: 'luzes-e-mechas-sao-joao-del-rei',
    name: 'Luzes e Mechas em São João del-Rei',
    shortName: 'Luzes e Mechas',
    keyword: 'luzes e mechas em São João del-Rei',
    description: 'Luzes e mechas profissionais em São João del-Rei. Técnicas californianas, babylights e balayage com preservação total da saúde capilar. Bloom por Tamires Sousa.',
    longDescription:
      'Luzes e mechas são técnicas de clareamento seletivo que criam dimensão, movimento e luminosidade nos cabelos. No Bloom por Tamires Sousa, em São João del-Rei, as técnicas utilizadas incluem balayage, babylights, mechas californianas e iluminação global, sempre com foco na saúde da fibra capilar.',
    howItWorks:
      'Tamires avalia o tom natural e o histórico do cabelo para definir a técnica mais adequada. A aplicação é feita com precisão artesanal, respeitando o tempo de processamento ideal. Após o clareamento, é realizado o tratamento de reconstrução e tonalização para garantir brilho e durabilidade.',
    forWhom:
      'Indicado para quem deseja clarear o cabelo de forma natural e gradual, criar efeito iluminado ou fazer a transição para loiro. Funciona em cabelos virgens e com histórico químico, desde que avaliados previamente.',
    duration: '3 a 5 horas',
    faqs: [
      {
        question: 'Quanto tempo leva para fazer luzes em São João del-Rei?',
        answer:
          'No Bloom por Tamires Sousa, as luzes levam em média 3 a 5 horas dependendo do comprimento, espessura do cabelo e da técnica escolhida.',
      },
      {
        question: 'Qual a diferença entre balayage e mechas tradicionais?',
        answer:
          'O balayage é aplicado à mão de forma degradê, criando um efeito mais natural e esfumado. As mechas tradicionais são aplicadas com papel alumínio para um resultado mais uniforme e contrastado.',
      },
      {
        question: 'Posso fazer luzes em cabelo tingido?',
        answer:
          'Depende do histórico químico. Tamires avalia cada caso individualmente para garantir segurança e resultado. Em alguns casos, é necessário um preparo prévio dos fios.',
      },
      {
        question: 'Como manter as luzes por mais tempo?',
        answer:
          'Use shampoo desamarelador, evite exposição solar sem proteção e siga o cronograma capilar indicado por Tamires. A manutenção correta prolonga a vida das luzes por até 3 meses.',
      },
    ],
  },
  {
    slug: 'cabelo-ruivo-sao-joao-del-rei',
    name: 'Cabelo Ruivo em São João del-Rei',
    shortName: 'Ruivos',
    keyword: 'cabelo ruivo em São João del-Rei',
    description: 'Especialista em cabelos ruivos em São João del-Rei. Tonalidades acobreadas, ruivo intenso e ruivo fantasia com máxima durabilidade. Bloom por Tamires Sousa.',
    longDescription:
      'O cabelo ruivo é uma das colorações mais técnicas e exigentes da colorimetria. No Bloom por Tamires Sousa, em São João del-Rei, Tamires é referência regional em ruivos — desde o acobreado natural até o ruivo intenso e as variações fantasia. A técnica de pigmentação seletiva garante tonalidades vibrantes com durabilidade superior.',
    howItWorks:
      'O processo começa com análise do tom base e do histórico químico. Tamires seleciona os pigmentos ideais e aplica a coloração em camadas para criar profundidade e reflexos. O acabamento inclui tonalização e tratamento de brilho para potencializar a vivacidade da cor.',
    forWhom:
      'Indicado para quem deseja se tornar ruiva pela primeira vez, intensificar um ruivo existente ou explorar variações como ruivo acobreado, ruivo escuro, ruivo fantasia ou ruivo com mechas. Funciona em todos os tipos de cabelo.',
    duration: '2 a 4 horas',
    faqs: [
      {
        question: 'Onde fazer cabelo ruivo em São João del-Rei?',
        answer:
          'O Bloom por Tamires Sousa é a referência em ruivos em São João del-Rei. Tamires é especialista em pigmentação seletiva para ruivos vibrantes e duradouros, atendendo na Rua Antônio Rocha, 55, Centro.',
      },
      {
        question: 'O ruivo desbota rápido?',
        answer:
          'Ruivos tendem a desbotar mais rápido que outras cores, mas com a técnica correta e os cuidados indicados por Tamires, a durabilidade pode chegar a 6 semanas com brilho preservado.',
      },
      {
        question: 'Preciso descolorir para ficar ruiva?',
        answer:
          'Depende do tom natural do cabelo. Em cabelos escuros, pode ser necessária uma pré-clareamento. Tamires avalia cada caso para indicar o caminho mais seguro.',
      },
      {
        question: 'Quais produtos usar para manter o ruivo?',
        answer:
          'Shampoo específico para coloridos, máscara pigmentante e protetor solar capilar. Tamires indica os produtos ideais para cada tipo de ruivo após o atendimento.',
      },
    ],
  },
  {
    slug: 'loiro-sao-joao-del-rei',
    name: 'Loiro em São João del-Rei',
    shortName: 'Loiros',
    keyword: 'loiro em São João del-Rei',
    description: 'Especialista em loiros saudáveis em São João del-Rei. Loiro platinado, mel, acinzentado e natural com preservação total da fibra capilar. Bloom por Tamires Sousa.',
    longDescription:
      'Fazer loiro com saúde é uma das maiores especialidades do Bloom por Tamires Sousa em São João del-Rei. Tamires domina todas as variações — loiro platinado, loiro mel, loiro acinzentado, loiro natural e loiro com mechas — sempre priorizando a integridade da fibra capilar durante o processo de clareamento.',
    howItWorks:
      'O processo de loiro saudável começa com avaliação detalhada do cabelo. Tamires define o protocolo de clareamento progressivo ou em sessão única conforme o estado do fio. Após o clareamento, realiza tonalização para neutralizar amarelos e tratamento de reconstrução para devolver resistência e brilho.',
    forWhom:
      'Indicado para quem deseja clarear o cabelo de forma segura, seja para um loiro natural, platinado ou com mechas. Atende cabelos virgens e com histórico químico, sempre com avaliação prévia obrigatória.',
    duration: '3 a 6 horas',
    faqs: [
      {
        question: 'É possível fazer loiro platinado em uma sessão em São João del-Rei?',
        answer:
          'Depende do estado e do tom natural do cabelo. Tamires avalia cada caso e pode indicar um processo progressivo para garantir saúde e resultado. O objetivo é sempre o loiro mais claro possível sem comprometer os fios.',
      },
      {
        question: 'Como tirar o amarelo do loiro?',
        answer:
          'Com tonalização violeta ou cinza após o clareamento, e uso de shampoo desamarelador em casa. Tamires realiza a tonalização no salão e indica os produtos certos para manutenção.',
      },
      {
        question: 'Loiro danifica muito o cabelo?',
        answer:
          'O clareamento é o processo mais agressivo da colorimetria, mas com técnica correta, produtos de qualidade e cronograma capilar pós-química, o dano é controlado. No Bloom, a saúde do fio é prioridade.',
      },
      {
        question: 'Com que frequência devo retocar o loiro?',
        answer:
          'A raiz cresce em média 1 cm por mês. O retoque é recomendado a cada 4 a 6 semanas para loiros mais claros. Tamires orienta o intervalo ideal para cada cliente.',
      },
    ],
  },
  {
    slug: 'hidratacao-capilar-sao-joao-del-rei',
    name: 'Hidratação Capilar em São João del-Rei',
    shortName: 'Hidratação Capilar',
    keyword: 'hidratação capilar em São João del-Rei',
    description: 'Hidratação capilar profissional em São João del-Rei. Tratamentos de reconstrução, nutrição e hidratação para cabelos quimicamente tratados. Bloom por Tamires Sousa.',
    longDescription:
      'A hidratação capilar profissional é essencial para quem realiza processos químicos como coloração, mechas e descoloração. No Bloom por Tamires Sousa, em São João del-Rei, os tratamentos são personalizados conforme o diagnóstico capilar — hidratação, nutrição ou reconstrução — para restaurar a saúde, o brilho e a resistência dos fios.',
    howItWorks:
      'Tamires realiza um diagnóstico capilar para identificar a necessidade do fio (hidratação, nutrição ou reconstrução). O tratamento é aplicado com técnica de termoativação ou oclusão, potencializando a absorção dos ativos. O cronograma capilar é montado individualmente para manutenção em casa.',
    forWhom:
      'Indicado para cabelos ressecados, quebradiços, com pontas duplas ou que passaram por processos químicos recentes. Essencial como manutenção pós-coloração, pós-mechas e pós-descoloração.',
    duration: '1 a 2 horas',
    faqs: [
      {
        question: 'Qual a diferença entre hidratação, nutrição e reconstrução?',
        answer:
          'Hidratação repõe água nos fios, nutrição repõe lipídios (óleos) e reconstrução repõe proteínas. Tamires diagnostica qual o cabelo precisa para montar o tratamento ideal.',
      },
      {
        question: 'Com que frequência devo fazer hidratação capilar?',
        answer:
          'Para cabelos quimicamente tratados, recomenda-se a cada 15 dias. Tamires monta um cronograma capilar personalizado para cada cliente do Bloom.',
      },
      {
        question: 'A hidratação capilar profissional é diferente da caseira?',
        answer:
          'Sim. Os produtos profissionais têm concentração de ativos muito superior e a técnica de aplicação potencializa os resultados. O tratamento no Bloom é incomparável ao caseiro.',
      },
    ],
  },
  {
    slug: 'escova-progressiva-sao-joao-del-rei',
    name: 'Escova Progressiva em São João del-Rei',
    shortName: 'Escova Progressiva',
    keyword: 'escova progressiva em São João del-Rei',
    description: 'Escova progressiva profissional em São João del-Rei. Alisamento com redução de volume, brilho intenso e durabilidade. Bloom por Tamires Sousa.',
    longDescription:
      'A escova progressiva é um tratamento que reduz o volume, elimina o frizz e alisa os fios com durabilidade de 3 a 6 meses. No Bloom por Tamires Sousa, em São João del-Rei, o procedimento é realizado com produtos de alta performance que respeitam a estrutura capilar e entregam brilho intenso e toque sedoso.',
    howItWorks:
      'O cabelo é lavado, seco e recebe a aplicação do produto ativo. Após o tempo de processamento, Tamires realiza a selagem com chapinha em temperatura controlada, camada por camada, para garantir uniformidade e durabilidade máxima.',
    forWhom:
      'Indicado para quem tem cabelo com muito volume, frizz ou ondulação indesejada e deseja praticidade no dia a dia. Funciona em todos os tipos de cabelo, com adaptações para cabelos coloridos e com histórico químico.',
    duration: '2 a 3 horas',
    faqs: [
      {
        question: 'Quanto tempo dura a escova progressiva?',
        answer:
          'Em média de 3 a 6 meses, dependendo do tipo de cabelo, da frequência de lavagem e dos cuidados em casa. Tamires orienta os produtos ideais para prolongar o resultado.',
      },
      {
        question: 'Posso fazer progressiva em cabelo colorido?',
        answer:
          'Sim, mas é necessário avaliar o estado do fio. Tamires verifica a compatibilidade entre os processos para garantir segurança e resultado.',
      },
      {
        question: 'Quando posso lavar o cabelo após a progressiva?',
        answer:
          'O tempo de espera varia conforme o produto utilizado. Tamires orienta cada cliente individualmente após o procedimento.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
