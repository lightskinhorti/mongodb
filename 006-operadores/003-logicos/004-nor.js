db.productos.find(
    {
        $nor: [
            {
                precio:{$gt:45}
            },
            {
                nombre:"producto 1 "
            }
        ]
    }
);