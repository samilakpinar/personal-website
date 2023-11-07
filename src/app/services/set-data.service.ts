import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Write } from '../models/Write';

@Injectable({
  providedIn: 'root'
})
export class SetDataService {

  constructor() { }

  projectList():Array<Project>{

    
    const projects:Array<Project> = [
      new Project("Movie project","This is the project I did during my internship. On the backend side, development was made with .net core web api. Angular was used on the frontend.",""),
      new Project("Car rental site","It is a project that we developed with my teammate during the school period.",""),
      new Project("Note taking mobile app","It is my mobile application developed with Java language.",""),
      new Project("Xamarin project","It is a project that I developed a dice throwing application during the school period.",""),
      new Project("Password storage app","This is my project that I developed with the Python programming language.",""),
      new Project("Bank automaton project","This is my project that I developed using the C# programming language.","")
    ]
    
    return projects; 

  }

  writeList():Array<Write>{

    const writings:Array<Write> = [
      
      new Write("Software Developer Training Camp","It is a great camp that my teacher Engin Demiroğ told about .net core and angular.","https://www.youtube.com/watch?v=S_A_VVSQdpU&list=PLqG356ExoxZVN7rC0KmMo0lvECK97VRZg&index=1"),
      new Write(".Net Core Projects","A nice presentation by my teacher Bora Kaşmer at Akdeniz University.","https://www.youtube.com/watch?v=Zl4AdDHuNJk&list=PLAeDHZeGYg-AzJE35qxn-ZEUHzCdzXXcS"),
      new Write("Asp.net Core Web Api Best Practices","Slideshow of .net core web api best practices in English.","https://devintxcontent.blob.core.windows.net/showcontent/Speaker%20Presentations%20Spring%202019/Web%20API%20Best%20Practices.pdf"),
      new Write("Clean Code : The Art of Writing Clean Code","It is a video that my teacher Engin Demiroğ told on live broadcast.","https://www.youtube.com/watch?v=1MJpaMUdodU"),
      new Write("What a Backend Developer Should Know","Topics: It is written in the description in the youtube video.","https://www.youtube.com/watch?v=7gt7muskRiY"),
      new Write("What is the Future of Software Development?","It is a youtube video told by my teacher Uğur Umutluoğlu.","https://www.youtube.com/watch?v=AHkKRY9hnas"),
      
    ]

    return writings;

  }


}
