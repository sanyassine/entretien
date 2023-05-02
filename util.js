const getFilter = (arg) => {
    if(!arg.includes('--filter')) {
        return;
    }
    const filter = arg.split('=')[1];
    return filter;
}

const getFilteredData = (filter,data) => {
    const result = []
    for(const country of data) {
        const peoples = country.people;
        let peopleToAdd = []
        for(const people of peoples) {
            const peopleCopy = {...people}
            animals = peopleCopy.animals;
            animalsFiltered = animals.filter(a => a.name.includes(filter))
            if(animalsFiltered.length) {
                peopleCopy.animals = animalsFiltered
                peopleToAdd.push(peopleCopy)
            }
        }
        if(peopleToAdd.length) {
            result.push({
                name: country.name,
                people: peopleToAdd
            })
        }
        peopleToAdd = []
    }
    return result;
}

const getDataWithChildrenAccount = (data) => {
    const result = [];
    for(const country of data) {
        const peoples = country.people;
        let peopleToAdd = []
        for(const people of [...peoples]) {
            people.name = `${people.name} [${people.animals.length}]`
            peopleToAdd.push(people)
        }
        console.table(peopleToAdd)
        result.push({
            name: `${country.name} [${country.people.length}]`,
            people: peopleToAdd
        })
        peopleToAdd = []
    }
    return result;
}

module.exports = {
    getFilteredData,getDataWithChildrenAccount,getFilter
}