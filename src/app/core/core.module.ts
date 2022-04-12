import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        FooterComponent,
        MenuComponent
    ],
    imports: [MaterialModule, RouterModule, HttpClientModule],
    exports: [
        FooterComponent,
        MenuComponent
    ]
})
export class CoreModule { }
