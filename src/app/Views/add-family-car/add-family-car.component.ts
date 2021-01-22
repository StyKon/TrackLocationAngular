import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { FamilyCarService } from 'src/app/Services/family-car.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FamilyCarModule } from 'src/app/Models/family-car/family-car.module';


@Component({
  selector: 'app-add-family-car',
  templateUrl: './add-family-car.component.html',
  styleUrls: ['./add-family-car.component.css']
})
export class AddFamilyCarComponent implements OnInit {
  submitForm: FormGroup;
  familycars: any;
  data: FamilyCarModule;
  constructor(private router: Router,
              private currentRouter: ActivatedRoute,
              private familycarservice: FamilyCarService ,
              private fb: FormBuilder) {

              }

  ngOnInit(): void {
    this.submitForm = this.fb.group({
      nameFamily: ['', [Validators.required, Validators.minLength(3)]]
     });
    this.RefreshList();
  }

  onSubmit(){
    var id =  this.currentRouter.snapshot.paramMap.get(id);
    if ( id === null) {
      this.AddFamilyCar();
    }else{
      this.EditFamilyCar(id);
    }
    this.RefreshList();
  }

  AddFamilyCar(): void {
    this.familycarservice.addFamilyCar(this.submitForm.value);
    this.router.navigate(['/FamilyCar']);
  }

  EditFamilyCar(id): void {
    this.familycarservice.getFamilyCarById(id).subscribe(res => {
      this.data = res;
     });
    this.submitForm.controls['nameFamily'].value(this.data.nameFamily);
    this.familycarservice.editeFamilyCar(this.data.familyCarId, this.submitForm.value);
    this.router.navigate(['/FamilyCar']);
  }

  deleteFamilyCar(id: any): void{
    this.familycarservice.deleteFamilyCar(id);
    this.RefreshList();
  }

  RefreshList(){
    this.familycarservice.getAllFamilyCar().subscribe(data => {
       this.familycars = data;
     });
  }

  resetForm(): void{
    this.submitForm.reset();
  }

  get nameFamily(): any{
    return this.submitForm.get('nameFamily');
  }
}
