//标签语句

let num = 0;
outermost:
    for(let i = 0; i <10;i++) {
        for(let j = 0; j <10;j++) {
            if(i===5&&j===5) {
                // break outermost;
                continue outermost;
            }
            num++;
        }
    }

const {log} = console;
log(num)