import { Component,Input,OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';



@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.scss']
})
export class RandomUsersComponent implements OnInit {

  
  @Input() randomContact:IRandomContact| undefined;

  constructor (){}

  ngOnInit(): void {
   
  }

}


