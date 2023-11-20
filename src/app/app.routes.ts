import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent } from "./components/home/home.component";
import {AboutComponent } from "./components/about.Component";

const app_routes: Routes =[
    { path 'home', component: HomeComponent },
    { path 'about', component: AboutComponent },
    {path '**' patchMatch: 'full', redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true } );
 