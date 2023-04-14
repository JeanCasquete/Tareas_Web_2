//Tarea de Casquete Rodriguez Jean Pier WEB 2 ''A''
// Definir objeto Cliente
const Cliente = {
    ID: '',
    Nombre: '',
    Identificacion: ''
  };
  

  // Definir objeto Gasto
  const Gasto = {
    ID: '',
    ID_Cliente: '',
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
   
  const gastos = [
    {
      ID: 'G001',
      ID_Cliente: 'C001',
      Fecha: '01/01/2023',
      Hora: '12:00pm',
      Valor: '50000'
    },
    {
      ID: 'G002',
      ID_Cliente: 'C001',
      Fecha: '02/01/2023',
      Hora: '10:00am',
      Valor: '20000'
    },
    {
      ID: 'G003',
      ID_Cliente: 'C002',
      Fecha: '01/01/2023',
      Hora: '10:00am',
      Valor: '100000'
    },
    {
      ID: 'G004',
      ID_Cliente: 'C003',
      Fecha: '03/01/2023',
      Hora: '8:00pm',
      Valor: '50000'
    },
    {
      ID: 'G005',
      ID_Cliente: 'C004',
      Fecha: '02/01/2023',
      Hora: '4:00pm',
      Valor: '25000'
    }
  ];

  module.exports = {
    Cliente,
    Gasto,
    clientes,
    gastos
  }