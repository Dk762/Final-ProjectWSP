export class Fitness{
    
    Users:User[];
    Picture: {
        url: string
    };
    ChosenTask:Routine[];

    CompletedTask:Routine[] = [
        
    ];
}
export class User{
    Name: string;
    Routines: string[];
}

export class Routine{
   Task:string;
   UserName:string;
   Chosen:boolean = false;  
}