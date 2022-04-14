import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meals:Meal[] = [
    {id:1, meal:'Rice', calories:0},
    {id:1, meal:'Githeri', calories:0},
    {id:1, meal:'Njahi', calories:0},
    {id:1, meal:'Chips', calories:0}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
