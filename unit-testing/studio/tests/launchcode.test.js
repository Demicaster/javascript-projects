// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("Checks orginization to see if it includes nonprofit",function(){
    expect(launchcode.orginzation).toBe("nonprofit");

  });
  test("Checks executiveDirector to see if it includes Jeff",function(){
    expect(launchcode.executiveDirector).toBe("Jeff");

  });
  test("Checks percentageCoolEmployees to see if it includes 100",function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
    

  });
  test("Checks programsOffered to see if it includes [Web Development, Data Analysis, Liftoff]",function(){
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("Checks to see if a number divisible by 2 returns Launch",function(){
    expect(launchOutput).toBe()

  }

});


