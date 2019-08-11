import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:'Home',component:HeaderComponent},
{path:'Home',component:HeaderComponent},
{path:'AboutUS',component:AboutComponent},
{path:'Pricing',component:PricingComponent},
{path:'Testimonial',component:TestimonialComponent},
{path:'News',component:NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
