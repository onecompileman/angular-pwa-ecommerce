import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { ConfirmationComponent } from './components/modals/confirmation/confirmation.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  exports: [
    ModalModule,
    FormsModule,
    RouterModule,
    ConfirmationComponent,
    ToastrModule
  ],
  entryComponents: [ConfirmationComponent]
})
export class SharedModule { }
