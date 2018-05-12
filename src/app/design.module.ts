import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  declarations: []
})
export class DesignModule { }