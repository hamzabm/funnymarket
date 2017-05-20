import {Control}from '@angular/common'

export class EmailValidators{


    static validEmail(control:Control){
    return new Promise((resolve,reject)=>{
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               console.log(re.test(control.value));
                if(re.test(control.value)==false){
                    resolve({validEmail:true});
                }
                else resolve(null);
     
    })
    }
}