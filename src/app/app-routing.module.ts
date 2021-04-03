import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
