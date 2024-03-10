// switch key 

/* switch syntax
    switch (key) {
        case value:
            
            break;

        default:
            break;
    }
*/

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Febraury");
        break;
    case "march":
        console.log("March");
        break;

    default:
        console.log("Invalid option!");
        break;
}