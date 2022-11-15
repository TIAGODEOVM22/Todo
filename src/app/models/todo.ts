export interface Todo{
    id?: String; /*? torna o id opcional*/
    titulo: String;
    descricao?: String;
    dataParaFinalizar: any;
    finalizado: Boolean

}