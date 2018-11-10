import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Http} from '@angular/http';

@Component({
  selector: 'app-add-cabinet',
  templateUrl: './add-cabinet.component.html',
  styleUrls: ['./add-cabinet.component.css']
})
export class AddCabinetComponent implements OnInit {

  form: FormGroup;

  flag: boolean

  constructor(private http: Http,
              private fb: FormBuilder) { this.createForm() }

  ngOnInit() {
    this.flag = false
  }

  createForm() {
    this.form = this.fb.group({
      cab_name: ['', Validators.required],
      cabinet_image: null,
      cab_desc: [''],
      price: ['']
    });
  }

  private prepareSave(): any{
    let input = new FormData();
    input.append('cab_name', this.form.get('cab_name').value);
    input.append('cabinet_image', this.form.get('cabinet_image').value)
    input.append('cab_desc', this.form.get('cab_desc').value)
    input.append('price', this.form.get('price').value)
    return input;
  }

   // use form module to send
  addCabinet(){
    const formModule = this.prepareSave();
    console.log(formModule)
    this.http.post('http://localhost:8080' + "/cabinets", formModule).subscribe((res) => {
      console.log(res.json());
      if(res.json().success == true){
        this.flag = true;
      }
    })
  }

  // addCabinet(cabinets){
  //   // const formModule = this.prepareSave()
  //   // console.log(formModule)
  //   this.http.post('http://localhost:8080' + "/cabinets", cabinets).subscribe((res) => {
  //     console.log(res.json());
  //   })
  // }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('cabinet_image').setValue(file);
    }
  }

}
