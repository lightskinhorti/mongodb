db.productos.aggregate(
    [ //fase 1 de la agregacion
        {$group:{_id:"$precio"}},
    //fase 2 de la agregacion
        {$limit:1}
    ]
);