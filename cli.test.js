const util = require('./util');
const data = require('./data').data;

describe('CLI test',() => {
    it('should filter data with filter param',() => {
        const filter = 'ry';
        const result = util.getFilteredData(filter, data);
        expect(result.length).toBe(2);
        expect(result[0].name).toBe('Uzuzozne');
        expect(result[0].people.length).toBe(1);
        expect(result[1].name).toBe('Satanwi');
        expect(result[1].people.length).toBe(1);
    })

    it('should count data of children',() => {
        const result = util.getDataWithChildrenAccount(data);
        expect(result[0].name).toBe('Dillauti [5]');
        expect(result[0].people[0].name).toBe('Winifred Graham [6]');
    })
});