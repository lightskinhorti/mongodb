db.productos.find(
    {
        precio: { $not: { $gt: 30 } }
    }
    
);
