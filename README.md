# ngMemoize

Decorator that applies memoization technique to a given method.

## Usage:

Installation:

```
npm i -D ng-memoize
```

Example:

```
import { Component } from '@angular/core';
import { ngMemoize } from 'ng-memoize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ngMemoize()
  fibonacci(n) {
    return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
  }
}
```
