but1.onclick = function multiply() {
    result.innerHTML = (test.value)*(test2.value);
    if (((test.value)*(test2.value))%2 == 0) {
        no_type.innerHTML = "even";
        }
    else{
        no_type.innerHTML = "odd";
}
}
plus.onclick = function adding() {
    result.innerHTML = (Number(test.value))+(Number(test2.value));
    if (((test.value)+(test2.value))%2 == 0) {
        no_type.innerHTML = "even";
        }
    else{
        no_type.innerHTML = "odd";
}

}
div.onclick = function divide(){
    result.innerHTML = (Number(test.value))/(Number(test2.value));
    if (((test.value)/(test2.value))%2 == 0) {
        no_type.innerHTML = "even";
        }
    else{
        no_type.innerHTML = "odd";
    ((Number(test.value))/(Number(test2.value))).toFixed(frac);
}
}
minus.onclick = function minus() {
    result.innerHTML = (Number(test.value))-(Number(test2.value))
    if (((test.value%2)-(test2.value)) == 0) {
        no_type.innerHTML = "even";
        }
    else{
        no_type.innerHTML = "odd";
}
}

for(counter = 0 ;counter < 20; counter++){
    document.write("<p>Thanks for using my calculator</p>");
}


const my_array = [
    {
        club: "Real Madrid",
        champions_league: 14
    },
    {
        club: "AC Millan",
        champions_league: 7
    },
    {
        club: "Man Utd",
        champions_league: 3
    }
]
for(counter2 = 0;counter2 < my_array.length; counter2++){
    document.write(`
    <p> ${my_array[counter2].club} </p>
    <p> ${my_array[counter2].champions_league} </p>
    `
    
        )
}

//push to add element at the end//
//pop is the oaddpposite to push//
//unshift to  an element at the top//
//shift to remove an element at the top//

const array_data = [
    {
        name: "Omar",
        password: 7711
    },
    {
        namr: "Bellingham",
        password: 1405  
    }
]

var user_input_name;
var user_input_password;
user_input.onclick = function user_data(){
    user_input_name = user_name.value
    user_input_password = user_password.value
    array_data.push({
        name: user_input_name,
        password: user_input_password,
    }
    )
    console.log(array_data)
}
var array_1 = ["Ahmed", "Omar", "Mostafa"];
var array_2 =  [
    20,
    22,
    28
];
var array_3 = [
    5,
    11,
    14
];
var array_4 = []
for(count1 = 0; count1 < array_2.length; count1++){
    array_4.push(array_2[count1]/array_3[count1])
    console.log(array_4)
}
function generate_year(x,y){
for(count2 = x; count2 <= y; count2++){
    console.log(count2)
}
}
console.log(generate_year(2000,2026))

var arr1 = array_1.concat(array_2,array_3,array_4)
console.log(arr1)

console.log(array_1.join(""))

var o = "Omar"
console.log(o.split(""))

// Homework Tasks:
//1- Make a data base
//2- Make two buttons
//3- if user pressed on show details button
//4- if user pressed on sign up button show up on sign up page then after signing up save the user data
//5- if user pressed on show details button the user must put its 