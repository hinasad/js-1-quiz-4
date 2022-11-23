// create an array named "StudentDetails" then add 5 users in object add name and password in each object then
// For example


let StudentDetail1 = [
   {
         name: "Jack",
         password: 1234
     }
    ];

let StudentDetails2 = [
   {
         name: "Jack",
         password: 1234
     }
    ];
    
    let StudentDetails3 = [
        {
              name: "Jack",
              password: 1234
          }
         ];    
    let merged = []


const AddUser = () => {
    for(let i=0; i<= StudentDetail1.length; i++){
    merged.push({
        ...StudentDetail1[i],
        ...StudentDetails2[i],
        ...StudentDetails3[i]
        })  
    }

}
console.log(AddUser(merged))


