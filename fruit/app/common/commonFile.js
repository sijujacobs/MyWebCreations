(function(){

//--------------------------------------   Object-Function Type  
    var objectFunctionType = function (type, color) {
        this.type = type || ""; 
        this.color = color || ""; 
        this.getInfo = function () {
            return this.color + ' ' + this.type ;
        };
    };
    var objFunType = new objectFunctionType('Macintosh', "Black");

//--------------------------------------   Object-Literal Type
    var objectLiteralType = {
        type: "macintosh",
        color: "red",
        getInfo: function () {
            console.log("objectLiteralType : getInfo : " + this.color + ' ' + this.type );
        },

        animateString: function(){
            var marqueeLbl = document.getElementById("marqueeLbl");
            var marqTxtNode = marqueeLbl.childNodes[0];
            var marqueeString = marqTxtNode.data;
            //console.log("JS :  marqueeString : " + marqueeString);
            setInterval( 
                function(){
                    marqueeString = marqueeString[marqueeString.length - 1] + marqueeString.substring(0, marqueeString.length - 1);
                    marqTxtNode.data = marqueeString;
                }
            , 2000);
        },

        prototypeForDate: function(){
            Date.prototype.showGreeting = function(){
                var currentTime = d.toDateString();//d.toLocaleTimeString();
                var greeting = (d.getHours() < 12) ? "GOOD MORNING" : "GOOD AFTER NOON";
                return greeting;
            }
            var d = new Date();
            $("#greetingLbl").text(d.showGreeting()); 
        },

        isPalindrome:function(str){
            //var str = "A man, a plan, a canal. Panama";
            var re1  = /[^A-Za-z0-9]/g;
            
            var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
            
            var lowRegStr = str.toLowerCase().replace(re1, '');
            var reverseStr = lowRegStr.split('').reverse().join(''); 
            //console.log("lowRegStr: "+ lowRegStr);
            //console.log("reverseStr: "+ reverseStr);
            return lowRegStr === reverseStr;
    

        }
    }
    //objectLiteralType.animateString();
    //objectLiteralType.prototypeForDate();

    var testString = "Level 1"
    objectLiteralType.isPalindrome(testString);
//--------------------------------------   Object-Create
    var myLaptop = {
        brand: 'Macintosh',
        price: '700',
        discountPrice:function(discount){
            this.price -= discount;
            console.log("discountPrice : " + this.price);
        }
    }
    var friend1Laptop = Object.create(myLaptop);
    friend1Laptop.brand = "LENOVO";
    //console.log("friend1Laptop:: hasOwnProperty --> brand : "+ friend1Laptop.hasOwnProperty('brand'));
    //console.log("friend1Laptop::  brand : "+ friend1Laptop.brand );
    delete friend1Laptop.brand;
    //console.log("After deleting brand property from friend1Laptop::  brand : "+ friend1Laptop.brand);

//--------------------------------------   Bind

    var friend2Laptop = {
        brand: 'Rachel Green', 
        price: 1500
    };
var friend2LaptopDiscount = myLaptop.discountPrice.bind(friend2Laptop, 200);
friend2LaptopDiscount();
//--------------------------------------   Apply & Call
    function add (a, b) {
        return a + b;
    }
    //console.log("call -- > " + add.call(this, 1, 2));
    //console.log("apply --> " + add.apply(this, [1, 2]));
    Math.max([2,3,4,5]);
Math.max.apply (null, [2,3,4,5]);
//--------------------------------------   curry

//--------------------------------------   Clouser

// ------- isPalindrome

    




})();