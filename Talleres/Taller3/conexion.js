
const mongoose =  require('mongoose')

const connecionURL="mongodb+srv://yinrodriguez71:suXGBDNcQIRLoYYK@cluster0.s5yokim.mongodb.net/pagos";
(async ()=>{
    try {
        ///conectar a la base de datos
        const estadoDeLaConexion =  await mongoose.connect(connecionURL)


        // definición de cliente, 

        const cliente = mongoose.model("cliente", { 
          id: String,
          nombre: String,
          apellido: String,
          identificacion: String
      });

     //creación del modelo para concepto
    //concepto contendra una refrencia con cliente.
    const concepto = mongoose.model("concepto", {
      idcliente: {
          type: mongoose.Types.ObjectId,
          ref: "cliente"
      },
      producto: String,
      precio: String,
      descripcion: String
  });

       //creación del modelo para gasto
    //concepto contendra una refrencia con cliente y concepto.
        const Gasto =mongoose.model("Gastos",{
            id:String,
            idcliente: { type: mongoose.Types.ObjectId, ref:"cliente" },
            idconcepto: {type: mongoose.Types.ObjectId, ref:"concepto"},
            fecha:String,
            hora:String,
            valor:Number
        });

      

        
    } catch (error) {
        console.log(error);   
    }
})()

