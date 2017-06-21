import { Recipe } from './recipe.model';
import {Ingredient } from '../shared/ingredient.model';
import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'Om-nom',
            'https://previews.123rf.com/images/bluefox/bluefox1502/bluefox150200049/36411095-Wiener-Schnitzel-with-french-fries-Stock-Photo.jpg',
            [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
        ),
        new Recipe(
            'Big Fat Burger',
            'this is tasty',
            'http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg',
            [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
        ),
    ];

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());

    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}