// imports de imágenes de productos
import aceite_casaliva_mezcla_1_5l from "./imagenes/productos/aceite_casaliva_mezcla_1.5l.png";
import la_gran_compra_yogur_con_cereales from "./imagenes/productos/la_gran_compra_yogur_con_cereales.png";
import la_gran_compra_yogur_firme_vainilla_120_g from "./imagenes/productos/la_gran_compra_yogur_firme_vainilla_120_g.png";
import la_gran_compra_yogur_firme_frutilla_120_g from "./imagenes/productos/la_gran_compra_yogur_firme_frutilla_120_g.png";

// imports
import logo from "./imagenes/logo.png";
import banner from "./imagenes/banner.png";
import banner_desktop from "./imagenes/banner_desktop.png";
import add_address_imagen from "./imagenes/add_address_form.jpg";

import carrusel1 from "./imagenes/carruselSuperior/1.png";
import carrusel2 from "./imagenes/carruselSuperior/2.png";
import carrusel3 from "./imagenes/carruselSuperior/3.png";

import catalogo1 from "./imagenes/catalogoSemanal/1.png";
import catalogo2 from "./imagenes/catalogoSemanal/2.png";
import catalogo3 from "./imagenes/catalogoSemanal/3.png";
import catalogo4 from "./imagenes/catalogoSemanal/4.png";
import catalogo5 from "./imagenes/catalogoSemanal/5.png";
import catalogo6 from "./imagenes/catalogoSemanal/6.png";

// imports de iconos
import {
  Store,
  Beer,
  Milk,
  Sandwich,
  UtensilsCrossed,
  Cookie,
  Popcorn,
  ShoppingBasket,
  SprayCan,
  Smile,
  Droplet,
  Trash,
  Cigarette,
  Wine,
  Snowflake,
  Truck,
} from "lucide-react";

// 🔹 listas
export const assets = {
  logo,
  banner,
  banner_desktop,
  add_address_imagen,
};

export const imagenesCarrusel = [
  carrusel1,
  carrusel2,
  carrusel3,
  "https://www.coto.com.ar/images/slider/hero-desktop-ddp-2025.jpg",
  "https://www.coto.com.ar/images/slider/hero-desktop-comu-mp-superfinde-310525.jpg",
];

export const catalogoList = [
  catalogo1,
  catalogo2,
  catalogo3,
  catalogo4,
  catalogo5,
  catalogo6,
];

export const categoriasList = [
  {
    categoria: "Almacen",
    path: "almacen",
    imagen: Store,
  },
  {
    categoria: "Bebidas",
    path: "bebidas",
    imagen: Beer,
  },
  {
    categoria: "Lacteos",
    categoriaPath: "lacteos",
    path: "lacteos",
    imagen: Milk,
  },
  {
    categoria: "Fiambres",
    path: "fiambres",
    imagen: Sandwich,
  },
  {
    categoria: "Galletitas",
    path: "galletitas",
    imagen: Cookie,
  },
  {
    categoria: "Snacks",
    path: "snacks",
    imagen: Popcorn,
  },
  {
    categoria: "Panificados",
    path: "panificados",
    imagen: ShoppingBasket,
  },
  {
    categoria: "Limpieza",
    path: "limpieza",
    imagen: SprayCan,
  },
  {
    categoria: "Higiene Personal",
    path: "higiene-personal",
    imagen: Smile,
  },
  {
    categoria: "Perfumería",
    path: "perfumeria",
    imagen: Droplet,
  },
  {
    categoria: "Descartables",
    path: "descartables",
    imagen: Trash,
  },
  {
    categoria: "Congelados",
    path: "congelados",
    imagen: Snowflake,
  },
  {
    categoria: "Bebidas Alcohólicas",
    path: "bebidas-alcoholicas",
    imagen: Wine,
  },
  {
    categoria: "Cigarrillos",
    path: "cigarrillos",
    imagen: Cigarette,
  },
];

export const proveedoresList = [
  {
    proveedor: "Coca-Cola",
    path: "coca-cola",
    imagen: Store,
    bgColor: "#FEF6DA",
  },
  {
    proveedor: "Manaos",
    path: "manaos",
    imagen: Beer,
    bgColor: "#c6ff94",
  },
  {
    proveedor: "Marolio",
    path: "marolio",
    imagen: Milk,
    bgColor: "#8dffd0",
  },
  {
    proveedor: "Dove",
    path: "dove",
    imagen: Sandwich,
    bgColor: "#e975fd",
  },
  {
    proveedor: "Sol Pampeano",
    path: "sol-pampeano",
    imagen: UtensilsCrossed,
    bgColor: "#ff8787",
  },
  {
    proveedor: "Sedal",
    path: "sedal",
    imagen: Cookie,
    bgColor: "#bd75fd",
  },
  {
    proveedor: "La Serenisima",
    path: "la-serenisima",
    imagen: Popcorn,
    bgColor: "#ffc187",
  },
  {
    proveedor: "Champion",
    path: "champion",
    imagen: ShoppingBasket,
    bgColor: "#ffe49f",
  },
];

