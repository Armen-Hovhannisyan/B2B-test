import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule,FormControl} from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,


} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule

    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule




    ],

})
export class MaterialModule { }