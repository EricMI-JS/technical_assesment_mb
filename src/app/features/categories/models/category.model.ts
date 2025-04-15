export interface CategoryResponse {
    success: number;
    content: Category[];
    mensaje: string;
}

export interface Category {
    id: number;
    nombre: string;
    nombre_spanish: string;
    imagen: string | null;
    activo: number;
    CategoryID: number;
    SubcategoryID: number;
} 