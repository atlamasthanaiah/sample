import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'atla-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  messages: { text: string, sender: string }[] = [];
  newMessage: string = '';
  isMinimized = true;
  
  isChatVisible: boolean = false;
  name:any;
  animal:any;
  constructor(public dialog: MatDialog) {}

  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }

  // checking this code
  // sendMessage() {
  //   if (this.newMessage.trim()) {
  //     this.messages.push({ text: this.newMessage, sender: 'You' });
  //     this.newMessage = '';
      
  //   }
  // }

  // toggleMinimize() {
  //   this.isMinimized = !this.isMinimized;
  // }

  // ending
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ContactDialogComponent, {
  //     width: '350px',
  //     height: '350px',
      
  //   });

    
  // }
}
