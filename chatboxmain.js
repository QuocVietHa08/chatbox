function myFunction() {
  Spreadsheet.openById(file_tkb);
}
 var today=new Date();
 var first = new Date(today.getFullYear(),6,29);
var theDay = Math.round(((today-first)/(1000*60*60*24))+.5,0);
 //tao bien
var week_1 =theDay/7;
var week_mod =theDay%7;
var week_col;
var week_row;
var message;

//ham xac dinh ngay nao trong sheet do

week_col=parsenInt(week_1)+1;
  week_row=week_mod;
var real_col =week_col +2;
var real_row =((week_row-1)*3+2);

//de lay data thi co dong code
var file_tkb;
file_tkb = 110fU8pGFGVmxV33C_v5RsWO5MrZICjEIs31FvLR1n2k;
var url=ss.getUrl();
var a=ss.getSheets()[0].getSheetValues(real_row+1,real_col,1,1);
var study_code=a[0][0];

//tao tu dien cho database
var DICTIONARY = {
  "MTT1" :"MANG MAY TINH 1";
  "SQL1":"HE QUAN TRI CO SO DU LIEU";
  "DH1": "DO HOA 1";
  "PTTK1":"PHAN TICH THIET KE SYSTEM";
}

//ham de viet message gui cho may
if(study_code != ""){

  var study_name =DICTIONARY[study-code];
  if(study_name == undefined {
     message ="Opp!!!\n lat nua cau phai hoc mon co ma la"+study_code+"tu 18h den 21h day nha";
     message =message +"\n vui long update lai lich trinh thoi khoa bieu de minh biet them nha";
     message= meassage +"\n neu ma moi la sai thi xem lai khoa bieu tai :" +url;
     } else {
     message ="hello :)))lat nua c phai hoc mon "+study_name+"tu 6h den 11h30 nha";
     }
     }else {
     message ="hom nay cau duoc nghi nha";
     }
     if(week_mode ==3){
    message =message +"\n Hom nay nho di tap nha";
    
    
    //viet ham function gui tin nhan ve chatwork
    
    function send_to_chatwork(textMessage){
      var room_id ="170443428";
      var API_TOKEN =485ece48b4e2828053f34ee653cd2b3a;
      var baseText ="[toall] Boss \n" +testMessage;//private user [to: 3997875]
      var headers = {
        "X-ChatWorkToken":485ece48b4e2828053f34ee653cd2b3a;
        }
  var payload = {
    "body": baseText
  }
  var options = {
    "method": "post",
    "headers": headers,
    "payload": payload,
    "muteHttpExceptions": true
  }
  UrlFetchApp.fetch("https://api.chatwork.com/v2/rooms/" + room_id + "/messages?force=0", options);
  Logger.log("Send Chatwork ok");
}
    
    //gui qua telegram va message
    //telegram
    function send_to_telegram(textMessage){
  var payload = {
    "method": "sendMessage",
    "chat_id": YOUR_CHAT_ID,
    "text": textMessage,
    "parse_mode": "HTML"
  }
  
  var data = {
    "method": "post",
    "payload": payload
  }
  var API_TOKEN = YOUR_API_BOT_TELEGRAM;
  UrlFetchApp.fetch('https://api.telegram.org/bot' + API_TOKEN + '/', data);
  Logger.log("Send Telegram ok");
}
    
    //Qua message
  function send_to_facebook(textMessage) {
  var recipient_ids = [YOUR_CHAT_ID];
  var API_TOKEN = YOUR_GRAPH_API_FACEBOOK
  for (var j = 0; j < recipient_ids.length; j++) {
    var messageData = {
      "recipient": {
        "id": recipient_ids[j]
      },
      "message": {
        "text": textMessage
      }
    }
    var JSONdMessageData = {}
    for(var i in messageData){
      JSONdMessageData[i] = JSON.stringify(messageData[i])
    }
    var payload = JSONdMessageData
    payload.access_token = API_TOKEN
    var options = {
      "method": "post",
      "payload": payload
    }
    
    UrlFetchApp.fetch("https://graph.facebook.com/v5.0/me/messages", options);
  }
  Logger.log("Send Facebook ok");
}  