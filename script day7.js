// day 7 task check one by one for the process call function rest country at last i give as common 
            //Get all the countries from Asia continent /region using Filter function
            function handleData(){
                let data = JSON.parse(this.responseText)
                const asia=data.filter((element)=>{
                if(element.region==='Asia'){
                 return element.name;
               }
              })
               console.log(asia);}
               //Get all the countries with population of less than 2 lacs using Filter function
     
               function handleData(){
                let data = JSON.parse(this.responseText)
                const popu=data.filter((element)=>{
                return element.population<200000;
               })
               console.log(popu);}
               //Print the following details name, capital, flag using forEach function
               
     
               function handleData(){
                let data = JSON.parse(this.responseText)
                data.forEach((element)=>{
                 console.log(element.name,element.capital,element.flag);
               })
               }
              //Print the total population of countries using reduce function 
     
              function handleData(){
               let data = JSON.parse(this.responseText)
               const population=data.reduce((acc,element)=>{
                return acc+element.population;
               },0)
               console.log(population);}
     
               //Print the country which use US Dollars as currency.
                     function handleData() {
               let  data = JSON.parse(this.response);
                var cur=[];
     
                for(i=0;i<data.length;i++){
                 if(data[i].currencies)
                 {
                     console.log("name:",data[i].name,"==>",data[i].currencies)
                 }
                 
             }
         }
                  const request = new XMLHttpRequest();
                   request.addEventListener('load',handleData)
                  request.open("GET","https://restcountries.com/v3.1/all")
                  request.send()