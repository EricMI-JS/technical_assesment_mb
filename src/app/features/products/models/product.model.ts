export interface ProductResponse {
  success: number;
  content: ProductContent[];
  mensaje: string;
}

export interface LastVisitedResponse {
  success: number;
  content: LastVisitedContent[];
  mensaje: string;
}

export interface BaseProduct {
  id: number;
  nombre: string;
  marca: string;
  descripcion: string;
  detalles: null;
  peso: string;
  ancho: string;
  alto: string;
  largo: string;
  imagen: string | null;
  elementos_recomendados: number;
  fecha_registro: Date;
  sku: string;
  activo: number;
  convertida: number;
  unique_id: string;
  partterminologyID: string;
  has_image: boolean;
  has_name: boolean;
  marca_autoparte: number;
  categoria: number;
  subsubcategoria: number;
}

export interface ProductContent extends BaseProduct {}

export interface LastVisitedContent extends BaseProduct {
  precio: number;
  publicacion: string[];
  marca_imagen: string;
} 