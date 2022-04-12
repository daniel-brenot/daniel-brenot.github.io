import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../core/modules/material.module';
import { OverviewComponent } from './components/overview/overview.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        OverviewComponent,
        SkillsComponent,
        PortfolioComponent,
        WorkComponent
    ],
    imports: [BrowserModule, MaterialModule, FlexLayoutModule],
    exports: [
        OverviewComponent,
        SkillsComponent,
        PortfolioComponent,
        WorkComponent
    ]
})
export class PagesModule { }
