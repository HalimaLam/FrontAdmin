import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AgentServiceService } from '../../service/agent-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-add-edit-agent',
  templateUrl: './add-edit-agent.component.html',
  styleUrl: './add-edit-agent.component.css'
})
export class AddEditAgentComponent implements OnInit {
  empForm: FormGroup;
  selectedFile: File | null = null;
  typePieceIdentite: string[] = [
    'C.I.N',
    'Passeport',
    'Permis de conduire',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: AgentServiceService,
    private _dialogRef: MatDialogRef<AddEditAgentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      typePieceIdentite: '',
      numeroPiece: '',
      dob: '',
      adresse: '',
      email: '',
      numeroI: '',
      numeroP: '',
      Desc:'',
      file:'',
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
/*onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }*/
  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Agent detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Agent added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

  



}
