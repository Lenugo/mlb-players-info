import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { AmericanComponent } from './american/american.component';
import { NationalComponent } from './national/national.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent, AmericanComponent, NationalComponent],
  imports: [CommonModule, RouterModule, PagesRoutingModule],
  exports: [PagesComponent, HomeComponent],
})
export class PagesModule {}