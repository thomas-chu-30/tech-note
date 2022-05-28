#	material

## 引用 mat 樣式

```html

<mat-form-field>
  <mat-label>Input</mat-label>
  <input matInput>
</mat-form-field>

<mat-form-field>
  <mat-label>Select</mat-label>
  <mat-select>
    <mat-option value="one">First option</mat-option>
    <mat-option value="two">Second option</mat-option>
  </mat-select>
</mat-form-field>

<mat-form-field>
  <mat-label>Textarea</mat-label>
  <textarea matInput></textarea>
</mat-form-field>
```

## customer svg icon

```javascript
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class AppModule {}
```
```javascript
import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "musicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/headphone.svg")
    );
  }
}
```

```html
<mat-icon svgIcon="musicon"></mat-icon>
```

[ref](https://www.positronx.io/angular-material-8-icons-tutorial-with-real-world-examples/ )