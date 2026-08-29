const hostelsContainer = document.querySelector('.hostels-container');

const totalBeds = document.getElementById("total-beds");
const availableBeds = document.getElementById("available-beds");
const occupiedBeds = document.getElementById("occupied-beds");


const hostels = [
    {
        hostelId: "ABH",
        hostelNumber: 10,
        doubleRoomCount: 10,
        doubleRooms: []
    },

    {
        hostelId: "BH-3",
        hostelNumber: 3,
        doubleRoomCount: 10,
        doubleRooms: []
    },

    {
        hostelId: "BH-4",
        hostelNumber: 4,
        doubleRoomCount: 10,
        doubleRooms: []
    },

    {
        hostelId: "BH-8",
        hostelNumber: 8,
        doubleRoomCount: 10,
        doubleRooms: []
    },

    {
        hostelId: "BH-1",
        hostelNumber: 1,
        doubleRoomCount: 10,
        doubleRooms: []
    },

    {
        hostelId: "BH-6",
        hostelNumber: 6,
        doubleRoomCount: 10,
        singleRoomCount: 15,
        doubleRooms: [],
        singleRooms: []
    },

    {
        hostelId: "BH-7",
        hostelNumber: 7,
        doubleRoomCount: 10,
        singleRoomCount: 15,
        doubleRooms: [],
        singleRooms: []
    },

    {
        hostelId: "BH-9",
        hostelNumber: 9,
        doubleRoomCount: 10,
        singleRoomCount: 15,
        doubleRooms: [],
        singleRooms: []
    },


    {
        hostelId: "GH-3",
        hostelNumber: 13,
        doubleRoomCount: 10,
        doubleRooms: []
    },

    {
        hostelId: "GH-5",
        hostelNumber: 15,
        doubleRoomCount: 10,
        doubleRooms: []
    },

    {
        hostelId: "GH-1",
        hostelNumber: 11,
        doubleRoomCount: 10,
        singleRoomCount: 15,
        doubleRooms: [],
        singleRooms: []
    },

    {
        hostelId: "GH-2",
        hostelNumber: 12,
        doubleRoomCount: 10,
        singleRoomCount: 15,
        doubleRooms: [],
        singleRooms: []
    },

    {
        hostelId: "GH-4",
        hostelNumber: 14,
        doubleRoomCount: 10,
        singleRoomCount: 15,
        doubleRooms: [],
        singleRooms: []
    }
]


hostels.forEach((hostel) => {
    for (let index = 1; index <= hostel.doubleRoomCount; index++) {
        const roomNumber = hostel.hostelNumber * 100 + index;

        const doubleRoom =
        {
            roomNumber: roomNumber,
            beds: []
        }
        hostel.doubleRooms.push(doubleRoom)

        for (let bedIndex = 1; bedIndex <= 2; bedIndex++) {

            const bedNumber = bedIndex;

            const bed = {
                bedNumber: bedNumber,
                status: "Available",
                applicationId: null
            }
            doubleRoom.beds.push(bed)
        }

    }
    if (hostel.singleRoomCount != 0) {
        for (let index = hostel.doubleRoomCount + 1; index <= hostel.singleRoomCount + hostel.doubleRoomCount; index++) {

            const roomNumber = hostel.hostelNumber * 100 + index;

            const singleRoom =
            {
                roomNumber: roomNumber,
                beds: []
            }
            hostel.singleRooms.push(singleRoom)

            for (let bedIndex = 1; bedIndex <= 1; bedIndex++) {

                const bedNumber = bedIndex;

                const bed = {
                    bedNumber: bedNumber,
                    status: "Available",
                    applicationId: null
                }
                singleRoom.beds.push(bed)
            }



        }


    }
})


function updateBedStats() {

    let total = 0
    let available = 0
    let occupied = 0

    hostels.forEach((hostel) => {

        hostel.doubleRooms.forEach((doubleRoom) => {
            doubleRoom.beds.forEach((bed) => {
                if (bed.status === "Available") {
                    available++;
                }
                else if (bed.status === "Occupied") {
                    occupied++;
                }
                total++;

            });

        });
        if (hostel.singleRoomCount > 0) {
            hostel.singleRooms.forEach((singleRoom) => {
                singleRoom.beds.forEach((bed) => {
                    if (bed.status === "Available") {
                        available++;
                    }
                    else if (bed.status === "Occupied") {
                        occupied++;
                    }
                    total++;

                });

            });
        }

    });
    occupiedBeds.innerText = occupied;
    availableBeds.innerText = available;
    totalBeds.innerText = total;

}

updateBedStats();


// const hostel = hostels.find((hostel) => {
//     return hostel.hostelNumber === 8;
// })
// const room = hostel.rooms.find((room) => {
//     return room.roomNumber === 801;
// })
// const bed = room.beds.find((bed) => {
//     return bed.bedNumber === 1;
// })
// bed.status = "Occupied"
// updateBedStats()


function renderHostels() {
    hostelsContainer.innerHTML = "";

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

                const bedCard = document.createElement("div");

                let statusClass;

                if (bed.status === "Available") {
                    statusClass = "status-available";
                } else {
                    statusClass = "status-occupied";
                }

                bedCard.classList.add("bed-card");
                bedCard.classList.add(statusClass);

                bedCard.innerHTML = `
                <h5>Bed ${bed.bedNumber}</h5>
                <h5>${bed.status}</h5>
            `;

                bedsContainer.appendChild(bedCard);
            })
        })


    })
}
renderHostels()

const savedApplications = localStorage.getItem('hostelApplications')

const applications = savedApplications ? JSON.parse(savedApplications) : []

const approvedApplications = applications.filter((application) => {
    return application.status === "Approved"
})

const fourthYearApplications = approvedApplications.filter((application) => {
    return application.year == "4"
})

fourthYearApplications.forEach((application) => {

    const selectedHostel = hostels.find((hostel) => {
        return hostel.hostelId === application.hostelPreference1;
    });

    const availableSingleRooms = selectedHostel.singleRooms.filter((room) => {
         return room.beds[0].status === "Available"
    })

    const selectedRoom = availableSingleRooms[0];
    
    if(selectedRoom){
        const selectedBed = selectedRoom.beds[0] 
         
        selectedBed.status = "Occupied"
        selectedBed.applicationId = application.applicationId
      }

});