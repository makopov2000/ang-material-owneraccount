import { Component, OnInit } from '@angular/core';
import { Owner } from './../../_interface/owner.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from './../../shared/repository.service';
import { ErrorHandlerService } from './../../shared/error-handler.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  public owner: Owner;
  public showAccounts;

  constructor(private repository: RepositoryService, private router: Router,
    private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    //this.getOwnerDetails();
    this.getData();
  }

  getData() {
    this.owner = {
      id: '10',
      name: 'Mike',
      dateOfBirth: new Date('12/30/1953'),
      address: '425 geneva',
      accounts: [{ id: '11', dateCreated: new Date('12/30/2000'), accountType: 'Advanced user', ownerId: '10' },
      { id: '12', dateCreated: new Date('12/30/2001'), accountType: 'Some user', ownerId: '10' },
      { id: '13', dateCreated: new Date('12/30/2002'), accountType: 'Another user', ownerId: '10' }
      ]
    };

  }

  private getOwnerDetails = () => {
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `api/owner/${id}/account`;

    this.repository.getData(apiUrl)
      .subscribe(res => {
        this.owner = res as Owner;
      },
      (error) => {
        this.errorHandler.handleError(error);
      })
  }
}
