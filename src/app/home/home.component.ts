import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  leadFormGroup: FormGroup | undefined;

  constructor(
    private homeService: HomeService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.leadFormGroup = this._formBuilder.group({
    //   firstName: [''],
    //   lastName: [''],
    //   phone: [''],
    //   email: ['', [Validators.required, Validators.email]],
    //   message: [''],
    // });
  }

  // submitFormData(formData: any) {
  //   this.homeService.sendLeadMail(formData).subscribe((arg) => {
  //     console.log('Success');
  //   });
  // }
}
