import { Component, OnInit } from '@angular/core';
import { Forfait, MockData } from '@app/@shared/dataModels';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css'],
})
export class ForfaitComponent implements OnInit {
  forfaits: Forfait[] = MockData.FORFAITS;

  constructor() {}

  ngOnInit(): void {}
}
