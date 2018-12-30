import { Quizes } from './../quizes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-menu',
  templateUrl: './quiz-menu.component.html',
  styleUrls: ['./quiz-menu.component.css']
})
export class QuizMenuComponent implements OnInit {
  Quizes = [
    new Quizes('Infected Mushrooms' , 'https://i.ytimg.com/vi/uloBD9xxwZ0/hqdefault.jpg' , 10 , './infectedMushrooms.json'),
    new Quizes('One Piece' , 'https://pbs.twimg.com/profile_images/754937765872046080/wRVmR3lh_400x400.jpg'
    , 10 , './infectedMushrooms.json')
  ];
  constructor() { }

  ngOnInit() {
  }

}
