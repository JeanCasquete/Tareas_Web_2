const { clientes, gastos } = require('./Datos.js');


//Funcion normmal de busqueda
function buscarClientePorId(id) {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].ID === id) {
      return clientes[i];
    }
  }
  throw new Error(`El cliente con ID ${id} no pudo ser encontrado`);
}

function buscarGastoPorId(id) {
  for (let i = 0; i < gastos.length; i++) {
    if (gastos[i].ID === id) {
      return gastos[i];
    }
  }
  throw new Error(`El gasto con ID ${id} no pudo ser encontrado`);
}




// Definir función para buscar un cliente por ID con callback
function buscarClientePorIdcallback(id, callback) {
  const cliente = clientes.find(cliente => cliente.ID === id);
  if (!cliente) {
    const error = new Error();
    error.message = `El cliente con ID ${id} no pudo ser encontrado`;
    return callback(error, null);
  }
  return callback(null, cliente);
}

// Definir función para buscar un gasto por ID callback
function buscarGastoPorIdcallback(id, callback) {
  const gasto = gastos.find(gasto => gasto.ID === id);
  if (!gasto) {
    const error = new Error();
    error.message = `El gasto con ID ${id} no pudo ser encontrado`;
    return callback(error, null);
  }
  return callback(null, gasto);
}



// Definir función para buscar un cliente por ID con promise
  function buscarClientePorIdPromise(id) {
    return new Promise((resolve, reject) => {
      const cliente = clientes.find(cliente => cliente.ID === id);
      if (!cliente) {
        const error = new Error();
        error.message = `No se encontró el cliente con ID ${id}`;
        reject(error);
      }
      resolve(cliente);
    });
  }

// Definir función para buscar un gasto por ID con promise  
  function buscarGastoPorIdPromise(id) {
    return new Promise((resolve, reject) => {
      const gasto = gastos.find(gasto => gasto.ID === id);
      if (!gasto) {
        const error = new Error();
        error.message = `No se encontró el gasto con ID ${id}`;
        reject(error);
      }
      resolve(gasto);
    });
  }
  
 // Definir función para buscar un cliente por ID con AsyncAwait
   const buscarClientePorIdAsync = async (id) => {
    const cliente = clientes.find(cliente => cliente.ID === id);
    if (!cliente) {
      throw new Error(`No se encontró el cliente con ID ${id}`);
    }
    return cliente;
  };

 // Definir función para buscar un gasto por cliente por ID con AsyncAwait
  const buscarGastoPorIdClienteAsync = async (idCliente) => {
    const gasto = gastos.find(gasto => gasto.ID_Cliente === idCliente);
    if (!gasto) {
      throw new Error(`No se encontró el gasto asociado al cliente con ID ${idCliente}`);
    }
    return gasto;
  };
  
  //Exportamos las funcioness
  module.exports= { buscarClientePorId, buscarGastoPorId,buscarClientePorIdcallback,buscarGastoPorIdcallback, buscarGastoPorIdPromise, buscarClientePorIdPromise, buscarClientePorIdAsync, buscarGastoPorIdClienteAsync };
