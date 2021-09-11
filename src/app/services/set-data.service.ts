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
      new Project("Film Projesi","Staj döneminde yaptığım projedir. Backend tarafında .net core web api ile geliştirme yapılmıştır. Frontend tarafında ise Angular kullanıldı.",""),
      new Project("Araç kiralama sitesi","Okul döneminde ekip arkadaşımla geliştirdiğimiz projemizdir.",""),
      new Project("Not alma mobil uygulması","Java dili ile geliştirdiğim mobil uygulamamdır.",""),
      new Project("Xamarin projesi","Okul döneminde zar atma uygulaması geliştirdiğim projedir.",""),
      new Project("şifre saklama uygulaması","Python programlama dili ile geliştirdiğim projemdir.",""),
      new Project("banka otomastonu projesi","C# programlama dilini kullanarak geliştirdiğim projemdir.","")
    ]
    
    return projects; 

  }

  writeList():Array<Write>{

    const writings:Array<Write> = [
      
      new Write("Yazılım Geliştirici Yetiştime Kampı","Engin Demiroğ hocamın .net core ve angular üzerine anlattığı müthiş bir kamptır.","https://www.youtube.com/watch?v=S_A_VVSQdpU&list=PLqG356ExoxZVN7rC0KmMo0lvECK97VRZg&index=1"),
      new Write(".Net Core Projeleri","Bora Kaşmer hocamın Akdeniz Üniversitende yaptığı güzel bir sunum.","https://www.youtube.com/watch?v=Zl4AdDHuNJk&list=PLAeDHZeGYg-AzJE35qxn-ZEUHzCdzXXcS"),
      new Write("Asp.net Core Web Api Best Practices","İngilizce olarak .net core web api en iyi pratikleri slayt şekilde anlatımı.","https://devintxcontent.blob.core.windows.net/showcontent/Speaker%20Presentations%20Spring%202019/Web%20API%20Best%20Practices.pdf"),
      new Write("Clean Code : Temiz Kod Yazma Sanatı","Engin Demiroğ hocamın canlı yayında anlatığı bir videodur.","https://www.youtube.com/watch?v=1MJpaMUdodU"),
      new Write("Bir Backend Geliştiricinin Bilmesi Gerekenler","Konular: Yotube videosunda açıklamada yazmaktadır. ","https://www.youtube.com/watch?v=7gt7muskRiY"),
      new Write("Yazılım Geliştiriciliğin Geleceği Nasıl?","Uğur Umutluoğlu hocamın anlattığı youtube videosudur.","https://www.youtube.com/watch?v=AHkKRY9hnas"),
      
    ]

    return writings;

  }


}
