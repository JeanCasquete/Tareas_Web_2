const mongoose =  require('mongoose')

const connecionURL="mongodb+srv://yinrodriguez71:suXGBDNcQIRLoYYK@cluster0.s5yokim.mongodb.net/pagos";


        // definición de cliente, 
        const clienteSchema = new mongoose.Schema({
            id: String,
            nombre: String,
            apellido: String,
            identificacion: String
          });
          
        const Cliente = mongoose.model("Cliente", clienteSchema);
  
       //creación del modelo para concepto
      //concepto contendra una refrencia con cliente.
      const conceptoSchema = new mongoose.Schema({
        idcliente: {
          type: mongoose.Types.ObjectId,
          ref: "Cliente"
        },
        producto: String,
        precio: String,
        descripcion: String
      });
      
      const Concepto = mongoose.model("Concepto", conceptoSchema);

               //creación del modelo para gasto
      //concepto contendra una refencia con cliente y concepto
const gastoSchema = new mongoose.Schema({
  id: String,
  idcliente: {
    type: mongoose.Types.ObjectId,
    ref: "Cliente"
  },
  idconcepto: {
    type: mongoose.Types.ObjectId,
    ref: "Concepto"
  },
  fecha: String,
  hora: String,
  valor: Number
});

const Gasto = mongoose.model("Gasto", gastoSchema);



const añadirDatos = async ()=>{
    try {

        const estadoDeLaConexion =  await mongoose.connect(connecionURL)

        const newclient = new Cliente({id: "2",nombre: "Jin",apellido: "Perez",identificacion: "1314683010"});
        const newconcep = new Concepto({ idcliente:newclient._id ,producto: "ROUTERS",precio: "2000",descripcion: "negro mate",});

      //Guarda los datos de concepto y cliente en la base de datos
        const savecliente = await newclient.save();
        const saveconcepto = await newconcep.save();
    
       const gasto1 =  new Gasto({id:"1",idcliente: savecliente._id,idconcepto: saveconcepto._id,fecha:"14 de abril 2010",hora: "15:30",
       valor:130})

        const savegasto =  await gasto1.save();

         //Mostrar los gastos, clientes y conceptos
         const ResultCliente = await Cliente.find({})
         const ResultConcepto = await Concepto.find({});
         const ResultGastos = await Gasto.find({});

         
         //TODOS LOS CICLOS
         console.log("--MOSTRAR CLIENTE POR MEDIANTE FOR--")

         for (let index = 0; index < ResultCliente.length; index++) {
             const element = ResultCliente[index];
             console.log(element)
         }

        console.log("--MOSTRAR CONCEPTO POR MEDIANTE FOREACH--")
        ResultConcepto.forEach(element => {
            console.log(element)
        });

        console.log("--MOSTRAR GASTOS POR MEDIANTE FOR-OF--")
        for (const iterator of ResultGastos) {
            console.log(iterator)
        }
     
    } catch (error) {
        console.log(error);   
    }
}

const actualizarGasto = async (id, actualizacion) => {
  try {
    await mongoose.connect(connecionURL);  
    const resultado = await Gasto.findByIdAndUpdate(id, actualizacion, { new: true });
    console.log('Gasto Actualizado correctamente');
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}



const eliminarGasto = async (id) => {
  try {
    await mongoose.connect(connecionURL);  
    const resultado = await Gasto.findByIdAndDelete(id);
    console.log(' Gasto Eliminado correctamente');
  } catch (error) {
    console.log(error);
  }
}
  


  //Ejecutar las funciones 
  
  añadirDatos();
  actualizarGasto("644c485b5c63e73699db2a3a", { hora: "23:00",valor: 420 });
  
  //USAR PARA ELIMINAR UN GASTO 
 // eliminarGasto("644c4454aec7d0abbad8953c")



