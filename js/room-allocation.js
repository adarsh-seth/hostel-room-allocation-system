const hostelsContainer = document.querySelector('.hostels-container');

const totalBeds = document.getElementById("total-beds");
const availableBeds = document.getElementById("available-beds");
const occupiedBeds = document.getElementById("occupied-beds");


const hostels = [
    {
        hostelId: "H8",
        hostelNumber: 8,
        roomCount: 10,
        rooms: []
    },
    {
        hostelId: "H6",
        hostelNumber: 6,
        roomCount: 15,
        rooms: []
    },
    {
        hostelId: "H9",
        hostelNumber: 9,
        roomCount: 12,
        rooms: []
    },
    {
        hostelId: "H7",
        hostelNumber: 7,
        roomCount: 10,
        rooms: []
    }
]




hostels.forEach((hostel) => {
    for (let index = 1; index <= hostel.roomCount; index++) {
        const roomNumber = hostel.hostelNumber * 100 + index;

        const room =
        {
            roomNumber: roomNumber,
            beds: []
        }

        hostel.rooms.push(room)

        for (let bedIndex = 1; bedIndex <= 3; bedIndex++) {

            const bedNumber = bedIndex;

            const bed = {
                bedNumber: bedNumber,
                status: "Available",
                applicationId: null
            }
            room.beds.push(bed)
        }


    }
})


hostels.forEach((hostel) => {
    const hostelCard = document.createElement("div");
    hostelCard.classList.add("hostel-card");
    hostelCard.innerHTML = `
    <h4>Hostel ${hostel.hostelNumber}</h4>
    `
    hostelsContainer.appendChild(hostelCard);

    hostel.rooms.forEach((room) => {
        const roomCard = document.createElement('div');
        roomCard.classList.add("room-card")
        roomCard.innerHTML = `
        <h5>Room ${room.roomNumber}</h5>
        <div class="beds-container"></div>
         `
        hostelCard.appendChild(roomCard)

        const bedsContainer = roomCard.querySelector(".beds-container");


        room.beds.forEach((bed) => {
            const bedCard = document.createElement('div');
            bedCard.classList.add("bed-card")
            bedCard.innerHTML = `
        <h5>Bed ${bed.bedNumber}</h5>
        <h5>${bed.status}</h5>
        `
            bedsContainer.appendChild(bedCard);
        })
    })


})


let total = 0
let available = 0
let occupied = 0
hostels.forEach((hostel) => {

    hostel.rooms.forEach((room) => {
        room.beds.forEach((bed) => {
            if (bed.status === "Available") {
                available++;
            }
            else if (bed.status === "Occupied") {
                occupied++;
            }
            total++;


        });

    });

});

occupiedBeds.innerText = occupied;
availableBeds.innerText = available;
totalBeds.innerText = total;