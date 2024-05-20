import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ListAgentComponent } from './Components/list-agent/list-agent.component';
import { AgentdetailsComponent } from './Components/agentdetails/agentdetails.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"list",component:ListAgentComponent},
  {path:'details/:id',component:AgentdetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
