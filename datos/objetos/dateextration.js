"born 02/04/2001 (mother Clementine): Bugeye, Wolverine"
"died 27/04/2006: Black Leclère"

function extractDate(paragraph){
    function numberAt(start, lenght){
        return Number(paragraph.slice(start, start + lenght));
    }
    return new Date(numberAt(11, 4), numberAt(8, 2) - 1, numberAt(5, 2));
}
