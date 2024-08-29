import { Component, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import {
  ListViewComponent,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

@Component({
  selector: "ns-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
  standalone: true,
  imports: [
    ListViewComponent,
    NativeScriptRouterModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SigninComponent {
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    senha: new FormControl("", [Validators.required, Validators.minLength(5)]),
  });
  get email() {
    return this.form.get("email");
  }
  get senha() {
    return this.form.get("senha");
  }
  submit() {
    if (this.form.valid) {
      const email=this.email.value
      const senha=this.senha.value
    } else {
      this.form.markAllAsTouched();
    }
  }
}
