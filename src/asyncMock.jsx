const productos = [
    {id: "1", nombre : "Pc Intel C I3", precio: 105000, category:"Computadoras de Escritorios", img:"https://http2.mlstatic.com/D_NQ_NP_851749-MLA31077072812_062019-O.webp", stock: 100, descripcion:"PC I3 3200 MHZ, 8 Gigas ddr3, Disco Solido Ssd 240, GAB ATX 400W 450W, Sistema operativo instalado windown 10"},
    {id: "2", nombre : "Notebook InnJoo Home Voom MAX Super", precio: 125800, category:"Notebooks", img:"https://http2.mlstatic.com/D_NQ_NP_827721-MLA52264149794_112022-O.webp", stock: 100, descripcion:"La Notebook InnJoo Home Voom MAX Super presenta una pantalla de 14 pulgadas con una resolucion de 1920x1080 px de resolución, procesador Intel Celeron de 2 núcleos, disco sólido de 256 GB y placa de video Intel HD"},
    {id: "3", nombre : "Telefono Samsung Galaxy S20 FE", precio: 242450, category:"Telefonos", img:"https://http2.mlstatic.com/D_NQ_NP_737081-MLA52383198353_112022-O.webp", stock: 100, descripcion:"El Telefono Samsung Galaxy S20 FE presenta una pantalla de Super AMOLED de 6.5 pulgadas, Memoria RAM de 6 GB, Memoria interna de 128 GB, Procesador de 8 nucleos y sistema operativo android 10"},
    {id: "4", nombre : "Kit Gamer Noga Teclado Mouse Auricular", precio: 7300, category:"Accesorios", img:"https://http2.mlstatic.com/D_NQ_NP_626288-MLA31512724496_072019-O.webp", stock: 100, descripcion:"Kit que contiene: Teclado y Mouse (2400 dpi) Retroiluminados, Mouse Pad que brinda un óptimo deslizamiento y Auriculares con Micrófono confortablemente acolchados."},
    {id: "5", nombre : "Tablet Gadnic Taurus", precio: 52000, category:"Tablets", img:"https://http2.mlstatic.com/D_NQ_NP_808883-MLA69551291824_052023-O.webp", stock: 100, descripcion:"La Tablet Gadnic Taurus presenta una pantalla de 10,1 pulgadas con resolución de 1280x800px, procesador MTK Quadcore de 1.3 GHZ, 2GB de memoria RAM Samsung DDR3 y Sistema Operativo Android 9.0"},
    {id: "6", nombre : "Tablet Iqual T7w", precio: 21500, category:"Tablets", img:"https://http2.mlstatic.com/D_NQ_NP_802262-MLA50774646390_072022-O.webp", stock: 100, descripcion:"La Tablet Iqual T7w presenta una pantalla de 7 pulgadas con resolucion de 1024x600px, procesador Quad-Core Cortex A7 1.2 GHz, memoria RAM de 1 GB y Sistema Operativo Android 8.0 Oreo"},
    {id: "7", nombre : "Parlante Xinua Rgb", precio: 9790, category:"Accesorios", img:"https://http2.mlstatic.com/D_NQ_NP_665361-MLA48533102685_122021-O.webp", stock: 100, descripcion:"El Parlante Xinua Rgb presenta un sonido claro y preciso, Con efectols de luces Led"},
    {id: "8", nombre : "Telefono Samsung Galaxy A21s", precio: 188110, category:"Telefonos", img:"https://http2.mlstatic.com/D_NQ_NP_845674-MLA45142312038_032021-O.webp", stock: 100, descripcion:"El Telefono Samsung Galaxy A21s presenta una pantalla de 6.5 pulgadas, Memoria RAM de 4 GB, Memoria interna de 128 GB, procesador Exynos 850 de 8 nucleos y sistema operativo android 10"},
    {id: "9", nombre : "Notebook Asus Vivobook 15 X1502", precio: 390100, category:"Notebooks", img:"https://http2.mlstatic.com/D_NQ_NP_921383-MLA52106794407_102022-O.webp", stock: 100, descripcion:"La Notebook Asus Vivobook 15 X1502 presenta una pantalla de 15.6 pulgadas, procesador Intel Core i5 de 12 núcleos, disco sólido de 256 GB  y placa de video Intel Iris Xe Graphics G7 80EUs"},
    {id: "10", nombre : "Pc Intel Core I7 3770", precio: 149000, category:"Computadoras de Escritorios", img:"https://http2.mlstatic.com/D_NQ_NP_710372-MLA31113810925_062019-O.webp", stock: 100, descripcion:"PC I7 Intel 3770, 16 Gigas ddr3, Disco Rigido 1 TERA seagate, GAB ATX 500W, Sistema operativo instalado Windown 10"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductsById = (productosId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productosId))
        }, 500)
    })
}

export const getProductsByCategory = (productosCategory) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === productosCategory))
        }, 500)
    })
}
