db.productos.aggregate(
    [
        {
        $project:{"nombre":1}
        }
    ]
);