import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClickActionComponentComponent} from "./click-action-component/click-action-component.component";

const routes: Routes = [
  {
    path: "",
    component: ClickActionComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
