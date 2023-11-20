import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../../app.component';
import { MiComponente } from './mi-component.component.ts/mi-component.component.ts.component';

@NgModule ({
    declarations: [
        AppComponent
        MiComponente
    ],
    imports:[
        BrowserModule
    ],
    providers [],
    bootstrap [AppComponent]
})
export class AppModule {

}