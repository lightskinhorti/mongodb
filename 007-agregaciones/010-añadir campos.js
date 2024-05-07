db.productos.aggregate(
    [
        {
        $addFields: {
            IVA: {
                $sum: {
                    $map: {
                        input: "$productos",
                        as: "producto",
                        in: {$multiply: ["$$producto.precio", 0.21]}

                    }
                }
            }
        }
    }
    ]
);