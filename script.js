
// {/* <div class="header">header</div> */}

 
// let div = document.createElement("div");
// div.setAttribute("class","header");
// div.innerHTML = "<h2>JOB</h2>"
// document.body.append(div);




async function cat (){
    try{
        var res = await fetch("https://www.arbeitnow.com/api/job-board-api");
        var data = await res.json();
     
        var flexContainer = document.createElement("div");
        flexContainer.setAttribute("class", "flexcard");
for(let data1 in data){
    console.log(data[data1]);
    var data2 =data[data1]
    
    for(let i=0; i<data2.length; i++){
        console.log( data2[i]);
        var div = document.createElement("div");

        div.innerHTML = `<div class="card"  >
            <div class="card-body">
                <h5 class="card-title" >Company Name: ${ data2[i].company_name}</h5>
                <p class="card-text">title: ${ data2[i].title}</p>
                <p class="card-text">Role: ${ data2[i].tags}</p>
                <p class="card-text">job_types: ${ data2[i].job_types}</p>
                <p class="card-text">location: ${ data2[i].location}</p>
               
               
                 
                <a href="${data2[i].url}"target="_blank">Link to Job</a>
                <!-- Add other properties as needed -->
            </div>
        </div>`;

        flexContainer.appendChild(div);
    

    };
}

     
        

 
        document.body.appendChild(flexContainer);


    } catch(error){
console.log(error)
    }
   
   
}
cat()

// for(let i=0; i<data.length; i++){
//     console.log( data[i]);
//     var div = document.createElement("div");

//     div.innerHTML = `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//             <h5 class="card-title">Company Name: ${ data[i].company_name}</h5>
//             <p class="card-text">Title: ${ data[i].company_name}</p>
//             <!-- Add other properties as needed -->
//         </div>
//     </div>`;

//     flexContainer.appendChild(div);