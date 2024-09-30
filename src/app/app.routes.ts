import { Routes } from '@angular/router';
import { DashboardComponent } from './fi-ma/dashboard/dashboard.component';
import { ExpenseComponent } from './fi-ma/expense/expense.component';
import { HistoryComponent } from './fi-ma/history/history.component';
import { IncomeComponent } from './fi-ma/income/income.component';
import { LoginComponent } from './fi-ma/login/login.component';
import { ProfileComponent } from './fi-ma/profile/profile.component';
import { SidebarComponent } from './fi-ma/sidebar/sidebar.component';
import { TodoComponent } from './fi-ma/to-do/to-do.component';

export const routes: Routes = [
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
    // {path:'fi-ma',loadChildren:()=>import('./fi-ma/fi-ma-routing.module').then(m=> m.FiMaRoutingModule)}
];
