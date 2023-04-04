// let SHEET_ID = '1gUQYJD1asaVBULXlphUWNQLWVUTLc45PGTHed_dP5bw';
// let SHEET_TITLE = 'RecipeList';
// let SHEET_RANGE = 'B3:C5';

// let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

// let currentrecipe = 0;

// window.addEventListener('load', () => {

//     let parameters= new URLSearchParams( window.location.search );
//     recipe = parameters.get( "recipe");
//     currentrecipe = recipe;
// })

// fetch(FULL_URL)
//     .then(res => res.text())
//     .then(rep => {
//         let data = JSON.parse(rep.substr(47).slice(0, -2));
//         document.getElementById('recipename').innerHTML =  data.table.rows[0].c[0].v;


//         // for(let i = 1; i<length; i++){
//         //     for(let j = 1; j<width; j++){
//         //         console.log(data.table.rows[i].c[j].v);
//         //     }
//         // }

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

window.addEventListener('load', () => {

    let parameters = new URLSearchParams(window.location.search);
    recipe = parameters.get("recipe");
})

fetch('https://script.google.com/macros/s/AKfycbweBXTy56rMSExNExD0RH2kONYYDxHCNGQMOT8xvXCzScRtYXEhzVA9IhU7LN6ErozdCw/exec')
    .then(res => res.json())
    .then(data => {
        let recipelist = [];

        Object.values(data).forEach(val => recipelist.push(val));

        document.getElementById("ingredientmaintitle").innerHTML = "Ingredients";
        document.getElementById("stepmaintitle").innerHTML = "Steps";

        document.getElementById("recipename").innerHTML = recipelist[0][recipe][1];
        document.getElementById("recipeservingtitle").innerHTML = "Servings";
        document.getElementById("recipeserving").innerHTML = recipelist[0][recipe][2];
        document.getElementById("recipetimetitle").innerHTML = "Time";
        document.getElementById("recipetime").innerHTML = recipelist[0][recipe][3] + " minutes";
        document.getElementById("recipecalorie").innerHTML = recipelist[0][recipe][4] + " Calories";
        document.getElementById("recipeprotein").innerHTML = recipelist[0][recipe][5] + "g Protein";
        document.getElementById("recipecarb").innerHTML = recipelist[0][recipe][6] + "g Carbs";
        document.getElementById("recipefat").innerHTML = recipelist[0][recipe][7] + "g Fat";
        document.getElementById("imagetest").src = recipelist[0][recipe][8];


        var ingredientlist = recipelist[0][recipe][10].split('@@');

        if(ingredientlist.length > 1){
            for (let i = 0; i < ingredientlist.length; i += 2) {
                document.getElementById("ingredientstitle" + i / 2).innerHTML = ingredientlist[i];
                var ingredientlist2 = ingredientlist[i + 1];
    
                ingredientlist2 = ingredientlist2.split('@');
    
                for (let j = 0; j < ingredientlist2.length; j++) {
                    let ibox = document.createElement('tr');
                    document.getElementById("ingredients" + i / 2).append(ibox);
                    ibox.innerHTML = ingredientlist2[j];
                }
            }
        } else {
            ingredientlist2 = recipelist[0][recipe][10].split('@');
            for (let j = 0; j < ingredientlist2.length; j++) {
                let ibox = document.createElement('tr');
                document.getElementById("ingredients0").append(ibox);
                ibox.innerHTML = ingredientlist2[j];
            }
        }


        var stepslist = recipelist[0][recipe][11].split('@@');

        if(stepslist.length > 1){
            for (let i = 0; i < stepslist.length; i += 2) {
                document.getElementById("stepstitle" + i / 2).innerHTML = stepslist[i];
                var stepslist2 = stepslist[i + 1];
    
                stepslist2 = stepslist2.split('@');
    
                for (let j = 0; j < stepslist2.length; j++) {
                    let ibox = document.createElement('tr');
                    let iboxnum = document.createElement('div');
                    document.getElementById("steps" + i / 2).append(iboxnum);
                    iboxnum.innerHTML = j+1;
                    document.getElementById("steps" + i / 2).append(ibox);
                    ibox.innerHTML = stepslist2[j];
                }
            }
        } else {
            stepslist2 = recipelist[0][recipe][11].split('@');
            for (let j = 0; j < stepslist2.length; j++) {
                let ibox = document.createElement('tr');
                    let iboxnum = document.createElement('div');
                    document.getElementById("steps0").append(iboxnum);
                    iboxnum.innerHTML = j+1;
                    document.getElementById("steps0").append(ibox);
                    ibox.innerHTML = stepslist2[j];
            }
        }





    })

