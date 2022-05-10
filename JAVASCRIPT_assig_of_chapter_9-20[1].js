function C9q1() {
    let city = prompt("Enter the name of your city");
    city = city.toLowerCase();
    if (city === "karachi") {
        document.write("Welcome to the city of lights");
    }
}
function C9q2() {
    let gender = prompt("Enter the your gender");
    gender = gender.toLowerCase();

    if (gender === "male") {
        document.write("Good Morning Sir");
    }
    else if (gender === "female") {
        document.write("Good Morning Ma'am");
    }
    else {
        document.write("Sorry not available");
    }
}
function C9q3() {
    let trafficLight = prompt("Enter the color of traffic light");
    trafficLight = trafficLight.toLowerCase();
    if (trafficLight === "red") {
        document.write("Must Stop");
    }
    else if (trafficLight === "green") {
        document.write("MOve now");
    }
    else if (trafficLight === "yellow") {
        document.write("Ready to move");

}
function C9q4() {

    let fuel = Number(prompt("Enter the litres of fuel"));
    if (fuel < 0.25) {
        document.write("PLease refill your fuel");
    }
    else {
        document.write("go ahead");

    }
}
function C9q5() {
    let a = 4;
    if (++a === 5) {
        alert("true");
    }

    let b = 82;
    if (b++ === 83) {
        alert("true");
    }

    let c = 12;
    if (c++ === 13) {
        alert("1 true");
    }
    if (c === 13) {
        alert("2 true");
    }
    if (++c < 14) {
        alert("3 true");
    }
    if (c === 14) {
        alert("4 true");
    }

    let materialCost = 20000;
    let laborCost = 2000;
    let totalCost = materialCost + laborCost;
    if (totalCost === materialCost + laborCost) {
        alert("The costs Equal");
    }

    if (true) {
        alert("true");
    }
    if (!false) {
        alert("false");
    }
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}
function C9q6() {

    let english = Number(prompt("Enter the number of English = "));
    let urdu = Number(prompt("Enter the number of Urdu = "));
    let maths = Number(prompt("Enter the number of maths = "));
    let marks = english + urdu + maths;
    let percentage = marks * 100 / 300;
    let grade;
    if (percentage >= 80) {
        alert("Excellent your grade is A-ONE");
        grade = "A - One";
    }
    else if (percentage >= 70) {
        alert("Good your grade is A");
        grade = "A";
    }
    else if (percentage >= 60) {
        alert("Fair your grade is B");
        grade = "B";
    }
    else {
        alert("Sorry You are failed");
        grade = "Failed";
    }
    alert("YOur percentage is " + percentage + "%");

    document.write("Total : 300" + "<br>");
    document.write("Marks obtained : " + marks + "<br>");
    document.write("Perentage : " + percentage + "<br>");
    document.write("Grade : " + grade + "<br>");

}
function C9q7() {
    let a = Math.floor((Math.random() * 10) + 1);
    let b = Number(prompt("Enter a number = "));
    if (a === b) {
        alert("Bingo!correct answer");
    }
    else if (a === b + 1 || a === b - 1) {
        alert("TRy again you are close enough")
    }
    else {
        alert("sorry u are failed")
        b = Number(prompt("Enter a number = "));
        if (a === b) {
            alert("Bingo U are WIn");
        }
        else if (a === b + 1 || a === b - 1) {
            alert("TRy again u are close enough")
        }
        else {
            alert("sorry u are failed")
            b = Number(prompt("Enter a number = "));
            if (a === b) {
                alert("Bingo you win");
            }
            else if (a === b + 1 || a === b - 1) {
                alert("TRy again u are close enough")
            }
            else {
                alert("sorry u are failed")
            }
        }
    }
}
function C9q8() {
    let a = Number(prompt("enter a number = "))
    if (a / 3 === 0) {
        alert("it is divisible by 3")
    }
    else {
        alert("it is not divisible by 3")

    }
}
function C9q9() {
    let a = Number(prompt("ENter a number = "))
    if (a % 2 === 0) {
        alert("it is EVEN");
    }
    else {
        alert("it is ODD");
    }

} function C9q10() {
    var temp = Number(prompt("Enter temperature:"));
    if (temp > 40) {
        alert("It is too hot outside.")
    }
    else if (temp > 30 && temp <= 40) {
        alert("The Weather today is Normal.")
    }
    else if (temp > 20 && temp <= 30) {
        alert("Today’s Weather is cool.")
    }
    else if (temp > 10 && temp <= 20) {
        alert("“OMG! Today’s weather is so Cool.")
    }
    else {
        alert("Very Cold")
    }

} function C9q11() {

    let firstNumber = Number(prompt("Enter the First Number"));
    let operation = prompt("Enter the opertation");
    let secondNumber = Number(prompt("Enter the second Number"));
    if (operation == '+') {
        alert(firstNumber + secondNumber);
    }
    else if (operation == '-') {
        alert(firstNumber - secondNumber);
    }
    else if (operation == '*') {
        alert(firstNumber * secondNumber);
    }
    else if (operation == '/') {
        alert(firstNumber / secondNumber);
    }
    function C12q1() {
        let c = prompt("Enter a character = ");
    
        let ch = c.charCodeAt(0);
    
        if (ch >= 48 && ch <= 57) {
            document.write(`Entered character is a Number`);
        }
        else if (ch >= 97 && ch <= 90) {
            document.write(`Entered character is an Upper case letter`);
        }
        else if (ch >= 60 && ch <= 122) {
            document.write(`Entered character is a Lower case letter`);
        }
        else {
            document.write(`Entered character is neither number nor letter`);
    
        }
    }
    function C12q2() {
        let a = Number(prompt("Enter the First number = "));
        let b = Number(prompt("Enter the Second number = "));
    
        if (a === b) {
            alert("First number is equals to second number");
        }
        else if (a > b) {
            alert("First number is greater than second number");
        }
        else {
            alert("First number is less than second number");
        }
    }
    function C12q3() {
        let a = Number(prompt("Enter the number = "));
        if (a > 0) {
            alert("it is a positive number");
        }
        else if (a === 0) {
            alert("it is a zero");
        }
        else {
            alert("it is a negative number");
        }
    
    }
    function C12q4() {
        let a = prompt("Enter a character = ");
        // let vowels = ("a", "e", "i", "o", "u");
        let vowels = "aeiou";
        let v = true;
    
        // alert(vowels[0]);
        // alert(vowels[1]);
        // alert(vowels[2]);
        // alert(vowels[3]);
        // alert(vowels[4]);
        for (let i = 0; i < vowels.length; i++) {
            if (a === vowels[i]) {
                alert("it is a vowel");
                v = false;
            }
        }
        if (v) {
            alert("it is not a vowel");
        }
    }
    function C12q5() {
        let myPassword = "harry123";
        let password = prompt("Enter the password less than 10 characters");
        for (let i = 0; i < 100; i++) {
            if (password === "") {
                password = prompt("Please Enter your password");
            }
            else {
                if (password === myPassword) {
                    alert("YOur Password is correct");
                }
                else {
                    alert("YOur Password is incorrect");
                }
                break;
            }
        }
    }
    function C12q6() {
    
        var greeting;
        var hour = 13;
        if (hour < 18) {
            greeting = "Good day";
        }
        else {
            greeting = "Good evening";
        }
    }
    function C12q7() {
        let userTime = prompt("Enter the time in numbers like 1900 = 7pm = ");
        let a;
        if (userTime == 0) {
            alert("12AM");
            alert("GooD night");
        }
        else if (userTime == 1200) {
            alert("12PM");
            alert("GooD Evening");
        }
        else if (userTime <= 1000) {
            alert(userTime[0] + "AM");
            alert("GOod morning");
        }
        else if (userTime < 1200) {
            alert(userTime[0] + userTime[1] + "AM");
            alert("GOod morning");
        }
        else if (userTime <= 2100) {
            a = Number(userTime) - 1200
            a = a.toString();
            alert(a[0] + "AM");
            if (userTime < 1700) {
                alert("Good Afternoon");
            }
            else {
                alert("Good Evening");
            }
        }
        else if (userTime < 2400) {
            a = Number(userTime) - 1200
            a = a.toString();
            alert(a[0] + a[1] + "PM");
            alert("Good night");
    
        }
        else {
            alert("Sorry! This time is out of 24 hours");
        }
        function C14q1() {
            document.write(`var array[];`);
        }
        function C14q2() {
            document.write(`var array[];`);
        
        }
        function C14q3() {
        document.write(`var stringArray=["one", "two", "three"];`)
        }
        function C14q4() {
        document.write(` var numArray = [1, 2, 3, 4];`)
        }
        function C14q5() {
            document.write(`var boolArray = [true, false, false, true];`)
        }
        function C14q6() {
            document.write(`var mixedArray = [1, "two", "three", 4];`)
        }
        function C14q7() {
         var qualifications=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
         for (let i = 0; i < qualifications.length; i++) {
             document.write(qualifications[i]+"<br>")
             
         }
        }
        function C14q8() {
         var students=["Tuba","Huzaifa", "Areeba"];
         var scores=[450,465,436];
         for (let i = 0; i < 3; i++) {
         document.write(`Score of ${students[i]} is ${scores[i]}.Percentage: ${(scores[i]/500)*100}<br>`)
             
         }
        }
        function C14q9() {
            var colors = ["Red", "Green", "Blue"];
            document.write(colors + "<br>");
            
            
            
            
            // a.
            var a = prompt("What color do you want to add to the beginning?");
            colors.unshift(a);
            document.write(colors + "<br>");
            
            // b.
            var b = prompt("What color do you want to add to the end?");
            colors.push(b);
            document.write(colors + "<br>");
            
            // c.
            colors.unshift("Pink", "Orange");
            document.write(colors + "<br>");
            
            // d.
            colors.shift(0);
            document.write(colors + "<br>");
            
            // e.
            colors.pop();
            document.write(colors + "<br>");
            
            // f.
            var d = prompt("What color do you want to add?");
            var e = prompt("Give the position of color: ");
            var f = parseInt(e);
            colors.splice(f, 0, d);
            document.write(colors + "<br>");
            
            
            // g
            var g = prompt("What color do you want to delete?");
            var h = prompt("Give the position of color: ");
            var i = parseInt(e);
            colors.slice(i, 0, g);
            document.write(colors + "<br>");
        }
        function C14q10() {
         var score=[320,230,480,120];
         document.write(score.sort());
        }
        function C14q11() {
        
            var cities = ["karachi", "islamabad", "quetta", "peshawar","lahore"];
            var selectedcities = cities.slice(1,3);
            document.write(selectedcities);
        }
        function C14q12() {
            var array=["This", "is", "my", "cat"];
            var string=array.join(" ")
            document.write(`<h1>Array:<h1> ${array}<br> <h1>String<h1>${string}`)
        }
        function C14q13() {
            let array = ["keyboard", "mouse", "printer", "monitor"];
            document.write(array);
        }
        function C14q14() {
            let array = ["keyboard", "mouse", "printer", "monitor"];
            let reversedarray = array.reverse();
            
            document.write(reversedarray);
        }
        function C14q15() {
             var phone=["Apple","Nokia", "Samsung", "Sony", "Haier"];
             document.write(`  <select name="${phone[0]}" id="${phone[0]}">
             <option value="${phone[1]}">${phone[1]}</option>
             <option value="${phone[2]}">${phone[2]}</option>
             <option value="${phone[3]}">${phone[3]}</option>
             <option value="${phone[4]}">${phone[4]}</option>
           </select>`)
        }
        function C17q1() {
            let arr1 = [
                [0,1,2,3],
                [1, 0, 1, 2],
                [2,1,0,1]
            ];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 4; j++) {
                    document.write(arr1[i][j]+"\t");
                }
                document.write("<br>")
            }
            }
            function C17q3() {
            for (let i = 1; i <= 10; i++) {
                document.write(i+"<br>");
            }
            }
            function C17q4() {
            let table = Number(prompt("Enter the number of table Which you want print"));
            let tableLength = Number(prompt("Enter the length of the table"));
            for (let i = 1; i <= tableLength; i++) {
                document.write(table + " x " + i + " = "+table * i+"<br>");
                console.log(table + " x " + i + " = "+table * i+"\n");
            }
            }
            function C17q5() {
            let fruits = [
                "apple",
                "mango",
                "banana",
                "peach",
                "orange"
            ];
            for (let i = 0; i < fruits.length; i++) {
                console.log(`ment at index ${i} is ${fruits[i]}`+"\n");
                document.write("Element at index " + i + " is "+fruits[i]+"<br>");
            }
            }
            function C17q6() {
            document.write("Counting : "+"<br>"+"<br>");
            for (let i = 0; i <= 15; i++) {
                document.write(i);
                if (i < 15) {
                    document.write(", ");
                }
            }
            
            document.write("<br>"+"<br>"+"Reverse Counting : "+"<br>"+"<br>");
            for (let i = 10; i >= 1; i--) {
                document.write(i);
                if (i > 1) {
                    document.write(", ");
                }
            }
            
            document.write("<br>"+"<br>"+"Even : "+"<br>"+"<br>");
            for (let i = 0; i <= 20; i+=2) {
                document.write(i);
                if (i < 20) {
                    document.write(", ");
                }
            }
            
            document.write("<br>"+"<br>"+"Odd : "+"<br>"+"<br>");
            for (let i = 1; i <= 20; i+=2) {
                document.write(i);
                if (i < 20) {
                    document.write(", ");
                }
            }
            document.write("<br>"+"<br>"+"Series : "+"<br>"+"<br>");
            for (let i = 2; i <= 20; i+=2) {
                document.write(i);
                if (i <= 20) {
                    document.write("k, ");
                }
            }
            }
            function C17q7() {
                let A = [
                    "cake",
                    "apple pie",
                    "cookie",
                    "chips",
                    "patties"
                ]
            
                let user = prompt("Welcome to the mathew's bakery. What do you want sir / Madam");
                user = user.toLowerCase();
                let a = false;
            
                for (let i = 0; i < 6; i++) {
                    if (user === A[i]) {
                        alert(user + " is available at index " + i + " in our bakery");
                        a = true;
                        break;
                    }
                }
                if (!a) {
                    alert("We are Sorry, " + user + " is not available in our bakery ");
                }
            }
            function C17q8() {
                var arr = [24, 53, 78, 91, 12];
                document.write(`Array Items: ${arr}<br>
                                Largest number is: ${Math.max(...arr)}`)
            }
            function C17q9() {
                var arr = [24, 53, 78, 91, 12];
                document.write(`Array Items: ${arr}<br>
                                Smallest number is: ${Math.min(...arr)}`);
            
            }
            function C17q10() {
                var a = 5;
                for (let index = 1; index <= 20; index++) {
                    document.write(` ${a * index}, `)
            
                }