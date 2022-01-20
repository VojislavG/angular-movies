import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor(private router1: Router) { }

  ngOnInit(): void {
  }
 
  saveChanges(actorCreationDTO: actorCreationDTO){
    console.log(actorCreationDTO)
  }
}
