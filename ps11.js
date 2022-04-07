// //  2+4+6+.........+100
// var x=2 ;


// while ( x<=200 ){

//     document.write(x)
//     x=x+2;
     
//  }
 

var x=1;
var sum =0;

while(x<=200){
    if(x % 3 == 0 && x % 5 == 0){
        document.write(" " + x)
        sum=sum+x;

    }
    x=x+1;
}

document.write(sum)