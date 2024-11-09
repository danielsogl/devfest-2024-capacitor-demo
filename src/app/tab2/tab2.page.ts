import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class Tab2Page {
  private notificationId = 1;

  protected async scheduleNotification(): Promise<void> {
    await LocalNotifications.requestPermissions();

    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Test notification',
          body: 'Test notification',
          id: this.notificationId,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
        },
      ],
    });

    this.notificationId++;
  }
}
