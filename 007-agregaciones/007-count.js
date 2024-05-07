db.productos.aggregate(
    [
        {$count:"nombre"}
    ]
);