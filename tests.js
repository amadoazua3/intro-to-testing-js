// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function (){
   it('should be a defined function', function (){
      expect(typeof isFive).toBe('function');
   });
   it('should return true when passed "5"', function (){
      expect(isFive("5")).toBe(true);
   });
});

describe('isEven', function (){
   it('should be a defined function', function (){
      expect(typeof isEven).toBe('function');
   });
   it('should return true when passed 2', function (){
      expect(isEven(2)).toBe(true);
   });
   it('should return true when passed -4', function (){
      expect(isEven(-4)).toBe(true);
   });
   it('should return false when passed 3', function (){
      expect(isEven(3)).toBe(false);
   });
   it('should return false when called with "banana"', function (){
      expect(isEven('banana')).toBe(false);
   });
    it('should return true when passed "8"', function () {
      expect(isEven("8")).toBe(true);
    });
    it('should return false when passed Infinity', function (){
      expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean input', function (){
       expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument', function (){
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function (){
    it('should be a defined function', function (){
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when passed "a"', function (){
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function (){
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y"', function (){
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4', function (){
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed a boolean', function (){
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed "banana"', function (){
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when no argument is passed', function (){
        expect(isVowel()).toBe(false);
    });
});

describe('add', function (){
    it('should be a defined function', function (){
        expect(typeof add).toBe('function');
    });
    it('should return 5 when add(2, 3) is passed', function (){
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when add(-3, -9) is passed', function (){
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when add("5", 6) is passed', function (){
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when add("-4", "10") is passed', function (){
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when add("banana", "split") is passed', function (){
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN when add(2, "apples") is passed', function (){
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when add() is called', function (){
        expect(add()).toBeNaN();
    });
});


