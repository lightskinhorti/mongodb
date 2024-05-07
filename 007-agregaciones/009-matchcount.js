db.productos.aggregate(
    [
        {$match:{nombre:"producto 1 "}},
        {$count:"nombre"}
        
    ]
);