export const productosList = [
  {
    path: "casaliva-aceite-mezcla-1-5-l",
    cod: "0356",
    nombre: "Aceite Mezcla 1,5 Litros",
    marca: "Casaliva",
    categoria: "Almacen",
    categoriaPath: "almacen",
    precio: 3500.85,
    oferta: 0,
    imagen: aceite_casaliva_mezcla_1_5l,
    unidadesPorBulto: 6,
    precioPorBulto: 2450.85,
    createdAt: "2025-03-25T07:17:46.0102",
    updatedAt: "2025-03-25T07:18:13.1032",
    inStock: true,
  },
  {
    path: "yogur-firme-frutilla-gran-compra-120-gr",
    cod: "1590",
    nombre: "Yogur Firme Frutilla 120 Gr.",
    marca: "Gran Compra",
    categoria: "Lacteos",
    categoriaPath: "lacteos",
    precio: 533.73,
    oferta: 20,
    imagen: la_gran_compra_yogur_firme_frutilla_120_g,
    unidadesPorBulto: 5,
    precioPorBulto: 499.9,
    createdAt: "2025-03-25T07:30:46.0102",
    updatedAt: "2025-03-25T07:36:13.1032",
    inStock: true,
  },
  {
    path: "yogur-firme-vainilla-gran-compra-120-gr",
    cod: "8830",
    nombre: "Yogur Firme Vainilla 120 Gr.",
    marca: "Gran Compra",
    categoria: "Lacteos",
    categoriaPath: "lacteos",
    precio: 533.73,
    oferta: 0,
    imagen: la_gran_compra_yogur_firme_vainilla_120_g,
    unidadesPorBulto: 20,
    precioPorBulto: 499.9,
    createdAt: "2025-03-25T07:45:46.0102",
    updatedAt: "2025-03-25T07:55:13.1032",
    inStock: true,
  },
  {
    path: "yogur-con-cereales-gran-compra",
    cod: "8831",
    nombre: "Yogur con Cereales",
    marca: "Gran Compra",
    categoria: "Lacteos",
    categoriaPath: "lacteos",
    precio: 1300.85,
    oferta: 0,
    imagen: la_gran_compra_yogur_con_cereales,
    unidadesPorBulto: 5,
    precioPorBulto: 950.9,
    createdAt: "2025-03-25T07:55:46.0102",
    updatedAt: "2025-03-25T07:59:13.1032",
    inStock: true,
  },
  {
    path: "aceite-girasol-canuelas-1-5l",
    cod: "2558",
    nombre: "Aceite Girasol 1,5 L",
    marca: "Cañuelas",
    categoria: "Almacen",
    categoriaPath: "almacen",
    precio: 1446.6,
    oferta: 10,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/193270-1600-auto?v=637515951429070000",
    unidadesPorBulto: 6,
    precioPorBulto: 1300.5,
    createdAt: "2025-06-09T10:00:00.000Z",
    updatedAt: "2025-06-09T10:00:00.000Z",
    inStock: true,
  },
  {
    path: "arroz-largo-fino-marolio-1kg",
    cod: "6697",
    nombre: "Arroz Largo Fino 1 kg",
    marca: "Marolio",
    categoria: "Almacen",
    categoriaPath: "almacen",
    precio: 1490.0,
    oferta: 5,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/171033-1600-auto?v=637468537670270000",
    unidadesPorBulto: 10,
    precioPorBulto: 1390.0,
    createdAt: "2025-06-09T10:05:00.000Z",
    updatedAt: "2025-06-09T10:05:00.000Z",
    inStock: true,
  },
  {
    path: "azucar-ledesma-clasica-1kg",
    cod: "1778",
    nombre: "Azúcar Clásica Bolsa 1 kg",
    marca: "Ledesma",
    categoria: "Almacen",
    categoriaPath: "almacen",
    precio: 1100.0,
    oferta: 0,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/171163-1600-auto?v=637468538322200000",
    unidadesPorBulto: 10,
    precioPorBulto: 1000.0,
    createdAt: "2025-06-09T10:10:00.000Z",
    updatedAt: "2025-06-09T10:10:00.000Z",
    inStock: true,
  },
  {
    path: "jabón-dove-90g",
    cod: "9999",
    nombre: "Jabón en Barra 90 g",
    marca: "Dove",
    categoria: "Higiene Personal",
    categoriaPath: "higiene-personal",
    precio: 1300.5,
    oferta: 0,
    imagen:
      "https://cdn.batitienda.com/baticloud/images/product_picture_367358a01646491a9e85ed62666124d6_638225010815457643_0_f.webp",
    unidadesPorBulto: 24,
    precioPorBulto: 950.0,
    createdAt: "2025-06-09T10:15:00.000Z",
    updatedAt: "2025-06-09T10:15:00.000Z",
    inStock: true,
  },
  {
    path: "acondicionador-sedal-crema-balance-340-cc",
    cod: "3330",
    nombre: "Acondicionador crema Balance 340 cc.",
    marca: "Sedal",
    categoria: "Higiene Personal",
    categoriaPath: "higiene-personal",
    precio: 890.75,
    oferta: 0,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/380159-1600-auto?v=638314418679300000",
    unidadesPorBulto: 12,
    precioPorBulto: 800.0,
    createdAt: "2025-06-09T10:20:00.000Z",
    updatedAt: "2025-06-09T10:20:00.000Z",
    inStock: true,
  },
  {
    path: "desodorante-antitranspirante-nivea-men-black-y-white-fresh-sin-siliconas-150-ml",
    cod: "0303",
    nombre:
      "Desodorante antitranspirante Men Black & White Fresh sin siliconas 150 ml.",
    marca: "Nivea",
    categoria: "Higiene Personal",
    categoriaPath: "higiene-personal",
    precio: 2200.56,
    oferta: 0,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/511171-1600-auto?v=638495788266670000",
    unidadesPorBulto: 12,
    precioPorBulto: 1100.0,
    createdAt: "2025-06-09T10:25:00.000Z",
    updatedAt: "2025-06-09T10:25:00.000Z",
    inStock: true,
  },
];

