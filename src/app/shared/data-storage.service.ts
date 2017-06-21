import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {

    constructor(private http: Http,
                private authService: AuthService,
                private recipeService: RecipeService){
    }

    storeRecipes(){
        const token =this.authService.getToken();

        return this.http.put('https://ng-recipe-book-d8cbd.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecepes(){
        const token =this.authService.getToken();


        this.http.get('https://ng-recipe-book-d8cbd.firebaseio.com/recipe.json?auth=' + token)
            .map(
                (response: Response) =>{
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingrediets'] = [];
                        }
                    }

                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) =>{
                    this.recipeService.setRecipes(recipes);
                }
            )
    }

}
