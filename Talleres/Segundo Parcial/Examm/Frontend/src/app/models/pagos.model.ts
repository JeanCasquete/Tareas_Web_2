export interface IPagos {
    sum:      number;
    pagos: IPago[];
}

export interface IPago {
    _id?:     string;
    nombre:    string;
    cliente:    string;
    concepto: string;
    Fecha: string;
    Hora: string;
    valor: string;
    status: boolean;
}