import { Component, OnInit } from '@angular/core';
import { MINIS } from '../mock-mini';
import { Mini } from '../mini';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css'],
})
export class MiniForfaitComponent implements OnInit {
  minis: Mini[] = MINIS;

  constructor() {}

  ngOnInit(): void {}
}
