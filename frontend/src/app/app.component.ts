import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import {EngineService} from "./engine.service";

import * as THREE from 'three';

// import {Project, Scene3D} from "enable3d";
// import 'enable3d';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private engine: EngineService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.addLangs(["en", "de"]);
    this.translate.setDefaultLang(this.translate.langs[0]);

    // new Project({scenes: [Scene3D]});

    // this.engine.scene = new THREE.Scene();
    console.log('hello');
  }

  updateLanguage(event: any): void {
    this.translate.use(event.target.value);
  }
}
