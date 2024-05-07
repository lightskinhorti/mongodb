db.productos.aggregate(
    [
        {$limit:1}
    ]
);