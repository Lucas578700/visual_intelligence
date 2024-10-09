import { Component, inject, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import {
  ActionBarComponent,
  ListViewComponent,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  RouterExtensions,
} from "@nativescript/angular";
import { ActionBar } from "@nativescript/core";

@Component({
  selector: "ns-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
  standalone: true,
  imports: [
    ListViewComponent,
    NativeScriptRouterModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    ActionBarComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SignupComponent {
  private router = inject(RouterExtensions);
  form = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    telefone: new FormControl("", [Validators.required, Validators.pattern(/^\d{10,11}$/)]),
    senha: new FormControl("", [Validators.required, Validators.minLength(5)]),
  });
  get nome(){
    return this.form.get("nome");
  }
  get email() {
    return this.form.get("email");
  }
  get telefone() {
    return this.form.get("telefone");
  }
  get senha() {
    return this.form.get("senha");
  }
  submit() {
    if (this.form.valid) {
      const nome = this.nome.value;
      const email = this.email.value;
      const telefone = this.telefone.value;
      const senha = this.senha.value;
      this.router.navigate(["/signin"], { clearHistory: true });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
