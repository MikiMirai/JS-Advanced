function cookByNumbers(number, command1, command2, command3, command4, command5){
    number = Number(number);

    let commandList = [command1, command2, command3, command4, command5];

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.2;

    for(let i = 0; i < commandList.length; i++){
        switch (commandList[i]) {
            case 'chop':
                number = chop(number);
                break;
            case 'dice':
                number = dice(number);
                break;
            case 'spice':
                number = spice(number);
                break;
            case 'bake':
                number = bake(number);
                break;
            case 'fillet':
                number = fillet(number);
                break;
            default:
                break;
        }

        console.log(number);
    }
}

cookByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');