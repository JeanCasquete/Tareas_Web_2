
const {clientes, conceptos, gastos } = require('./datos.js');

function vincularGastosClientes(clientes, gastos) {
    clientes.forEach(cliente => {
      cliente.Gastos = gastos.filter(gasto => gasto.ID_Cliente === cliente.ID);
    });
  }
  
  function vincularGastosConceptos(conceptos, gastos) {
    conceptos.forEach(concepto => {
      concepto.Gastos = gastos.filter(gasto => gasto.ID_Concepto === concepto.ID);
    });
  }
  
  // Función para mostrar los gastos de cada cliente
  function mostrarGastosPorCliente(clientes, gastos) {
    for (let i = 0; i < clientes.length; i++) {
      console.log(`Gastos de ${clientes[i].Nombre}:`);
  
      clientes[i].Gastos.forEach(gasto => {
        console.log(`${gasto.Fecha} - ${gasto.Hora}: ${gasto.Valor}`);
      });
  
      console.log('\n');
    }
  }
  
  // Función para mostrar los gastos de cada concepto
  function mostrarGastosPorConcepto(conceptos, gastos) {
    conceptos.forEach(concepto => {
      console.log(`Gastos del concepto ${concepto.Descripcion}:`);
  
      concepto.Gastos.forEach(gasto => {
        console.log(`${gasto.Fecha} - ${gasto.Hora}: ${gasto.Valor}`);
      });
  
      console.log('\n');
    });
  }
  
  // Función para mostrar los detalles de cada gasto
  function mostrarDetallesDeGastos(clientes, conceptos, gastos) {
    let i = 0;
  
    while (i < gastos.length) {
      console.log(`Detalle del gasto ${gastos[i].ID}:`);
      console.log(`Cliente: ${clientes.find(cliente => cliente.ID === gastos[i].ID_Cliente).Nombre}`);
      console.log(`Concepto: ${conceptos.find(concepto => concepto.ID === gastos[i].ID_Concepto).Descripcion}`);
      console.log(`Fecha: ${gastos[i].Fecha}`);
      console.log(`Hora: ${gastos[i].Hora}`);
      console.log(`Valor: ${gastos[i].Valor}`);
  
      console.log('\n');
  
      i++;
    }
  }
  
  
  
  vincularGastosClientes(clientes, gastos);
  vincularGastosConceptos(conceptos, gastos);
  
  // Llamada a la función para mostrar los gastos de cada cliente
  mostrarGastosPorCliente(clientes, gastos);
  
  // Llamada a la función para mostrar los gastos de cada concepto
  mostrarGastosPorConcepto(conceptos, gastos);
  
  // Llamada a la función para mostrar los detalles de cada gasto
  mostrarDetallesDeGastos(clientes, conceptos, gastos);
  