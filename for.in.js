// for in vai se usado para objetos
// serve para andar item por item
const objeto = {nome:'Artur', idade:'16', rua:'nossa senhora aparecida' };

for (let chave in objeto){
    console.log(objeto['rua']);
}