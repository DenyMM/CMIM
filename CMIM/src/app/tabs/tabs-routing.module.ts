import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'eventos',
            loadChildren: () =>
          import('../pages/eventos/eventos.module').then(m => m.EventosPageModule)
          },
          {
            path: 'mesa',
            loadChildren: () =>
          import('../pages/mesa/mesa.module').then(m => m.MesaPageModule)
          },
          {
            path: 'ligas',
            loadChildren: () =>
          import('../pages/ligas/ligas.module').then(m => m.LigasPageModule)
          },
          {
            path: 'contacto',
            loadChildren: () =>
          import('../pages/contacto/contacto.module').then(m => m.ContactoPageModule)
          },
          {
            path: 'residentes',
            loadChildren: () =>
          import('../pages/residentes/residentes.module').then(m => m.ResidentesPageModule)
          },
          {
            path: 'congreso',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../pages/congreso/congreso.module').then(m => m.CongresoPageModule)
              },
              {
                path: 'comite',
                loadChildren: () =>
              import('../pages/comite/comite.module').then(m => m.ComitePageModule)
              },
              {
                path: 'mensaje',
                loadChildren: () =>
              import('../pages/mensaje/mensaje.module').then(m => m.MensajePageModule)
              }
            ]
          },
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'perfil',
            loadChildren: () =>
          import('../pages/perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
