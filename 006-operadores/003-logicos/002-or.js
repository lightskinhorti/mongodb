db.productos.find(
    {
        $or: [
            {
                precio:{$gt:45}
            },
            {
                nombre:"producto 1 "
            }
        ]
    }
);