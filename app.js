const inputFeild = document.querySelector('.input-feilds')
const countrySearch =document.querySelector('.country-search')
const countryInp = document.getElementById('country')

const modeDarck = document.querySelector('#darck')
const modeLight = document.querySelector('#light')
const modePara = document.querySelector('.mode-para')
const filterBtn = document.querySelector('#filter-btn')
const btnTxt= document.querySelector('.filter-txt')
const arrow = document.querySelector('.arrow')
const dropDown= document.querySelector('.dropdown')
const options = document.querySelectorAll('.option')
let outputFeild = document.querySelector('.output-feild')


modeDarck.addEventListener('click',()=>{
    const body = document.querySelector('body')
    body.style.color = 'white'
    body.style.backgroundColor = '#242423'
    inputFeild.style.backgroundColor='#242423'
    inputFeild.style.color='white'
    countrySearch.style.color='white'
    countrySearch.style.backgroundColor='#000'
    countryInp.style.color='white'
    countryInp.style.backgroundColor='#000'
    filterBtn.style.color='white'
    filterBtn.style.backgroundColor='#000'
    dropDown.style.backgroundColor='#000'
    arrow.style.borderColor='white '
    outputFeild.style.backgroundColor='#242423';
    modeDarck.style.display = 'none'
    modeLight.classList.toggle('hidden')
    modePara.innerText='Light Mode'
})

modeLight.addEventListener('click',()=>{
    
    const body = document.querySelector('body')
    body.style.color = 'black'
    body.style.backgroundColor = 'white'
    inputFeild.style.backgroundColor='#b5b5b5'
    inputFeild.style.color='black'
    countrySearch.style.color='black'
    countrySearch.style.backgroundColor='white'
    countryInp.style.color='black'
    countryInp.style.backgroundColor='white'
    filterBtn.style.color='black'
    filterBtn.style.backgroundColor='white'
    dropDown.style.backgroundColor='white'
    arrow.style.borderColor='black '
    outputFeild.style.backgroundColor='#b5b5b5';
    modeDarck.style.display = 'inline-block'
    modeLight.classList.toggle('hidden')
    modePara.innerText='Darck Mode'

})


filterBtn.addEventListener('click',()=>{
    dropDown.classList.toggle('hidden')
})

options.forEach(ele =>{
    ele.addEventListener('click',(e)=>{
        const region = document.querySelector(`label[for='${e.target.id}']`).innerText

        btnTxt.innerText = region
        dropDown.classList.toggle('hidden')
    })
})



getData()

async function getData(){
    const data =await fetch("https://restcountries.com/v3.1/all");
    const res = await data.json() 

    
    for (let i = 0; i < res.length; i++) {
        
        const container = document.createElement('div')
        container.className='container';
        container.innerHTML=`
        <div class="flag">
            <img
            class="img-flag"
            src="${res[i].flags.png}"
            alt="flag"
            />
        </div>
        <div class="desc">
            <h1 class="title">${res[i].name.common}</h1>
            <p>Population: <span id="population">${res[i].population}</span></p>
            <p>Region: <span id="region">${res[i].region}</span></p>
            <p>Capital: <span id="capital">${res[i].capital}</span></p>
        </div>
        `


        modeDarck.addEventListener('click', ()=>{
            container.style.backgroundColor='#000'
            container.style.boxShadow='5px 3px 10px 2px black'
        })
    
        modeLight.addEventListener('click', ()=>{
            container.style.backgroundColor='white'
            container.style.boxShadow='5px 3px 10px 2px rgb(148, 144, 144'
        })

        outputFeild.append(container);

    }
    


    countryInp.addEventListener('keypress',(e)=>{
        if(e.key === 'Enter'){
            outputFeild.innerHTML=''
            const errorDiv = document.createElement('div')
            

            for (let i = 0; i < res.length; i++) {
                if (countryInp.value === res[i].name.common.toLowerCase()) {
                    const container = document.createElement('div')
                    container.className='container';
                    container.innerHTML=`
                    <div class="flag">
                        <img
                        class="img-flag"
                        src="${res[i].flags.png}"
                        alt="flag"
                        />
                    </div>
                    <div class="desc">
                        <h1 class="title">${res[i].name.common}</h1>
                        <p>Population: <span id="population">${res[i].population}</span></p>
                        <p>Region: <span id="region">${res[i].region}</span></p>
                        <p>Capital: <span id="capital">${res[i].capital}</span></p>
                    </div>
                    `
                    errorDiv.style.display='none'
                    outputFeild.append(container);
            
                    modeDarck.addEventListener('click', ()=>{
                        container.style.backgroundColor='#000'
                        container.style.boxShadow='5px 3px 10px 2px black'
                    })
            
                    modeLight.addEventListener('click', ()=>{
                        container.style.backgroundColor='white'
                        container.style.boxShadow='5px 3px 10px 2px rgb(148, 144, 144'
                    }) 
                } else{
                    

                    errorDiv.className='error-div'
                    errorDiv.innerText='Oops wrong Name :)!'
                    outputFeild.append(errorDiv)
                } 
            } 
        }
    })

    options.forEach(ele=>{
        ele.addEventListener('click',()=>{
                outputFeild.innerHTML='';
                for (let i = 0; i < res.length; i++) {
                    if (btnTxt.innerText=== res[i].region) {
                        
                        const container = document.createElement('div')
                        container.className='container';
                        container.innerHTML=`
                        <div class="flag">
                            <img
                            class="img-flag"
                            src="${res[i].flags.png}"
                            alt="flag"
                            />
                        </div>
                        <div class="desc">
                            <h1 class="title">${res[i].name.common}</h1>
                            <p>Population: <span id="population">${res[i].population}</span></p>
                            <p>Region: <span id="region">${res[i].region}</span></p>
                            <p>Capital: <span id="capital">${res[i].capital}</span></p>
                        </div>
                        `
                        outputFeild.append(container);
                
                        modeDarck.addEventListener('click', ()=>{
                            container.style.backgroundColor='#000'
                            container.style.boxShadow='5px 3px 10px 2px black'
                        })
                
                        modeLight.addEventListener('click', ()=>{
                            container.style.backgroundColor='white'
                            container.style.boxShadow='5px 3px 10px 2px rgb(148, 144, 144'
                        }) 
                    }  
                
            }
        })
    })
}





































