import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    const arr = [2, 4, 6, 8];
    of(20, 40, 60, 80).subscribe(console.log);
    from(arr).subscribe(console.log);
    of(arr).subscribe(console.log);
    of(...arr).subscribe(console.log);
  }
}
