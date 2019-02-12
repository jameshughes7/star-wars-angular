import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';

// routes is an array of JS objects
// each object represents a route
// each integration of a route has a path
// and a component that gets loaded if that part is what you're visiting

// child routes can be registered to TabsComponent
// TabsComponent has all the tabs and renders the list in the end
// ListComponent stays constant but we can register different child roles
// for different content types we want to load

// :side path catches the dynamic value of the path (Light, Dark ,All)
const routes = [
  { path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':side', component: ListComponent }
  ] },
  { path: 'new-character', loadChildren: './create-character/create-character.module#CreateCharacterModule' },
  // wilcard to catch unnamed routes needs to be last element in array
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  imports: [
    // forRoot sets up root routing for the application
    // forRoot(routes) registers our routes in the RouterModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
