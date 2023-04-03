// Importamos los datos y las funciones
const { clientes, conceptos, gastos } = require('./datos.js');
const { vincularGastosClientes, vincularGastosConceptos, mostrarGastosPorCliente, mostrarGastosPorConcepto, mostrarDetallesDeGastos } = require('./funciones.js');

// Ejecutamos las funciones para vincular los gastos y los clientes/conceptos
vincularGastosClientes(clientes, gastos);
vincularGastosConceptos(conceptos, gastos);

// Mostramos los gastos de cada cliente
mostrarGastosPorCliente(clientes, gastos);

// Mostramos los gastos de cada concepto
mostrarGastosPorConcepto(conceptos, gastos);

// Mostramos los detalles de cada gasto
mostrarDetallesDeGastos(clientes, conceptos, gastos);
