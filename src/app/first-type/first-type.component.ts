import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-type',
  templateUrl: './first-type.component.html',
  styleUrls: ['./first-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstTypeComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
