export class Fitness{
    Routine:string[] = [
        "Do cycling everyday",
        "eat 2 eggs in the morning",
        "take light dinner everyday"
    ];
    Users:User[] = [
        { Name: 'Dk' }
    ];
    Completed:Routine[] = [
        { Task: "Walk 2 Miles", UserName:'Dk', Completed: true } 
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