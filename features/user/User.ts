export default class User {
    id: String;
    nome: String;
    email: String;

    constructor({nome, id, email}: { nome: String, id: String, email: String}){
        this.nome = nome;
        this.id = id;
        this.email = email;
    }
}