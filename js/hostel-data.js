const defaultHostels = [
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

const savedHostels = localStorage.getItem("hostelData");

window.hostels = savedHostels
    ? JSON.parse(savedHostels)
    : defaultHostels;


    if (!savedHostels) {
    window.hostels.forEach((hostel) => {
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
        if (hostel.singleRoomCount > 0) {
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
    localStorage.setItem("hostelData", JSON.stringify(window.hostels));
}


