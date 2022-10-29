import { Component, OnInit } from '@angular/core';
import { AlertController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Esto es una alerta!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Esto es una alerta!',
      buttons: [{
        text:'OK',
        handler: () => {
          console.log('Click en OK' );
        }
      },
      {
        text:'Cancel',
        role:'cancel',
      },
      {
        text:'Modal',
        handler: () => {
          console.log('Click en Modal' );
        }
      },
      {
        text:'OK',
        handler: () => {
          console.log('Click en OK' );
        }
      }],
    });

    await alert.present();
  }
  async presentModal() {
    const alert = await this.alertController.create({
      header: 'Introduce tu informacion',
      buttons: [{
        text:'OK',
        handler: (data: any) => {
          console.log(data);
        }
      },
      ],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
}
