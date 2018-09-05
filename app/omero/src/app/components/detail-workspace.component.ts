import {Input, Output, Component, OnInit, Inject, Injector, EventEmitter} from '@angular/core';
import {SimpleComponent} from '../shared/form/field-simple.component';
import {FieldBase} from '../shared/form/field-base';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import * as _ from "lodash-es";
import {PaginationModule} from 'ngx-bootstrap';

import {OMEROService} from '../omero.service';

/**
 * Contributor Model
 *
 *
 * @author <a target='_' href='https://github.com/moisbo'>moisbo</a>
 *
 */
export class DetailWorkspaceField extends FieldBase<any> {

  showHeader: boolean;
  loggedIn: boolean;
  loading: boolean;
  validators: any;
  enabledValidators: boolean;
  relatedObjects: object[];
  accessDeniedObjects: object[];
  failedObjects: object[];
  hasInit: boolean;
  columns: object[];
  rdmpLinkLabel: string;
  syncLabel: string;
  workspaces: any[];
  user: any;
  omeroService: OMEROService;
  rdmp: string;
  oid: string;
  workspaceLink: string;
  linkedState: string;
  linkedLabel: string;
  linkedAnotherLabel: string;
  linkLabel: string;
  linkProblem: string;
  currentPage: number = 1;
  totalItems: number;
  limit: number;
  offset: number;
  workspacesMeta: any;

  constructor(options: any, injector: any) {
    super(options, injector);
    this.omeroService = this.getFromInjector(OMEROService);
    this.relatedObjects = [];
    this.accessDeniedObjects = [];
    this.failedObjects = [];
    this.columns = options['columns'] || [];
    this.rdmpLinkLabel = options['rdmpLinkLabel'] || 'Plan';
    this.syncLabel = options['syncLabel'] || 'Sync';
    var relatedObjects = this.relatedObjects;
    this.value = options['value'] || this.setEmptyValue();

  }

  registerEvents() {

  }

  init() {
    this.rdmp = this.fieldMap._rootComp.rdmp;
    this.oid = this.fieldMap._rootComp.oid;
  }

  revoke() {
    this.loggedIn = false;
  }

  createFormModel(valueElem: any = undefined): any {
    if (valueElem) {
      this.value = valueElem;
    }

    this.formModel = new FormControl(this.value || []);

    if (this.value) {
      this.setValue(this.value);
    }

    return this.formModel;
  }

  setValue(value: any) {
    this.formModel.patchValue(value, {emitEvent: false});
    this.formModel.markAsTouched();
  }

  setEmptyValue() {
    this.value = [];
    return this.value;
  }




}

/**
 * Component to display information from related objects within ReDBox
 */
@Component({
  selector: 'ws-detailworkspace',
  template: `<div>
    Detail Workspace for field {{ field.rdmp }} and oid {{ field.oid }}
  </div>
  `
})
export class DetailWorkspaceComponent extends SimpleComponent {
  field: DetailWorkspaceField;

  ngOnInit() {
    this.field.init()
  }

  ngAfterContentInit() {
  }

}
