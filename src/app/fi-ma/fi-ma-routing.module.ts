import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './to-do/to-do.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
  {path:'login' , component:LoginComponent },
  {path: 'sidebar', component:SidebarComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'income', component:IncomeComponent},
  {path:'expense',component:ExpenseComponent},
  {path:'todo',component:TodoComponent},
  {path:'history',component:HistoryComponent},
  {path:'profile',component:ProfileComponent},
  {
    path: '**',
    redirectTo: 'login',
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiMaRoutingModule { }
