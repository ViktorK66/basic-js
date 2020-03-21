class VigenereCipheringMachine {
    constructor(direct = true) {
      this.direct = direct;
    }

    encrypt(message, key) {
      return this.encoder(message,key,'encrypt');
    }

    decrypt(encryptedMessage, key){
      return this.encoder(encryptedMessage,key,'decrypt');
    }

    encoder(message, key,process){
      if(!message,!key) throw Error;
      let upperCaseMessage = message.toUpperCase();
      let upperCaseKey = key.toUpperCase();
      let encoderArray = [];
      let length = key.length;
      let keyPointer=0;

      for (let i=0;i<upperCaseMessage.length;i++){
        let letterCodeASCII=upperCaseMessage[i].codePointAt(0);
          if (letterCodeASCII<65 || letterCodeASCII>90) {
            encoderArray.push(upperCaseMessage[i]);
          } else {
            let positionKey = keyPointer%length;
            let offset = upperCaseKey[positionKey].codePointAt(0)-65;

            if (process == 'encrypt') {
              if ((letterCodeASCII+offset)>90) {
                encoderArray.push(String.fromCharCode(letterCodeASCII+offset-26));
              } else {
                  encoderArray.push(String.fromCharCode(letterCodeASCII+offset));
                }
            } else if (process == 'decrypt') {
                     if ((letterCodeASCII-offset)<65) {
                       encoderArray.push(String.fromCharCode(letterCodeASCII-offset+26));
                     } else {
                         encoderArray.push(String.fromCharCode(letterCodeASCII-offset));
                       }
                     };
            keyPointer++;
          }
      }

      if (this.direct) return encoderArray.join('');
      return encoderArray.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
