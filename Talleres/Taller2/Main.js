const { buscarClientePorId, buscarGastoPorId, buscarGastoPorIdPromise, buscarClientePorIdPromise, buscarClientePorIdAsync, buscarGastoPorIdClienteAsync, buscarGastoPorIdcallback, buscarClientePorIdcallback } = require('./Funciones.js');

  // Ejemplo de uso de las busqueda con una funcion normal
  try {
    const gasto = buscarGastoPorId('G001');
    console.log(gasto);
  
    const cliente = buscarClientePorId(gasto.ID_Cliente);
    console.log(cliente);
  } catch (error) {
    console.log(error.message);
  }



  // Ejemplo de uso de las funciones de búsqueda con callback
buscarGastoPorIdcallback('G002', (error, gasto) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(gasto);

  buscarClientePorIdcallback(gasto.ID_Cliente, (error, cliente) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log(cliente);
  });
});

 // Ejemplo de uso de las funciones de búsqueda con prom
buscarGastoPorIdPromise('G003')
.then(gasto => {
  console.log(gasto);
  return buscarClientePorIdPromise(gasto.ID_Cliente);
})
.then(cliente => {
  console.log(cliente);
})
.catch(error => {
  console.log(error);
});


 // Ejemplo de uso de las funciones de búsqueda con AsyncAwait
  (async () => {
    try {
      const cliente = await buscarClientePorIdAsync('C003');
      console.log(cliente);
      const gasto = await buscarGastoPorIdClienteAsync(cliente.ID);
      console.log(gasto);
    } catch (error) {
      console.error(error);
    }
  })();