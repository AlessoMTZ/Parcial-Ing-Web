const {Pedido} = require("../models");


const pedidoController = {

   obtenerPedido: async(req,res)=>{
         
    try{
        const pedidos = await pedido.findAll();
        res.json(pedidos);

    }
    catch(error){
        console.log(error);
        res.status(500).json({msg: "hubo un error al leer los pedidos"})
    }
   },

    crearPedido: async(req, res)=>{
        try{
            const {cliente_id, total, propina, metodo_pago}= req.body;

            const totalPropina = total + (total * 0.10);

            const nuevoPedido = await Pedido.create({
                cliente_id,
                total,
                propina,
                metodo_pago,
                total_propina: totalPropina
                
            })
            res.json(nuevoPedido)
        }
        catch(error){
            console.log(error);
            res.status(500).json({mmsg: "hubo un error al crear el pedido"})
        }
       

    },

    actualizarPedido: async(req, res) =>{
        try{
            const {id}  =req.params;
            const {cliente_id, total, propina, metodo_pago, total_propina} = req.body;
            const pedidoID = await pedido.findByPk(id);

            if(!pedido){
                
                res.status(404).json({msg: "Pedido no encontrado"})
            }

            const pedidoActualizado  = await pedidoID.update({

                cliente_id, 
                total,
                propina,
                metodo_pago,
                total_propina
            }    
            )
            res.json(pedidoActualizado)

        }
        catch(error){
            console.log(error);
            res.status(500).json({mg: "hubo un error al actualizar el pedido"})

        }

    }
}




module.exports = pedidoController