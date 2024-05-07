db.productos.aggregate(
    [
        {$sort:{"precio":-1}}
    ]
)