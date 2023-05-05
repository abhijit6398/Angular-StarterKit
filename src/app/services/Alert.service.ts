import { Injectable } from "@angular/core";
import { NotificationService } from "@progress/kendo-angular-notification";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private notificationService: NotificationService) {}
  public displayNotification(data: {
    type: "none" | "success" | "warning" | "error" | "info" | undefined;
    msg: string;
  }): void {
    this.notificationService.show({
      content: data.msg,
      position: { horizontal: "right", vertical: "top" },
      type: { style: data.type, icon: true },
      hideAfter: 2000,
    });
  }
}
