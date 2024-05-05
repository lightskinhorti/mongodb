db.clientes.updateMany(
    {email:'juan@gmail.com'},
    {$set:
        {telefono:"2222222222"}
    }
)