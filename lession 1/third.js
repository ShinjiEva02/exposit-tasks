const probability = 0.05;
const countries = [
    {
        id: 1,
        country: 'Belarus'
    },
    {
        id: 2,
        country: 'Poland'
    },
    {
        id: 3,
        country: 'Russia'
    },
    {
        id: 4,
        country: 'Ukraine'
    },
    {
        id: 5,
        country: 'Canada'
    },
    {
        id: 6,
        country: 'Canada'
    }];
const capitals = [
    {
        id: 1,
        name: 'Minsk',
        countryId: 1
    },
    {
        id: 2,
        name: 'Ottawa',
        countryId: 5
    },
    {
        id: 3,
        name: 'Warsaw',
        countryId: 2
    },
    {
        id: 4,
        name: 'Moscow',
        countryId: 3
    },
    {
        id: 5,
        name: 'Kiev',
        countryId: 4
    }
];

function loadCountryById(id) {
    return new Promise(((resolve, reject) => {
        const country = countries.find(element => !!element.id && element.id === id);

        if (Math.random() < probability) {
            reject('Could not retrieve the data');
        }
        if (country) {
            setTimeout(resolve(country), 3000);
        } else {
            reject('Country not found');
        }
    }));
}

function loadCountry({id, name}) {
    return new Promise(((resolve, reject) => {
        const country = (id || name) && countries.find(element => (!!element.id && element.id === id) || (!!element.name && element.name === name));

        if (country) {
            setTimeout(resolve(country), 3000);
        } else {
            reject('Country not found');
        }
    }));
}

function loadCapitalByCountryId(countryId) {
    return new Promise(((resolve, reject) => {
        const capital = countryId && capitals.find(element => !!element.id && element.countryId === countryId)

        if (capital) {
            resolve(capital.name)
        } else {
            reject('Capital not found');
        }
    }));
}

function getCapitalByCountry({countryId, countryName}) {
    return loadCountry({id: countryId, name: countryName})
        .then(country => loadCapitalByCountryId(country.id))
}

loadCountryById(2)
    .then(country => console.log(country));

loadCountry({id: 1, name: ''})
    .then(country => console.log(country));

loadCapitalByCountryId(2)
    .then(capitalName => console.log(capitalName));

getCapitalByCountry({countryId: 5, countryName: ''})
    .then(capitalName => console.log(capitalName));

