db.clientes.updateOne(
    {nombre:'Javier'},
    {$set:
        {email:"javih@gmail.com"}
    }
)