import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EngineService} from "../../../engine.service";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  greetResponse = "";

  constructor(private engine: EngineService) {

  }

  async loadLib(): Promise<void> {
    // import('@enable3d/three-graphics').then(e => console.log(e));
  }

  updateGreetText(event: any): void {
    go.main.App.Greet(event.target.value).then((response: string) => this.greetResponse = response);
  }

  ngOnInit(): void {
    this.engine.createScene(this.rendererCanvas.nativeElement);
  }
}
