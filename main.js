// let SHEET_ID = '1gUQYJD1asaVBULXlphUWNQLWVUTLc45PGTHed_dP5bw'
// let SHEET_TITLE = 'RecipeList';
// let SHEET_RANGE = 'B3:E50 '

// let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

// fetch(FULL_URL)
//     .then(res => res.text())
//     .then(rep => {
//         let data = JSON.parse(rep.substr(47).slice(0, -2));

//         // let player_Name_title = document.getElementById('player_Name_title');
//         // let player_Shoe_title = document.getElementById('player_Shoe_title');
//         // let player_Name = document.getElementById('player_Name');
//         // let length = data.table.rows.length;

//         // player_Name_title.innerHTML = data.table.rows[0].c[0].v;
//         // player_Shoe_title.innerHTML = data.table.rows[0].c[1].v;

//         // let selectOptionPlayer = document.createElement('select');
//         // player_Name.append(selectOptionPlayer);
//         // let selectOptionShoe = document.createElement('select');
//         // player_Shoe.append(selectOptionShoe);

//         // for(let i = 1; i<length; i++){
//         //     let NewBoxPlayer = document.createElement('option');
//         //     NewBoxPlayer.id = ("box" + i);
//         //     NewBoxPlayer.className = "Some_Style";
//         //     selectOptionPlayer.append(NewBoxPlayer);
//         //     NewBoxPlayer.innerHTML = data.table.rows[i].c[0].v;

//         //     let NewBoxShoe = document.createElement('option');
//         //     NewBoxShoe.id = ("box" + i);
//         //     NewBoxShoe.className = "Some_Style";
//         //     selectOptionShoe.append(NewBoxShoe);
//         //     NewBoxShoe.innerHTML = data.table.rows[i].c[1].v;
//         // }

//         // let test = data.table.rows[1].c[2].v;


//         // document.getElementById("parent").src=test;

//     })


fetch('https://script.google.com/macros/s/AKfycbzRkAKnLE7q4MWaSkVdIJM8p-4Kw4TB_GBDdskS2JcbWmWjJYnW8qKUjKcGmrazcw/exec')
    .then(res => res.json())
    .then(data => {
        let temp = [];

        Object.values(data).forEach(val => temp.push(val));

        console.log(temp);


        for(let i = 1; i<=8; i++){
            document.getElementById(i+"i").src = temp[0][i][8];
            document.getElementById(i+"t").innerHTML = temp[0][i][1];
            document.getElementById(i+"i2").src = temp[0][i][8];
            document.getElementById(i+"t2").innerHTML = temp[0][i][1];
            document.getElementById(i+"cal").innerHTML = temp[0][i][4] + " Calories";
            document.getElementById(i+"pro").innerHTML = temp[0][i][5] + "g Protein";
            document.getElementById(i+"car").innerHTML = temp[0][i][6] + "g Carbs";
            document.getElementById(i+"fat").innerHTML = temp[0][i][7] + "g Fat";
            document.getElementById(i+"cal2").innerHTML = temp[0][i][4] + " Calories";
            document.getElementById(i+"pro2").innerHTML = temp[0][i][5] + "g Protein";
            document.getElementById(i+"car2").innerHTML = temp[0][i][6] + "g Carbs";
            document.getElementById(i+"fat2").innerHTML = temp[0][i][7] + "g Fat";
        }
    })


function openRecipe(btn) {
    alert(btn.id);
}

let recipeCards = document.querySelectorAll(".reciperecentlyaddedslide");
for (let i = 0; i < recipeCards.length; i++) {
    recipeCards[i].addEventListener("click", function () {
        sessionStorage.setItem("recipe", this.id);
        // temploadrecipe.innerHTML = this.id;
        location.href = "recipepage.html?recipe=" + this.id;
    });
}

function searchrecipe() {
    // alert(document.getElementById("calorieinput").value.length == 0);
    var calorie = document.getElementById("calorieinput").value;
    var protein = document.getElementById("proteininput").value;
    var carbs = document.getElementById("carbsinput").value;
    var fat = document.getElementById("fatinput").value;
    if(calorie.length == 0 && protein.length == 0 && carbs.length == 0 && fat.length == 0){
        alert("Invalid. Input is required to search");
    } else {
        if(calorie.length == 0){
            calorie = "null";
        }
        if(protein.length == 0){
            protein = "null";
        }
        if(carbs.length == 0){
            carbs = "null";
        }
        if(fat.length == 0){
            fat = "null";
        }
    
        location.href = "recipesearch.html?calorie=" + calorie + "&protein=" + protein + "&carbs=" + carbs + "&fat=" + fat;
    }
}