import { Injectable } from "@angular/core";
import { Comment } from "../model/comment.model"

@Injectable({
    providedIn: 'root',  
  })
export class CommentService {
    private comments = [
        {
            name : "Douglas Holanda",
            imageUrl : "https://avatars.githubusercontent.com/u/129301271?v=4",
            description : "O curso é muito bom, principalmente pela clareza das " +
                          "explicações e pela didática dos professores. A cada" +
                          "aula me sentia mais motivado a continuar. Terminei " +
                          "com a sensação de que realmente aprendi algo útil.",
            nameCourse : "Inteligência artificial com redes neurais"
        },
        {
            name : "Wesley Rodrigues",
            imageUrl : "https://avatars.githubusercontent.com/u/130418293?v=4",
            description : "O curso superou minhas expectativas. A linguagem " + 
                           "usada é acessível, os exemplos são atuais e a " + 
                           "parte prática realmente ajuda a fixar o conteúdo. " +
                           "Já estou aplicando várias coisas no meu trabalho " +
                           "e vendo diferença nos resultados.",
            nameCourse : "Programação frontend web com Angular"
        },
        {
            name : "Kaiane",
            imageUrl : "https://avatars.githubusercontent.com/u/132933423?v=4",
            description : "Achei o curso muito completo. Além da teoria bem explicada, " + 
                          "há muitos exercícios que simulam situações reais. Isso foi " +
                          "o que mais me ajudou a entender como aplicar tudo no dia a dia.",
            nameCourse : "Programação backend com Java e Spring"
        }
    ]
    getComments() : Comment[] {
        return this.comments;
    }
}