export const mock = [
  {
    cartao: '123456',
    cliente: '001467 - ITALITEX',
    nota: '057324',
    emissao: '10/10/2023',
    cor: '23 / S.04 - ROXO 23',
    art: '2090',
    amostraCor: 'rgb(10,500,0)',
    largCru: '1,92',
    largSolicitada: '1,60',
    largRealizada: '0,00',
    gramM2Cru: '87',
    gramSolicitada: '127',
    gramRealizada: '0',
    densidade: '0',
    digitado: '31/10/2023',
    entrada: '31/10/2023',
    divisao: 'CXT',
    material: 'M.FECHADA',
    obs: 'SUJO DE GRAXA C: 834800',
  }
];

export const fluxo = [
  {
    nome: 'INICIO',
    processo: 'RECEBIMENTO',
    info: {
      NF: '057324',
      entrada: '31/10/2023',
      digitado: '31/10/2023',
      dataFim: '30/10/2023',

    }
  },

  {
    nome: 'SEPARAÇÃO',
    processo: 'SEPARAR',
    info:{
      titulo: '',
      dataInicio: '',
      dataFim: '01/05/23 - 10:00:00',
      operador: '',
      largura: '',
      gramatura: ''
    }
  },


  {
    nome: 'BOX (ESTOQUE)',
    processo: '',
    info:{
      titulo: 'BOX A25',
      dataInicio: '',
      dataFim: '01/05/23 - 10:00:00',
      operador: '',
      largura: '',
      gramatura: ''
    }
  },

  {
    nome: 'PREPARAÇÃO',
    processo: 'DESENROLAR',
    info: {
      titulo: 'DESENROLADEIRA 1',
      dataInicio: '04/05/23 - 10:00:00',
      dataFim: '04/05/23 - 10:28:00',
      operador: 'Matheus',
      largura: '',
      gramatura: ''
    }
  },

  {
    nome: 'BOX (PREPARAÇÃO)',
    processo: '',
    info:{
      titulo: 'BOX F09',
      dataInicio: '',
      dataFim: '04/05/23 - 10:30:00',
      operador: '',
      largura: '',
      gramatura: ''
    }
  },

  {
    nome: 'TINGIMENTO',
    processo: 'TING 1 FIBRA',
    info: {
      titulo: 'HT08 - 1001 (PROG)',
      dataInicio: '05/05/23 - 12:00:00',
      dataFim: '05/05/23 - 15:00:00',
      operador: 'JOÃO',
      largura: '',
      gramatura: ''
    }
  },

  {
    nome: 'PRÉ ACABAMENTO',
    processo: 'DESTORCER',
    info: {
      titulo: 'DESTORCEDEIRA 1',
      dataInicio: '05/05/23 - 12:00:00',
      dataFim: '05/05/23 - 15:00:00',
      operador: 'João',
      largura: '1.78(1.80)',
      gramatura: '150 (160)'
    }
  },

  {
    nome: 'BOX (ACABAMENTO)',
    processo: '',
    info:{
      titulo: 'BOX Y5',
      dataInicio: '',
      dataFim: '04/05/23 - 10:30:00',
      operador: '',
      largura: '',
      gramatura: ''
    }
  },

  {
    nome: 'ACABAMENTO',
    processo: 'ACBTO FINAL',
    info: {
      titulo: 'RAMA 1 - (PROG)',
      dataInicio: '05/05/23 - 12:00:00',
      dataFim: '05/05/23 - 15:00:00',
      operador: 'José',
      largura: '1.78(1.80)',
      gramatura: '150 (160)'
    }
  },

  {
    nome: 'EXPEDIÇÃO',
    processo: '',
    info: {
      titulo: 'PESAGEM',
      dataInicio: '',
      dataFim: '05/05/23 - 12:00:00',
      operador: 'José',
      largura: '',
      gramatura: ''
    }
  },

  {
    nome: 'AO CLIENTE',
    info: {

      NF: '057324',
      dataEmissao: '10/10/2023',
      dataFim: '31/10/2023',

    }
  },
];

export const values = [
  {
    numero: '1',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '2',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '3',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '4',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '5',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '6',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '7',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '8',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '9',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '10',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '11',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '12',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '13',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '14',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '15',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '16',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '17',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '18',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '19',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
  {
    numero: '20',
    peça: '908242',
    peso: '14.850',
    larg: '2,00',
    compr: '87,35',
    maq: '01'

  },
];


// {
//   selectedStatus(item.inicio, item.fim) == 'em_processo' && item.operador != '' &&
//   <Text size={12}>
//     {'\n'}
//     Operador: {item.operador}
//     {'\n'}
//     Data de inicio: {item.data + ' ' +item.inicio}
//   </Text>
// }
