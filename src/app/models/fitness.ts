export class Fitness{
    Routine:string[] = [
        "Do cycling everyday",
        "eat 2 eggs in the morning",
        "take light dinner everyday"
    ];
    Users:User[] = [
        { Name: 'Dhaval'}
    ];
    ChossenTask:Routine[] = [
        
    ]
    Completed:Routine[] = [
        
    ];
}
export class User{
    Name: string;
}

export class Routine{
   Task:string;
   UserName:string;
   Completed:boolean = false;  
}