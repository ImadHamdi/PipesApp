import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { Color, Hero } from '../../interfaces/here.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent implements OnInit {

  public items: MenuItem[] = [];
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna verde',
      canFly: false,
      color: Color.green
    },
  ]
    // Convert heroes array to TreeNode<Hero>[] array
    public treeNodeHeroes: TreeNode<Hero>[] = [];

    // Mapeja si pot volar true/false a si/no
    public canFlyMap = {
      true: 'Sí',
      false: 'No'
    };


  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-undo',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      }
    ];
    // Convert heroes array to TreeNode<Hero>[] array
    this.treeNodeHeroes = this.heroes.map(hero => ({ data: hero }));
    // console.log(this.treeNodeHeroes )
  }
}
