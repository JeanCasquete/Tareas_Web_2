//Tarea de Casquete Rodriguez Jean Pier WEB 2 ''A''
// Definir objeto Cliente
const Cliente = {
  ID: '',
  Nombre: '',
  Identificacion: ''
};

// Definir objeto Concepto
const Concepto = {
  ID: '',
  Descripcion: ''
};

// Definir objeto Gasto
const Gasto = {
  ID: '',
  ID_Cliente: '',
  ID_Concepto: '',
  Fecha: '',
  Hora: '',
  Valor: ''
};

// Crear arreglos que almacenan objetos
const clientes = [
  {
    ID: 'C001',
    Nombre: 'Jean Pier',
    Identificacion: '123456789'
  },
  {
    ID: 'C002',
    Nombre: 'Dani Perez',
    Identificacion: '987654321'
  },
  {
    ID: 'C003',
    Nombre: 'Leonel Messi',
    Identificacion: '456789123'
  },
  {
    ID: 'C004',
    Nombre: 'Ana de Armas',
    Identificacion: '789123456'
  },
  {
    ID: 'C005',
    Nombre: 'Roberto Martinez',
    Identificacion: '321654987'
  }
];

const conceptos = [
  {
    ID: 'CO001',
    Descripcion: 'Comida'
  },
  {
    ID: 'CO002',
    Descripcion: 'Transportes'
  },
  {
    ID: 'CO003',
    Descripcion: 'Hospedaje'
  },
  {
    ID: 'CO004',
    Descripcion: 'Entretenimiento'
  },
  {
    ID: 'CO005',
    Descripcion: 'Otros'
  }
];

const gastos = [
  {
    ID: 'G001',
    ID_Cliente: 'C001',
    ID_Concepto: 'CO001',
    Fecha: '01/01/2023',
    Hora: '12:00pm',
    Valor: '50000'
  },
  {
    ID: 'G002',
    ID_Cliente: 'C001',
    ID_Concepto: 'CO002',
    Fecha: '02/01/2023',
    Hora: '10:00am',
    Valor: '20000'
  },
  {
    ID: 'G003',
    ID_Cliente: 'C002',
    ID_Concepto: 'CO003',
    Fecha: '01/01/2023',
    Hora: '10:00am',
    Valor: '100000'
  },
  {
    ID: 'G004',
    ID_Cliente: 'C003',
    ID_Concepto: 'CO004',
    Fecha: '03/01/2023',
    Hora: '8:00pm',
    Valor: '50000'
  },
  {
    ID: 'G005',
    ID_Cliente: 'C004',
    ID_Concepto: 'CO005',
    Fecha: '02/01/2023',
    Hora: '4:00pm',
    Valor: '25000'
  }
];

module.exports = {
  Cliente,
  Concepto,
  Gasto,
  clientes,
  conceptos,
  gastos
}