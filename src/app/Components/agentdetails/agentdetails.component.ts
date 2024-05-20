import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentServiceService } from '../../service/agent-service.service';

@Component({
  selector: 'app-agentdetails',
  templateUrl: './agentdetails.component.html',
  styleUrl: './agentdetails.component.css'
})
export class AgentdetailsComponent implements OnInit{

  agent: any;

  constructor(private route: ActivatedRoute, private agentService: AgentServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getAgentDetails(id);
    });
  }

  private getAgentDetails(id: number): void {
    this.agentService.getAgentById(id).subscribe(
      (data: any) => {
        console.log('Agent data received:', data); // Pour le débogage
        this.agent = data;
      },
      error => {
        console.error('Error fetching agent data:', error); // Pour le débogage
      }
    );
  }

}
