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
import { ActionBar, Image, ImageSource, Screen } from "@nativescript/core";
import { srcProperty } from "@nativescript/core/ui/image";

interface Face {
  bounds: {
    origin: {
      x: number;
      y: number;
    };
    size: {
      width: number;
      height: number;
    }
  }
}

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
    faces: Face[] = [];  
    screenScale = Screen.mainScreen.scale;
  
    async teste() {
      console.log("Botão Clicado!");
      console.log(MLKitView.isAvailable());
      
      const source = ImageSource.fromFileSync('~/assets/img/pessoas.png');
      console.log(source);
      
      const result = await detectWithStillImage(source, {
        detectorType: DetectionType.Face,
        objectDetection: {
          classification: true,
          multiple: true,  
        }
      });
      
      console.log(JSON.stringify(result));
      this.faces = result.face || [];  
      console.log(this.faces);
    }
  }
  
  // export class HomeComponent {

  //   face: Face;

  //   screenScale = Screen.mainScreen.scale;

  //   async teste() {
  //       console.log("Botão Clicado!")
  //       console.log(MLKitView.isAvailable());
  //       const source = ImageSource.fromFileSync('~/assets/img/messi.jpg');
  //       console.log(source);
  //       const result = await detectWithStillImage(source, {
  //           detectorType: DetectionType.Face,
  //           objectDetection: {
  //               classification: true,
  //               multiple: true,
  //           }
  //       });
  //       console.log(JSON.stringify(result));
  //       const faces: Face[] = result.face;
  //       console.log(faces[0]);
  //       this.face = faces[0];
        
  //   }
  // }
