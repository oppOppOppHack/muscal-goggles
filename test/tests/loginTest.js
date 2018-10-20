module.exports = [
  {
    name: "Login Page",
    test: function(nightmare, expect){
      return function(){
        it("Should Load", function(){
          nightmare
            .goto("http://localhost:3000/login")
            .evaulate(()=>{
              return document.title
            })
            .then(title=>{
              expect(title).to.equal("Muscal Goggles | Login");
              done();
            })
        })
        it("Should Allow Typing", function(){
          
        })
      }
    }
  }
]