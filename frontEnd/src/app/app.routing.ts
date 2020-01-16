import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankTemplateComponent} from './template/blank-template.component';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { CargarGastosComponent } from './cargar-gastos/cargar-gastos.component';
import { VerGastosComponent } from './ver-gastos/ver-gastos.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, 
{
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Cuentas Compartidas'
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard Page'
      },
    },
    {
      path: 'cargarGasto',
      component: CargarGastosComponent,
      data: { title: 'Gastos compartidos' }
    },
    {
      path: 'verGasto',
      component: VerGastosComponent,
      data: { title: 'Gastos compartidos' }
    },
    {
      path: 'ui-elements',
      loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      data: {
        title: 'UI Elements'
      },
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      data: {
        title: 'Form Page'
      },
    }
  ]
}, 
{
  path: 'tables',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Tables'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    }
  ]
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
