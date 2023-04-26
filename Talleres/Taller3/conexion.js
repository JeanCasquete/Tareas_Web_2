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



const pedirPago = async ()=>{
    try {

        const estadoDeLaConexion =  await mongoose.connect(connecionURL)
        const newclient = new Cliente({//Creando atributos para cliente
          id: "1",
          nombre: "Jin",
          apellido: "Rodriguez",
          identificacion: "1314683010"
      });
      const newconcep = new Concepto({ //Crear atributos para concepto
          idcliente:newclient._id ,
          producto: "Laptop msi",
          precio: "2000",
          descripcion: "negro mate",
      });

      //Guarda los datos de concepto y cliente en la base de datos
      const savecliente = await newclient.save();
      const saveconcepto = await newconcep.save();
    
     
        const gasto1 =  new Gasto({//Creando los atributos para Gasto
            id:"1",
            idcliente: savecliente._id,
            idconcepto: saveconcepto._id,
            fecha:"14 de abril 2020",
            hora: "15:30",
            valor:130
        })
        const savegasto =  await gasto1.save();
         console.log(gasto1._doc);

         //Mostrar los clientes y los gastos
         const clienteEncontrado = await Cliente.find({})
         console.log(clienteEncontrado);
         const gastosEncontrados = await Gasto.find({});
         console.log(gastosEncontrados);



        
    } catch (error) {
        console.log(error);   
    }
}
//pedirPago();

const actualizarCliente = async (id, actualizacion) => {
    try {
        await mongoose.connect(connecionURL);  
      const resultado = await Cliente.findByIdAndUpdate(id, actualizacion, { new: true });
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  }

  actualizarCliente("64499b7de4f01d37bd0bbc3b", { nombre: "Juan", apellido: "Pérez" });



