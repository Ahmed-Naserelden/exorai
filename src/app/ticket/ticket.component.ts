import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() productimage: String | undefined;
  @Input() productname: String="product one";
  @Input() productprice: Number | undefined;
  @Input() location: String | undefined;
  @Input() since: String | undefined;

  isLiked: boolean = false;
  
  toggleLike() {
    this.isLiked = !this.isLiked;
  }

}
