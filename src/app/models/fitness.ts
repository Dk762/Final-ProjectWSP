export class Fitness{
    Routine:string[] = [
        "Do cycling everyday",
        "eat 2 eggs in the morning",
        "take light dinner everyday"
    ];
    Users:User[] = [];
    Completed:Routine[] = [
        { Task: "10 min running", UserName:'Dk', Completed:true },
        { Task: "15 min swimming", UserName:'Kp', Completed:true}
    ];
}
export class User{
    Name:string;
}

export class Routine{
   Task:string;
   UserName:string;
   Completed:boolean = false;
   
   
}