import { fstat, readFileSync, writeFile, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import * as fs from 'node:fs';
export const guardarData=async(data)=>{
    //const data = new Uint8Array(Buffer.from('Hello Node.js'));
    writeFileSync('./db/message.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
}
export const leerDB=()=>{
  
  if(fs.existsSync('./db/message.json')){
    const info=  fs.readFileSync('./db/message.json',{encoding:'utf-8'});
    const data=JSON.parse(info);
    //console.log(data);
    return data;
  }
  else{
    return null
  }
  
}
