db.productos.find(
    {
        $and: [
            {
                precio:{$gt:45}
            },
            {
                nombre:"producto 4 "
            }
        ]
    }
);