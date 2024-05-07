db.productos.aggregate(
    [
        {$group:{_id:"$precio"}}
    ]
);