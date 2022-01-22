const cat = require('./Categories.js')

test("is clicked product a link", () => {
    const fontWeight = 'bold';
 expect(cat(fontWeight)).toEqual('bold')
})

