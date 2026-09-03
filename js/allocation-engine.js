const savedHostelData = localStorage.getItem("hostelData");

window.hostels = savedHostelData
    ? JSON.parse(savedHostelData)
    : [];

function allocateRooms() {

    const savedApplications = localStorage.getItem("hostelApplications");

    const applications = savedApplications
        ? JSON.parse(savedApplications)
        : [];

    const approvedApplications = applications.filter((application) => {
        return application.status === "Approved";
    });

    const fourthYearApplications = approvedApplications.filter((application) => {
        return application.year == "4"
    })

    fourthYearApplications.forEach((application) => {

        if (application.allocation) {
            return;
        }

        const selectedHostel = window.hostels.find((hostel) => {
            return hostel.hostelId === application.hostelPreference1;
        });

        if (!selectedHostel) {

            application.allocation = {
                status: "Unallocated"
            };

            return;
        }

        const availableSingleRooms = selectedHostel.singleRooms.filter((room) => {
            return room.beds[0].status === "Available"
        })

        const selectedRoom = availableSingleRooms[0];

        if (selectedRoom) {
            const selectedBed = selectedRoom.beds[0]

            selectedBed.status = "Occupied"
            selectedBed.applicationId = application.applicationId

            application.allocation = {
                status: "Allocated",
                hostelId: selectedHostel.hostelId,
                roomNumber: selectedRoom.roomNumber,
                bedNumber: selectedBed.bedNumber
            }
        }
        else {
            const secondPreferenceHostel = window.hostels.find((hostel) => {
                return hostel.hostelId === application.hostelPreference2
            })

            if (!secondPreferenceHostel) {

                application.allocation = {
                    status: "Unallocated"
                };

                return;
            }

            const availableSecondPreferenceRooms = secondPreferenceHostel.singleRooms.filter((room) => {
                return room.beds[0].status === "Available"
            })

            const selectedSecondPreferenceRoom = availableSecondPreferenceRooms[0]

            if (selectedSecondPreferenceRoom) {
                const selectedBed = selectedSecondPreferenceRoom.beds[0]

                selectedBed.status = "Occupied"
                selectedBed.applicationId = application.applicationId

                application.allocation = {
                    status: "Allocated",
                    hostelId: secondPreferenceHostel.hostelId,
                    roomNumber: selectedSecondPreferenceRoom.roomNumber,
                    bedNumber: selectedBed.bedNumber
                }
            }
            else {
                application.allocation = {
                    status: "Unallocated"
                }
            }
        }

    });

    const firstYearApplications = approvedApplications.filter((application) => {
        return application.year == "1"
    })

    firstYearApplications.forEach((application) => {

        if (application.allocation) {
            return;
        }

        const selectedHostel = window.hostels.find((hostel) => {
            return hostel.hostelId === application.hostelPreference1
        })

        if (!selectedHostel) {

            application.allocation = {
                status: "Unallocated"
            };

            return;
        }

        const availableDoubleRooms = selectedHostel.doubleRooms.filter((room) => {
            return room.beds[0].status === "Available" || room.beds[1].status === "Available"
        })

        const selectedRoom = availableDoubleRooms[0]

        if (selectedRoom) {
            let selectedBed

            if (selectedRoom.beds[0].status === "Available") {
                selectedBed = selectedRoom.beds[0]
            }
            else {
                selectedBed = selectedRoom.beds[1]
            }

            selectedBed.status = "Occupied"
            selectedBed.applicationId = application.applicationId

            application.allocation = {
                status: "Allocated",
                hostelId: selectedHostel.hostelId,
                roomNumber: selectedRoom.roomNumber,
                bedNumber: selectedBed.bedNumber
            }
        }
        else {

            const secondPreferenceHostel = window.hostels.find((hostel) => {
                return hostel.hostelId === application.hostelPreference2
            })

            if (!secondPreferenceHostel) {

                application.allocation = {
                    status: "Unallocated"
                };

                return;
            }

            const availableSecondPreferenceRooms = secondPreferenceHostel.doubleRooms.filter((room) => {
                return room.beds[0].status === "Available" || room.beds[1].status === "Available"
            })

            const selectedSecondPreferenceRoom = availableSecondPreferenceRooms[0]

            if (selectedSecondPreferenceRoom) {
                let selectedBed

                if (selectedSecondPreferenceRoom.beds[0].status === "Available") {
                    selectedBed = selectedSecondPreferenceRoom.beds[0]
                }
                else {
                    selectedBed = selectedSecondPreferenceRoom.beds[1]
                }

                selectedBed.status = "Occupied"
                selectedBed.applicationId = application.applicationId

                application.allocation = {
                    status: "Allocated",
                    hostelId: secondPreferenceHostel.hostelId,
                    roomNumber: selectedSecondPreferenceRoom.roomNumber,
                    bedNumber: selectedBed.bedNumber
                }
            }
            else {
                application.allocation = {
                    status: "Unallocated"
                }
            }
        }
    })

    const secondThirdYearApplications = approvedApplications.filter((application) => {
        return application.year === "2" || application.year === "3"
    });

    secondThirdYearApplications.forEach((application) => {

        if (application.allocation) {
            return;
        }

        const roommateApplication = applications.find((roommate) => {
            return roommate.rollNumber === application.roommateRoll
        })

        if (roommateApplication && roommateApplication.status === "Approved" && roommateApplication.roommateRoll === application.rollNumber) {

            const selectedHostel = window.hostels.find((hostel) => {
                return hostel.hostelId === application.hostelPreference1
            })

            if (!selectedHostel) {

                application.allocation = {
                    status: "Unallocated"
                };

                roommateApplication.allocation = {
                    status: "Unallocated"
                };

                return;
            }

            const availableDoubleRooms = selectedHostel.doubleRooms.filter((room) => {
                return room.beds[0].status === "Available" && room.beds[1].status === "Available"
            })

            const selectedRoom = availableDoubleRooms[0]

            if (selectedRoom) {
                const selectedBed = selectedRoom.beds[0]
                const roommateBed = selectedRoom.beds[1]

                selectedBed.status = "Occupied";
                selectedBed.applicationId = application.applicationId;

                roommateBed.status = "Occupied";
                roommateBed.applicationId = roommateApplication.applicationId;

                application.allocation = {
                    status: "Allocated",
                    hostelId: selectedHostel.hostelId,
                    roomNumber: selectedRoom.roomNumber,
                    bedNumber: selectedBed.bedNumber
                }

                roommateApplication.allocation = {
                    status: "Allocated",
                    hostelId: selectedHostel.hostelId,
                    roomNumber: selectedRoom.roomNumber,
                    bedNumber: roommateBed.bedNumber
                };
            }
            else {

                const secondPreferenceHostel = window.hostels.find((hostel) => {
                    return hostel.hostelId === application.hostelPreference2
                })

                if (!secondPreferenceHostel) {

                    application.allocation = {
                        status: "Unallocated"
                    };

                    roommateApplication.allocation = {
                        status: "Unallocated"
                    };

                    return;
                }

                const availableDoubleRooms = secondPreferenceHostel.doubleRooms.filter((room) => {
                    return room.beds[0].status === "Available" && room.beds[1].status === "Available"
                })

                const selectedRoom = availableDoubleRooms[0]

                if (selectedRoom) {
                    const selectedBed = selectedRoom.beds[0]
                    const roommateBed = selectedRoom.beds[1]

                    selectedBed.status = "Occupied";
                    selectedBed.applicationId = application.applicationId;

                    roommateBed.status = "Occupied";
                    roommateBed.applicationId = roommateApplication.applicationId;

                    application.allocation = {
                        status: "Allocated",
                        hostelId: secondPreferenceHostel.hostelId,
                        roomNumber: selectedRoom.roomNumber,
                        bedNumber: selectedBed.bedNumber
                    }

                    roommateApplication.allocation = {
                        status: "Allocated",
                        hostelId: secondPreferenceHostel.hostelId,
                        roomNumber: selectedRoom.roomNumber,
                        bedNumber: roommateBed.bedNumber
                    };
                }
                else {
                    application.allocation = {
                        status: "Unallocated"
                    }

                    roommateApplication.allocation = {
                        status: "Unallocated"
                    }
                }
            }
        }
        else {

            const selectedHostel = window.hostels.find((hostel) => {
                return hostel.hostelId === application.hostelPreference1
            })

            if (!selectedHostel) {

                application.allocation = {
                    status: "Unallocated"
                };

                return;
            }

            const availableDoubleRooms = selectedHostel.doubleRooms.filter((room) => {
                return room.beds[0].status === "Available" || room.beds[1].status === "Available"
            })

            const selectedRoom = availableDoubleRooms[0];

            if (selectedRoom) {
                let selectedBed

                if (selectedRoom.beds[0].status === "Available") {
                    selectedBed = selectedRoom.beds[0]
                }
                else {
                    selectedBed = selectedRoom.beds[1]
                }

                selectedBed.status = "Occupied"
                selectedBed.applicationId = application.applicationId

                application.allocation = {
                    status: "Allocated",
                    hostelId: selectedHostel.hostelId,
                    roomNumber: selectedRoom.roomNumber,
                    bedNumber: selectedBed.bedNumber
                }
            }
            else {

                const secondPreferenceHostel = window.hostels.find((hostel) => {
                    return hostel.hostelId === application.hostelPreference2
                })

                if (!secondPreferenceHostel) {

                    application.allocation = {
                        status: "Unallocated"
                    };

                    return;
                }

                const availableDoubleRooms = secondPreferenceHostel.doubleRooms.filter((room) => {
                    return room.beds[0].status === "Available" || room.beds[1].status === "Available"
                })

                const selectedRoom = availableDoubleRooms[0];

                if (selectedRoom) {
                    let selectedBed

                    if (selectedRoom.beds[0].status === "Available") {
                        selectedBed = selectedRoom.beds[0]
                    }
                    else {
                        selectedBed = selectedRoom.beds[1]
                    }

                    selectedBed.status = "Occupied"
                    selectedBed.applicationId = application.applicationId

                    application.allocation = {
                        status: "Allocated",
                        hostelId: secondPreferenceHostel.hostelId,
                        roomNumber: selectedRoom.roomNumber,
                        bedNumber: selectedBed.bedNumber
                    }
                }
                else {
                    application.allocation = {
                        status: "Unallocated"
                    }
                }
            }
        }
    });


    localStorage.setItem("hostelData", JSON.stringify(window.hostels));
    localStorage.setItem("hostelApplications", JSON.stringify(applications));


}