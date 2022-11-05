import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  responseMessage: string = "";
  responseAvailable: boolean = false;
  submitInProgress: boolean = false;  // Set to true to disable submit button if submit is in progress

  // Input from the form to collect
  firstName = new FormControl("");
  lastName = new FormControl("");
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(512)]);
  spamTrap: FormControl = new FormControl("");  // A hidden field. If this gets a value, it caught a spam attempt!

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      message: this.message,
      spamTrap: this.spamTrap
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.status == "VALID" && this.spamTrap.value == "") {
      this.disableForm();  // Let the actions below complete before allowing another submission
      var formData: any = new FormData();
      formData.append("firstName", this.form.get("firstName")!.value);  // ! = A non-null and non-undefined
      formData.append("lastName", this.form.get("lastName")!.value);
      formData.append("email", this.form.get("email")!.value);
      formData.append("message", this.form.get("message")!.value);

      this.http.post("https://script.google.com/macros/s/AKfycbzjY7-KkoPbMSui-7l32pmrsc9MMmKXPV02HZgWDhW8W1k85yWrrv12rPIvCa0fDSJCJg/exec", formData).subscribe(
        (response) => {
          this.responseMessage = "Oh no, something went wrong! Please reload the page and try again.";
          if (Object.values(response)[0] == "success") {
            this.responseMessage = "Thank you for your message, we will respond to you as soon as possible!";
          }
          this.enableForm();
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oh no, something went wrong! Please reload the page and try again.";
          this.enableForm();
          console.log(error);
        }
      );
    }
  }
  enableForm() {
    this.form.enable();
    this.responseAvailable = true;
    this.submitInProgress = false;
  }
  disableForm() {
    this.form.disable();
    this.responseAvailable = false;
    this.submitInProgress = true;
  }
}
