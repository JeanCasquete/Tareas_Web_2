export interface Iclientes {
    sum:      number;
    clientes: Icliente[];
}

export interface Icliente {
    _id?:     string;
    nombre:    string;
    identificacion:    string;
}