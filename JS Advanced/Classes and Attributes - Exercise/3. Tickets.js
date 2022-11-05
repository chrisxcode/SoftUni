function tickets (arrOfTickets, sortCriteria) {

class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
}

let setOfTickets = new Set();

arrOfTickets.forEach(ticketInfo => {
    let [ destination, price, status ] = ticketInfo.split(`|`);
    let newTicket = new Ticket(destination,price,status);
    setOfTickets.add(newTicket);
})

let result;

if (sortCriteria != `price`) {
    result = Array.from(setOfTickets).sort((a,b) => a[sortCriteria].localeCompare(b[sortCriteria]));
} else {
    result = Array.from(setOfTickets).sort((a,b) => a[sortCriteria] - b[sortCriteria]);
}


return result;

}
