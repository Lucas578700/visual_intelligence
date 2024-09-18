import { Component, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { DetectionType, detectWithStillImage, MLKitView } from "@nativescript/mlkit-core";
import '@nativescript/mlkit-object-detection'
import {
  ActionBarComponent,
  ListViewComponent,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { ActionBar, Image, ImageSource } from "@nativescript/core";
import { srcProperty } from "@nativescript/core/ui/image";

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
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
  export class HomeComponent {

    async teste() {
        console.log("Botão Clicado!")
        console.log(MLKitView.isAvailable());
        const source = ImageSource.fromFileSync('~/assets/img/shoes.jpg');
        console.log(source);
        const result = await detectWithStillImage(source, {
            detectorType: DetectionType.Object,
            objectDetection: {
                classification: true,
                multiple: true,
            }
        });
        console.log(JSON.stringify(result));
        
    }
  }
