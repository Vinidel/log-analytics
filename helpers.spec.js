const {countFrequency} = require('./helpers') 


describe('Helpers', () => {
  describe('Count frequency', () => {
    let mockedArray = []
    beforeEach(() => {
      mockedArray = ['1', '2', '4', '4', '5', '5'];
    });
    
    
    it('should count a frequency of repetition', () => {
      const result = countFrequency(mockedArray);
      expect(result[3].frequency).toEqual(2);
    });

    it('should return empty array if sortedArr is empty', () => {
      const result = countFrequency([]);
      expect(result.length).toEqual([].length);
    });

  });
});