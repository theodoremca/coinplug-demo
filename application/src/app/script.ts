
import * as OneSignal from "onesignal-node";
import {CreateNotificationBody} from "onesignal-node/lib/types";
const client = new OneSignal.Client("3ae5839d-7b67-461a-82f9-c8d7b88027f4", "ZjVhOGMzNTYtZjk2OC00YzM5LTg2ZmEtNDAzZGI2MjVkNWU2");


export const sendBroadcast = (message: string, title?:string) => {
  const notification = {
    contents: {
      "en": message,
    },
    headings: {
      "en": title,
    },
    included_segments: ["Subscribed Users"],
  } as CreateNotificationBody;
  return client.createNotification(notification);
};


export const sendNotification = (accountIds:string[], message:string, title?:string) => {
  const notification = {
    contents: {
      "en": message,
    },
    headings: {
      "en": title,
    },
    include_external_user_ids: ["210488"],
  } as CreateNotificationBody;
  return client.createNotification(notification);
};


export const sendNotificationc = (message="500 BTC was Transfer to your account", title="New Deposit") => {
  const notification = {
    contents: {
      "en": message,
    },
    headings: {
      "en": title,
    },
    // included_segments: ["Subscribed Users"],
    include_external_user_ids: ["2024-01-29T09:25:23.637693"],
  } as CreateNotificationBody;
  return client.createNotification(notification);
};
