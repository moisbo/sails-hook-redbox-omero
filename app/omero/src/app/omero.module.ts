import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { OMEROFormComponent } from './omero-form.component';
import { OMEROService } from './omero.service';
import { WorkspaceFieldComponent } from './shared/form/workspace-field.component';
import { SharedModule } from './shared/shared.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { LoginWorkspaceAppComponent } from './components/login-workspaceapp.component';
import { ListWorkspaceDataComponent } from './components/list-workspaces.component';
import { LinkModalWorkspaceComponent } from './components/linkmodal-workspace.component';
import { CreateWorkspaceComponent } from './components/create-workspace.component';

import { DetailWorkspaceComponent } from './components/detail-workspace.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, ReactiveFormsModule,
    SharedModule, FormsModule, PaginationModule.forRoot()
  ],
  declarations: [ OMEROFormComponent,
    ListWorkspaceDataComponent, LoginWorkspaceAppComponent,
    LinkModalWorkspaceComponent, CreateWorkspaceComponent, DetailWorkspaceComponent
  ],
  exports: [  ],
  providers: [ OMEROService ],
  bootstrap: [ OMEROFormComponent ],
  entryComponents: [ LoginWorkspaceAppComponent,
  ListWorkspaceDataComponent, LinkModalWorkspaceComponent,
  CreateWorkspaceComponent, DetailWorkspaceComponent
 ]
})
export class OMEROModule { }
