export class Address {
                street:string;
                suite:string;
                city:string;
                zipcode:string;
}

export class User {
        id:number;
        name:string;
        email:string;
        phone:number;
        address=new Address();
}