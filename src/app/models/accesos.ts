
export interface Auto{
    id_auto?: any,
    id_categoria: number ,
    placa: string,
    modelo: string,
    marca: string,
    color: string,
}
export interface Accesos{
    id_acceso?: any,
    id_auto: number,
    id_usuario: number,
    fecha?: string,
    codigo: string,
    hora_Entrada?: string,
    hora_Salida?: string,
    monto: number,
    estado: string,
}
