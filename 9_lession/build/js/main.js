// utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: "asd123",
    title: "last project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// required and redonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = {
    ...assignGraded, verified: true
};
// recordAssignment(assignGraded) // error 
// all the key:values are required
recordAssignment({ ...assignGraded, verified: true });
// assignVerified.studentId = "abc456" // error
// because it is readonly
console.log(assignVerified.studentId);
// Record
const hexColorMap = {
    red: "FF0000",
    greed: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    "deep": "A",
    "meet": "B"
};
const gradeData = {
    deep: { assign1: 99, assign2: 100 },
    meet: { assign1: 92, assign2: 94 }
};
const score = {
    studentId: "qwe368",
    grade: 99
};
const preview = {
    studentId: "ghj780",
    title: "final project"
};
const myGrades = {
    "deep": "B"
};
const myGrades2 = {
    "deep": "A",
    "deep2": "B"
};
const myNames = {
    "Deep": "A",
    "pravin": "B",
    "vijay": "D"
};
console.log(myNames);
const createNewAssign = (title, points) => {
    return { title, points };
};
// here even if the functions return type changes it does not metter
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["the old world", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
let myUsers;
//  fetchUsers().then(users => myUsers = users);
myUsers = await fetchUsers();
if (myUsers) {
    console.log(myUsers);
}
export {};
//# sourceMappingURL=main.js.map