import * as CryptoJS from "crypto-js";
import { useEffect, useState } from "react";
function App() {
  const[encryp,setencryp]=useState('')
  const [text,settext]= useState('')
  const[decrypt,setdecrypt]= useState('')
  let key1 = "C581A0FCA5A083EDD8C0342CA3AFBB6C"; //32characters
  let IV1 = "7E9F533574310709"; //16characters
  var data1 = [{ id: 1 }, { id: 2 }];
  var data2 = [{ id: 1, name: "sagar" }];

  let msg1 = "Test String";

//   useEffect(()=>{
// console.log('effec')
//   },[encryp,decrypt])

  function calculate(data){
      const key = key1;
      const iv = IV1;
      const cipher = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        CryptoJS.enc.Utf8.parse(key),
        {
          iv: CryptoJS.enc.Utf8.parse(iv), // parse the IV
          padding: CryptoJS.pad.Pkcs7,
          mode: CryptoJS.mode.CBC,
        }
      );
      setencryp(cipher.toString());
       
    };
  
  function getDecryptedCode(data) {
    var key = CryptoJS.enc.Utf8.parse(key1);
    var iv = CryptoJS.enc.Utf8.parse(IV1);
    var ciphertext = CryptoJS.enc.Base64.parse(data);
    var encryptedCP = CryptoJS.lib.CipherParams.create({
      ciphertext: ciphertext,
      formatter: CryptoJS.format.OpenSSL,
    });
    var decryptedWA = CryptoJS.AES.decrypt(encryptedCP, key, {
      iv: iv,
    });
    var decryptedUtf8 = decryptedWA.toString(CryptoJS.enc.Utf8);
    setdecrypt(decryptedUtf8)
    return
  }
 

  return (
    <>
      <div>
      <h1>Welcome</h1>
      <input value={text} onChange={(e)=> settext(e.target.value)}/>
      {encryp && <h1>{encryp}</h1>}
      {decrypt && <h1>{decrypt}</h1>}
      <button onClick={()=>calculate(text)}>CALCULATE</button>
      <button onClick={ ()=>getDecryptedCode(encryp)}>Decrypt</button>
      </div>
    </>
  );
}

export default App;

// // Encrypt
// var ciphertext = CryptoJS.AES.encrypt(msg1, key).toString();
// console.log(ciphertext)
// console.log('key', key1)

// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, key1);
// var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

// console.log('asas',ciphertext);
// console.log(decryptedData); // [{id: 1}, {id: 2}]

//   function randomStr(len, arr) {
//   var ans = '';
//   for (var i = len; i > 0; i--) {
//       ans +=
//         arr[Math.floor(Math.random() * arr.length)];
//   }
//   return ans;
// }
//  let key1 = randomStr(32, '123456789abcdefghijklmnopqrstuvwxyz@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ')

// const result = Math.random().toString(36).substring(1,35);

// var hash = CryptoJS.SHA256(data);

// console.log('key',hash.toString(CryptoJS.enc.Base64)
// )

// var key = CryptoJS.enc.Utf8.parse(key1);     // Use Utf8-Encoder.
// var iv  = CryptoJS.enc.Utf8.parse('jm8lgqa3j1d0ajus');                     // Use Utf8-Encoder

// var encryptedCP = CryptoJS.AES.encrypt("my name is sagar", key, { iv: iv });
// var decryptedWA = CryptoJS.AES.decrypt(encryptedCP, key, { iv: iv});

// var encryptedBase64 = encryptedCP.toString();                              // Short for: encryptedCP.ciphertext.toString(CryptoJS.enc.Base64);
// var decryptedUtf8 = decryptedWA.toString(CryptoJS.enc.Utf8);               // Avoid the Base64 detour.
//                                                                             // Alternatively: CryptoJS.enc.Utf8.stringify(decryptedWA);
// console.log("Ciphertext (Base64)  : " + encryptedBase64)
// console.log("Decrypted data (Utf8): " + decryptedUtf8);
