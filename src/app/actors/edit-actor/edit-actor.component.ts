import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  model:actorDTO= {name : "Tom Holland", dateOfBirth:new Date(),
    picture: "https://www.theplace2.ru/cache/archive/leonardo_dicaprio/img/Leonardo_DiCaprio_Th-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
  biography:"Default value"}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      alert(params.id);
    })
    
  }
  saveChanges(actorCreationDTO: actorCreationDTO){
    console.log(actorCreationDTO);
  }

}
