// utility Types

// Partial

interface Assignment{
    studentId: string,
    title:string,
    grade:number,
    verified?: boolean,
}

const updateAssignment = (assign:Assignment,propsToUpdate:Partial<Assignment>):Assignment =>{
    return {...assign, ...propsToUpdate}
}

const assign1:Assignment = {
    studentId:"asd123",
    title:"last project",
    grade:0,
}

console.log(updateAssignment(assign1,{grade:95}))
const assignGraded : Assignment = updateAssignment(assign1,{grade:95});

// required and redonly

const recordAssignment = (assign:Required<Assignment>):Assignment =>{
    return assign;
}

const assignVerified: Readonly<Assignment> ={
    ...assignGraded,verified:true
}

// recordAssignment(assignGraded) // error 
// all the key:values are required

recordAssignment({...assignGraded,verified:true});

// assignVerified.studentId = "abc456" // error
// because it is readonly

console.log(assignVerified.studentId)

// Record

const hexColorMap : Record<string,string> = {
    red:"FF0000",
    greed:"00FF00",
    blue:"0000FF"
}

type Students = "deep" | "meet";
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades : Record<Students,LetterGrades> = {
    "deep":"A",
    "meet":"B"
}

interface Grades {
    assign1:number,
    assign2:number,
}

const gradeData: Record<Students,Grades> = {
    deep:{assign1:99,assign2:100},
    meet:{assign1:92,assign2:94}
}

// Pick and omit

type AssignResult = Pick<Assignment,"studentId"|"grade"> // picks

const score : AssignResult = {
    studentId:"qwe368",
    grade:99
}

type AssignPreview = Omit<Assignment,"grade"|"verified"> // removes

const preview : AssignPreview = {
    studentId:"ghj780",
    title:"final project"
}

// exclude and extract

type adjustedGrade = Exclude<LetterGrades,"U">

const myGrades:Record<string,adjustedGrade> ={
    "deep":"B"
}

type highGrades = Extract<LetterGrades,"A"|"B">

const myGrades2 : Record<string,highGrades>={
    "deep":"A",
    "deep2":"B"
}

// NonNullable

type AllPossibleNames = "Deep"|"pravin"|"vijay"|null|undefined
type NamesOnly = NonNullable<AllPossibleNames>

const myNames: Record<NamesOnly,LetterGrades> = {
    "Deep":"A",
    "pravin":"B",
    "vijay":"D"
}
console.log(myNames)

// ReturnType

type NewAssign1 = {title:string,points:number};

const createNewAssign = (title:string,points:number):NewAssign1 =>{
    return {title,points}
}
// or
 type NewAssign2 = ReturnType<typeof createNewAssign>;
// here even if the functions return type changes it does not metter
 const tsAssign:NewAssign2 = createNewAssign("Utility Types",100)
 console.log(tsAssign)

 // Parameters

 type AssignParams = Parameters<typeof createNewAssign>;

 const assignArgs : AssignParams = ["the old world",100];

 const tsAssign2 : NewAssign2 = createNewAssign(...assignArgs)

 console.log(tsAssign2);

 // Awaited
 // helps us with the RuturnType of Promise


 interface User {
    id:number,
    name:string,
    username:string,
    email:string,
 }

 const fetchUsers = async ():Promise<User[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
        res => {
            return res.json();
        }
    ).catch(err => {
        if(err instanceof Error)console.log(err.message)
    })
    return data;
 }

 type FetchUsersReturnType = Awaited< ReturnType<typeof fetchUsers>>;

 let myUsers: FetchUsersReturnType; 

//  fetchUsers().then(users => myUsers = users);
 myUsers = await fetchUsers();

 if(myUsers){
     console.log(myUsers)
 }
 