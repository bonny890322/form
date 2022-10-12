import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  addForm!: FormGroup;
  today = new Date

  constructor(
    private fb: FormBuilder,
  ) {
    this.addForm = this.fb.group({
      date_for_estimated_completion: ['', [Validators.required]],
      remark: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
      creater: [''],
      countersign_id: [''],
    });

    const today = new Date();
  }

  ngOnInit(): void {

    this.addForm.patchValue({
      date_for_estimated_completion: this.today,
    });
  }

  reset() {
    this.addForm.reset()
  }

}
