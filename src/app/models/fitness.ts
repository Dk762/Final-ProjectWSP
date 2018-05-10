export class Fitness{
    
    Users:User[] = [
        { Name: 'Dhaval', Routines: [] },
        { Name: 'Patel', Routines: [] },
        { Name: 'Kp', Routines: [] },
    ];
    ChosenTask:Routine[] = [
        {Task: "Perfect Meal", UserName: "DK", Chosen:false}
    ];
    Picture: {
        
    };
    Completed:Routine[] = [
        
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