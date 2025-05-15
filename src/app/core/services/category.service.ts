import { Injectable } from "@angular/core";
import { Category } from "../model/category.model"

@Injectable({
    providedIn: 'root',  
  })
export class CategoryService {
    private categories = [
        {
            idCategory : 0,
            title : "Programação Web e Desktop",
            imageUrl : "assets/images/programacao.png"
        },
        {
            idCategory : 1,
            title : "Computação em Nuvem e DevOps",
            imageUrl : "assets/images/nuvem.png"
        },
        {
            idCategory : 2,
            title : "Inteligência de Negócios",
            imageUrl : "assets/images/negocios.png"
        },
        {
            idCategory : 3,
            title : "Programação de Jogos",
            imageUrl : "assets/images/jogos.png"
        }
    ]

    getCategoryById(idCategory : number): Category {
        const found = this.categories.find(category => category.idCategory === idCategory);
        if (!found) {
          throw new Error(`Categoria com ID ${idCategory} não encontrada`);
        }
        return found;
    }

    getCategories() : Category[] {
        return this.categories;
    }
}