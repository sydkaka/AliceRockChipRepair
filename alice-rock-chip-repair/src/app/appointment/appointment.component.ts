import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-appointment',
  imports: [FormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appointment = {
    name: '',
    phone: '',
    date: '',
    message: '',
  };

  submitAppointment() {
    console.log('Appointment booked:', this.appointment);

    emailjs
      .send('service_eaamngg', 'template_ss1k1mh', this.appointment, 'Pn0sMOwkUNGiM54qq')
      .then(
        (response) => {
          alert('Your appointment has been booked successfully!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('There was an error sending your email. Please try again later.');
        }
      );
    
  }
}
