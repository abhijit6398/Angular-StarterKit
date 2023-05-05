import {
  Component,
  Input,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core'
//import { Router } from '@angular/router';

@Component({
  selector: 'CustomModal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
})
export class ModalsComponent {
  @Input() opened: boolean = false
  @Input() msg: string = 'Please Confirm'

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() saveData: EventEmitter<boolean> = new EventEmitter<boolean>()

  // ngOnChanges(changes: SimpleChanges) {
  //  if(changes['opened'].firstChange) return;
  //  this.opened = changes['opened'].currentValue;
  // }

  ngOnInit(): void {}

  close(): void {
    this.opened = false
    this.closeModal.emit(this.opened)
  }

  save(): void {
    this.opened = false
    this.saveData.emit(this.opened)
  }

  ngDoCheck(): void {}
}
