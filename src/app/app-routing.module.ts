import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/components/overview/overview.component';
import { PortfolioComponent } from './pages/components/portfolio/portfolio.component';
import { SkillsComponent } from './pages/components/skills/skills.component';
import { WorkComponent } from './pages/components/work/work.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'work', component: WorkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