export const footerLinks = [
  {
    title: "Atajos",
    links: [
      { text: "Inicio", url: "#" },
      { text: "Más vendidos", url: "#" },
      { text: "Ofertas actuales", url: "#" },
      { text: "Mi cuenta", url: "#" },
    ],
  },
  {
    title: "Info & Soporte",
    links: [
      { text: "Envios", url: "#" },
      { text: "Retiro en sucursal", url: "#" },
      { text: "Metodos de pago", url: "#" },
      { text: "Estado de tu pedido", url: "#" },
      { text: "Contactanos", url: "#" },
      { text: "WhatsApp", url: "#" },
    ],
  },
  {
    title: "Seguinos",
    links: [
      { text: "Instagram", url: "#" },
      { text: "YouTube", url: "#" },
      { text: "Facebook", url: "#" },
    ],
  },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    nombre: "Juan",
    apellido: "Nuñez",
    email: "juancnunz.contacto@gmail.com",
    calle: "J. Tarulli 1474",
    localidad: "Luis Guillon",
    partido: "Esteban Echeverría",
    cpostal: 1838,
    provincia: "Provincia de Buenos Aires",
    phone: "1170978630",
  },
];

export const dummyOrders = [
  {
    num: "00000001",
    userId: "67b5880e4d09769c5ca61644",
    productos: [
      {
        producto: productosList[3], // Yogur con Cereales
        unidades: 2,
        precio: 1300.85,
        cod: "8831",
      },
      {
        producto: productosList[1], // Yogur Frutilla
        unidades: 6,
        precio: 533.73,
        bultos: 1,
        precioPorBulto: 499.9,
        cod: "1590",
      },
      {
        producto: productosList[8], // Jabón Dove
        bultos: 2,
        precioPorBulto: 950.0,
        cod: "9999",
      },
    ],
    monto: 31103.58,
    direccion: dummyAddress[0],
    estado: "Entregado",
    metodoPago: "Transferencia",
    pagado: true,
    fechaCreacion: "2025-05-30T10:17:46.018Z",
    fechaActualizacion: "2025-05-31T12:13:13.103Z",
  },
  {
    num: "00000002",
    userId: "67b5880e4d09769c5ca61644",
    productos: [
      {
        producto: productosList[0], // Aceite Casaliva
        bultos: 2,
        precioPorBulto: 2450.85,
        cod: "0356",
      },
      {
        producto: productosList[4], // Aceite Girasol Cañuelas
        unidades: 4,
        precio: 1446.6,
        cod: "2558",
      },
    ],
    monto: 30294.9,
    direccion: dummyAddress[0],
    estado: "Orden creada",
    metodoPago: "Efectivo",
    pagado: false,
    fechaCreacion: "2025-06-02T09:42:31.018Z",
    fechaActualizacion: "2025-06-03T10:00:00.000Z",
  },
  {
    num: "00000003",
    userId: "67b5880e4d09769c5ca61644",
    productos: [
      {
        producto: productosList[5], // Arroz Marolio
        unidades: 10,
        precio: 1490.0,
        cod: "6697",
      },
      {
        producto: productosList[6], // Azúcar Ledesma
        bultos: 1,
        precioPorBulto: 1000.0,
        cod: "1778",
      },
      {
        producto: productosList[9], // Sedal Acondicionador
        unidades: 2,
        precio: 890.75,
        cod: "3330",
      },
    ],
    monto: 26681.5,
    direccion: dummyAddress[0],
    estado: "En preparación",
    metodoPago: "Transferencia",
    pagado: false,
    fechaCreacion: "2025-06-10T14:20:00.000Z",
    fechaActualizacion: "2025-06-11T08:55:00.000Z",
  },
];
