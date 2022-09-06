//QUESTION1

        //Method I: Using LOOP
        multiple = () => {
        for(let i=1; i<101; i++) {
            if(i%3 === 0 && i&5 === 0){
                console.log('fizzBuzz');
                }else if (i%3 === 0){
                    console.log('fizz');
                }else if (i%5 === 0){
                    console.log('Buzz')
                }else{
                    console.log(i);
                }
            }
        }
        multiple();

        //Method 2 : Using Recursion
        multiple = (n=1) => {
            if(n>100) return;
            if(n%3 === 0 && n&5 === 0){
                console.log('fizzBuzz');
                }else if (n%3 === 0){
                    console.log('fizz');
                }else if (n%5 === 0){
                    console.log('Buzz');
                }else{
                    console.log(n);
                }
                multiple(n+1);
        }
        multiple();

        //QUESTION2
        //prime numbers between 2 and 20
        prime = () => {
            var number = 20;
            var isPrime;
            for(let i=2; i<number; i++){
                for(let j=2; j<i; j++){
                    if(i%j === 0){
                        isPrime = 0;
                        break;
                    }
                    else{
                        isPrime = 1;
                        break;
                    }
                }
                if(isPrime ===1){
                    console.log(i)
                }
            }
        }
        prime();

        //QUESTION3
        const text = 'I Love algorithms but I Think The Ones Here Are Too Simple'
        console.log(text);
        function getWords(text){
        let newArr = text.split("");
        return newArr;
        }
        getWords(text);       
   