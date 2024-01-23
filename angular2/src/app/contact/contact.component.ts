import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13820.58202059733!2d31.7004398!3d30.0039781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7be06116bd%3A0xe31ce7f91bca161d!2sGerman%20International%20University%20-%20GIU!5e0!3m2!1sen!2seg!4v1701378375486!5m2!1sen!2seg";

   
}
