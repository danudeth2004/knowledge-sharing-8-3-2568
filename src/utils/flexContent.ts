import { FlexContainer } from "@line/bot-sdk/dist/messaging-api/model/flexContainer";

export const flexMessage = async (profile: { displayName: string, pictureUrl: string, statusMessage?: string }) => {
  let flexContents: FlexContainer

  if (profile?.displayName && profile?.pictureUrl) {
    flexContents =
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": profile.pictureUrl || "https://via.placeholder.com/1024",
        "size": "full",
        "aspectRatio": "1:1",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": profile.displayName || "...",
            "weight": "bold",
            "size": "xl",
            "align": "center",
            "color": "#333333"
          },
          {
            "type": "text",
            "text": profile.statusMessage || "...",
            "size": "sm",
            "align": "center",
            "color": "#777777",
            "wrap": true,
            "margin": "md"
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "color": "#06C755",
            "action": {
              "type": "uri",
              "label": "เพิ่มเพื่อน",
              "uri": "https://line.me/R/ti/p/~your-line-id"
            }
          },
          {
            "type": "button",
            "style": "secondary",
            "action": {
              "type": "uri",
              "label": "ดูโปรไฟล์",
              "uri": "https://line.me/ti/p/~your-line-id"
            }
          }
        ]
      }
    };
  } else {
    flexContents = {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Flex Message",
            "size": "lg"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://developers.line.biz/media/messaging-api/using-flex-message-simulator/mary.png",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Pang",
            "align": "center"
          },
          {
            "type": "text",
            "text": "Computer Science",
            "align": "center"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Visit Our Website",
                  "uri": "http://linecorp.com/"
                },
                "style": "primary"
              }
            ]
          }
        ]
      },
      "styles": {
        "header": {
          "backgroundColor": "#00B900"
        }
      }
    }
  }

  return flexContents
}