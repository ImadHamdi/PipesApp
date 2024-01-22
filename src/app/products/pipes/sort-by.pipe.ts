import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/here.interface';
import { TreeNode } from 'primeng/api';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: TreeNode<Hero>[], sortBy?: keyof Hero | ''): TreeNode<Hero>[] {
    // Tree Node no se li pot modificar l'array directament. S'ha de crear una còpia.
    const sortedHeroes: TreeNode<Hero>[] = [...heroes];

    switch ( sortBy ) {
      case 'name':
        {
          console.log(sortBy)
          console.log(sortedHeroes.sort( (a,b) => (a.data!.name > b.data!.name) ? 1 : -1))
          return sortedHeroes.sort( (a,b) => (a.data!.name > b.data!.name) ? 1 : -1);
        }
      case 'canFly':
        {
          console.log(sortBy)
          console.log(sortedHeroes.sort( (a,b) => (a.data!.canFly > b.data!.canFly) ? 1 : -1))
          return sortedHeroes.sort( (a,b) => (a.data!.canFly > b.data!.canFly) ? 1 : -1);
        }
      case 'color':
        {
          console.log(sortBy)
          console.log(sortedHeroes.sort( (a,b) => (a.data!.color > b.data!.color) ? 1 : -1))
          return sortedHeroes.sort( (a,b) => (a.data!.color > b.data!.color) ? 1 : -1);
        }
      default:
          return heroes;
    }
  }

}
