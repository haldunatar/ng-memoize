import { Component } from '@angular/core';
import { ngMemoize } from 'ng-memoize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ngMemoize()
  sum(a, b) {
    console.log('summmed!!!');
    return a + b;
  }

  @ngMemoize()
  guess() {
    console.log('guesssedd!!!');
    return 7;
  }

  @ngMemoize()
  multiply(c, d) {
    console.log('multiply!!!');
    return c * d;
  }
}
