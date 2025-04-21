import { Component,Input  } from '@angular/core';

@Component({
  selector: 'atla-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  // @Input() loading: boolean = false;
  @Input() message: string = 'Loading...';

}
