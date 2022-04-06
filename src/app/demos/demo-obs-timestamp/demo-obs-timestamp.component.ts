import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-demo-obs-timestamp',
  templateUrl: './demo-obs-timestamp.component.html',
  styleUrls: ['./demo-obs-timestamp.component.css']
})
export class DemoObsTimestampComponent implements OnInit {

  @ViewChild('myButton')
  myButton!: ElementRef;
  timestamps!: Observable<String>;
  modulo0 = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
    const source2$ : Observable<number> = range(0,10);
    source2$.pipe(
      map(nombre => nombre * 3),
      filter( x => x % 2 === 0)
    ).subscribe( rs => {
      this.modulo0 = `${this.modulo0} ${rs}` 
    } )
  }
  ngAfterViewInit(): void {
    const source = fromEvent(this.myButton.nativeElement, 'click')
    this.timestamps = source.pipe(map( () => {
      return "Last click: " + new Date();
    }))
  }

}
