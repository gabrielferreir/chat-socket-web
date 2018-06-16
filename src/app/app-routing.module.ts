import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MAIN_ROUTES } from './views/main/main-routing.module';

const routes: Routes = [
    // Your routes here
    ...MAIN_ROUTES,
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
