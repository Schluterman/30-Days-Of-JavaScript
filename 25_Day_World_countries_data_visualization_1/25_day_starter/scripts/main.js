console.log(countries_data)
alert('Open the console and check if the countries has been loaded')

function topTenPop(){
    const pop = countries_data.sort((a, b) => b.population - a.population).slice(0, 10)
    data.datasets[0].data = pop.map(item => item.name)
    data.datasets[1].data = pop.map(item => item.population)
    updateChart();
}

function topTenLang(){
    let countries = {}

    countries_data.forEach(({languages}) => {
        languages.forEach(language => {
            if (Object.keys(countries).includes(language)) {
                countries[language] += 1
            } else {
                countries[language] = 1
            }
        })
    })
    let sortable = [];
    for (let country in countries) {
        sortable.push([country, countries[country]]);
    }


    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    sortable = sortable.slice(0,10)

    data.datasets[0].data = sortable.map(item => item[0])
    data.datasets[1].data = sortable.map(item => item[1])
    updateChart();
}
