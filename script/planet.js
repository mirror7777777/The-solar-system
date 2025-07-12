 const SolarInfo = {
        jupiter:{
            Title: 'jupiter',
            Description: 'jupiter is the largest planet in our solar  system'
        },
        mars:{
            Title: 'mars',
            Description: 'mars, which is also known as the red planet, is the nearest planet to earth in our solar  system'
        },
        venus:{
            Title: 'venus',
            Description: 'venus is the nearest planet to the sun. it is peculiar in that its rotation is slow '
        },
        earth:{
            Title: 'earth',
            Description: 'earth is the only planet where there is record of life'
        },
    }

    const planetTitle = document.querySelector('#Title');
    const planetDescription = document.querySelector('#description');
    function getplanet(params) {
        if (params in SolarInfo) {
            planetTitle.textContent = SolarInfo[params].Title;
            planetDescription.textContent = SolarInfo[params].Description;

            
        }else{
            planetDescription.textContent = 'no description';
             planetTitle.textContent = 'no title'
        }
        
    }
    const button = document.querySelector('#button')
    button.addEventListener('click' , (e)=>{
        e.preventDefault()
        const planets = document.querySelector('#planets');
        const selectPlanets = planets.options[planets.selectedIndex].value;
        getplanet(selectPlanets)
    })

