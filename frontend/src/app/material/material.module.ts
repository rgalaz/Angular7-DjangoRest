import { NgModule } from '@angular/core';
import { MatTableModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatIconModule} from '@angular/material';

const MaterialComponents = [
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
