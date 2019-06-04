import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http} from '@angular/http';

@Component({
  selector: 'app-add-cabinet',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form: FormGroup;

  flag: boolean;

  constructor(private http: Http,
              private fb: FormBuilder) { this.createForm(); }

  ngOnInit() {
    this.flag = false;
  }

  createForm() {
    this.form = this.fb.group({
      pro_name: ['', Validators.required],
      product_image: null,
      price: ['']
    });
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('pro_name', this.form.get('pro_name').value);
    input.append('product_image', this.form.get('product_image').value);
    input.append('price', this.form.get('price').value);
    return input;
  }

   // use form module to send
  addProduct() {
    const formModule = this.prepareSave();
    console.log(formModule);
    this.http.post('http://localhost:8080' + '/products', formModule).subscribe((res) => {
      console.log(res.json());
      if (res.json().success === true) {
        this.flag = true;
      }
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('product_image').setValue(file);
    }
  }

}
