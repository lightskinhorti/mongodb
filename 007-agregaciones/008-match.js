db.productos.aggregate(
    [
        {$match:{nombre:"producto 1 "}}
    ]
);