const demoApplications = [

    // =========================================================
    // 1st Year
    // =========================================================

    // 1st Year - Male
    {
        applicationId: "HH-2026-DEMO01",
        fullName: "Aarav Sharma",
        rollNumber: "DEMO1CS01",
        email: "aarav.sharma@example.com",
        phone: "9876501001",
        gender: "male",
        branch: "CSE",
        year: "1",
        hostelPreference1: "ABH",
        hostelPreference2: "BH-3",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO001",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T09:00:00.000Z"
    },

    // 1st Year - Female
    {
        applicationId: "HH-2026-DEMO02",
        fullName: "Ananya Singh",
        rollNumber: "DEMO1EC02",
        email: "ananya.singh@example.com",
        phone: "9876501002",
        gender: "female",
        branch: "ECE",
        year: "1",
        hostelPreference1: "GH-3",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T09:05:00.000Z"
    },

    // 1st Year - Male
    {
        applicationId: "HH-2026-DEMO13",
        fullName: "Aditya Kumar",
        rollNumber: "DEMO1ME13",
        email: "aditya.kumar@example.com",
        phone: "9876501013",
        gender: "male",
        branch: "ME",
        year: "1",
        hostelPreference1: "BH-3",
        hostelPreference2: "BH-4",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO013",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T10:00:00.000Z"
    },

    // 1st Year - Female
    {
        applicationId: "HH-2026-DEMO14",
        fullName: "Kavya Nair",
        rollNumber: "DEMO1EE14",
        email: "kavya.nair@example.com",
        phone: "9876501014",
        gender: "female",
        branch: "EE",
        year: "1",
        hostelPreference1: "GH-3",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO014",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T10:05:00.000Z"
    },

    // 1st Year - Male
    {
        applicationId: "HH-2026-DEMO15",
        fullName: "Siddharth Rao",
        rollNumber: "DEMO1CE15",
        email: "siddharth.rao@example.com",
        phone: "9876501015",
        gender: "male",
        branch: "CE",
        year: "1",
        hostelPreference1: "ABH",
        hostelPreference2: "BH-3",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Rejected",
        submittedAt: "2026-09-05T10:10:00.000Z"
    },

    // 1st Year - Female
    {
        applicationId: "HH-2026-DEMO16",
        fullName: "Riya Malhotra",
        rollNumber: "DEMO1CS16",
        email: "riya.malhotra@example.com",
        phone: "9876501016",
        gender: "female",
        branch: "CSE",
        year: "1",
        hostelPreference1: "GH-3",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO016",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T10:15:00.000Z"
    },

    // 1st Year - Male
    {
        applicationId: "HH-2026-DEMO17",
        fullName: "Manish Verma",
        rollNumber: "DEMO1EI17",
        email: "manish.verma@example.com",
        phone: "9876501017",
        gender: "male",
        branch: "EIE",
        year: "1",
        hostelPreference1: "BH-4",
        hostelPreference2: "BH-8",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO017",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T10:20:00.000Z"
    },

    // 1st Year - Female
    {
        applicationId: "HH-2026-DEMO18",
        fullName: "Sneha Agarwal",
        rollNumber: "DEMO1ME18",
        email: "sneha.agarwal@example.com",
        phone: "9876501018",
        gender: "female",
        branch: "ME",
        year: "1",
        hostelPreference1: "GH-3",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Rejected",
        submittedAt: "2026-09-05T10:25:00.000Z"
    },


    // =========================================================
    // 2nd Year
    // =========================================================

    // 2nd Year - Male
    {
        applicationId: "HH-2026-DEMO03",
        fullName: "Rohan Verma",
        rollNumber: "DEMO2ME03",
        email: "rohan.verma@example.com",
        phone: "9876501003",
        gender: "male",
        branch: "ME",
        year: "2",
        hostelPreference1: "BH-4",
        hostelPreference2: "BH-8",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO003",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T09:10:00.000Z"
    },

    // 2nd Year - Male - Mutual Roommate
    {
        applicationId: "HH-2026-DEMO04",
        fullName: "Kunal Mehta",
        rollNumber: "DEMO2EE04",
        email: "kunal.mehta@example.com",
        phone: "9876501004",
        gender: "male",
        branch: "EE",
        year: "2",
        hostelPreference1: "BH-8",
        hostelPreference2: "BH-1",
        roommateRoll: "DEMO2CE05",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T09:15:00.000Z"
    },

    // 2nd Year - Male - Mutual Roommate
    {
        applicationId: "HH-2026-DEMO05",
        fullName: "Arjun Patel",
        rollNumber: "DEMO2CE05",
        email: "arjun.patel@example.com",
        phone: "9876501005",
        gender: "male",
        branch: "CE",
        year: "2",
        hostelPreference1: "BH-8",
        hostelPreference2: "BH-1",
        roommateRoll: "DEMO2EE04",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO005",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T09:20:00.000Z"
    },

    // 2nd Year - Female
    {
        applicationId: "HH-2026-DEMO06",
        fullName: "Priya Gupta",
        rollNumber: "DEMO2CS06",
        email: "priya.gupta@example.com",
        phone: "9876501006",
        gender: "female",
        branch: "CSE",
        year: "2",
        hostelPreference1: "GH-5",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T09:25:00.000Z"
    },

    // 2nd Year - Male
    {
        applicationId: "HH-2026-DEMO19",
        fullName: "Nikhil Joshi",
        rollNumber: "DEMO2CS19",
        email: "nikhil.joshi@example.com",
        phone: "9876501019",
        gender: "male",
        branch: "CSE",
        year: "2",
        hostelPreference1: "BH-4",
        hostelPreference2: "BH-8",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO019",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T10:30:00.000Z"
    },

    // 2nd Year - Female
    {
        applicationId: "HH-2026-DEMO20",
        fullName: "Pooja Sinha",
        rollNumber: "DEMO2EC20",
        email: "pooja.sinha@example.com",
        phone: "9876501020",
        gender: "female",
        branch: "ECE",
        year: "2",
        hostelPreference1: "GH-5",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO020",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T10:35:00.000Z"
    },

    // 2nd Year - Male
    {
        applicationId: "HH-2026-DEMO21",
        fullName: "Harsh Raj",
        rollNumber: "DEMO2EI21",
        email: "harsh.raj@example.com",
        phone: "9876501021",
        gender: "male",
        branch: "EIE",
        year: "2",
        hostelPreference1: "BH-8",
        hostelPreference2: "BH-1",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Rejected",
        submittedAt: "2026-09-05T10:40:00.000Z"
    },

    // 2nd Year - Male - Mutual Roommate
    {
        applicationId: "HH-2026-DEMO22",
        fullName: "Devansh Singh",
        rollNumber: "DEMO2ME22",
        email: "devansh.singh@example.com",
        phone: "9876501022",
        gender: "male",
        branch: "ME",
        year: "2",
        hostelPreference1: "BH-1",
        hostelPreference2: "BH-8",
        roommateRoll: "DEMO2CS23",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO022",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T10:45:00.000Z"
    },

    // 2nd Year - Male - Mutual Roommate
    {
        applicationId: "HH-2026-DEMO23",
        fullName: "Ayush Tiwari",
        rollNumber: "DEMO2CS23",
        email: "ayush.tiwari@example.com",
        phone: "9876501023",
        gender: "male",
        branch: "CSE",
        year: "2",
        hostelPreference1: "BH-1",
        hostelPreference2: "BH-8",
        roommateRoll: "DEMO2ME22",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO023",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T10:50:00.000Z"
    },

    // 2nd Year - Female
    {
        applicationId: "HH-2026-DEMO24",
        fullName: "Nandini Roy",
        rollNumber: "DEMO2CE24",
        email: "nandini.roy@example.com",
        phone: "9876501024",
        gender: "female",
        branch: "CE",
        year: "2",
        hostelPreference1: "GH-5",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T10:55:00.000Z"
    },




    // 3rd Year - Male
    {
        applicationId: "HH-2026-DEMO07",
        fullName: "Vivek Kumar",
        rollNumber: "DEMO3EI07",
        email: "vivek.kumar@example.com",
        phone: "9876501007",
        gender: "male",
        branch: "EIE",
        year: "3",
        hostelPreference1: "BH-6",
        hostelPreference2: "BH-7",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO007",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T09:30:00.000Z"
    },

    // 3rd Year - Female
    {
        applicationId: "HH-2026-DEMO08",
        fullName: "Neha Yadav",
        rollNumber: "DEMO3EC08",
        email: "neha.yadav@example.com",
        phone: "9876501008",
        gender: "female",
        branch: "ECE",
        year: "3",
        hostelPreference1: "GH-1",
        hostelPreference2: "GH-2",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO008",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T09:35:00.000Z"
    },

    // 3rd Year - Female - Mutual Roommate
    {
        applicationId: "HH-2026-DEMO09",
        fullName: "Simran Kapoor",
        rollNumber: "DEMO3ME09",
        email: "simran.kapoor@example.com",
        phone: "9876501009",
        gender: "female",
        branch: "ME",
        year: "3",
        hostelPreference1: "GH-2",
        hostelPreference2: "GH-4",
        roommateRoll: "DEMO3CE10",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T09:40:00.000Z"
    },

    // 3rd Year - Female - Mutual Roommate
    {
        applicationId: "HH-2026-DEMO10",
        fullName: "Ishita Das",
        rollNumber: "DEMO3CE10",
        email: "ishita.das@example.com",
        phone: "9876501010",
        gender: "female",
        branch: "CE",
        year: "3",
        hostelPreference1: "GH-2",
        hostelPreference2: "GH-4",
        roommateRoll: "DEMO3ME09",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO010",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T09:45:00.000Z"
    },

    // 3rd Year - Male
    {
        applicationId: "HH-2026-DEMO25",
        fullName: "Abhishek Das",
        rollNumber: "DEMO3CS25",
        email: "abhishek.das@example.com",
        phone: "9876501025",
        gender: "male",
        branch: "CSE",
        year: "3",
        hostelPreference1: "BH-6",
        hostelPreference2: "BH-7",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO025",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T11:00:00.000Z"
    },

    // 3rd Year - Female
    {
        applicationId: "HH-2026-DEMO26",
        fullName: "Shreya Kapoor",
        rollNumber: "DEMO3EE26",
        email: "shreya.kapoor@example.com",
        phone: "9876501026",
        gender: "female",
        branch: "EE",
        year: "3",
        hostelPreference1: "GH-1",
        hostelPreference2: "GH-4",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Rejected",
        submittedAt: "2026-09-05T11:05:00.000Z"
    },

    // 3rd Year - Male - Mutual Roommate
    {
        applicationId: "HH-2026-DEMO27",
        fullName: "Mohit Bansal",
        rollNumber: "DEMO3ME27",
        email: "mohit.bansal@example.com",
        phone: "9876501027",
        gender: "male",
        branch: "ME",
        year: "3",
        hostelPreference1: "BH-7",
        hostelPreference2: "BH-6",
        roommateRoll: "DEMO3EI28",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO027",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T11:10:00.000Z"
    },

    // 3rd Year - Male - Mutual Roommate
    {
        applicationId: "HH-2026-DEMO28",
        fullName: "Tarun Singh",
        rollNumber: "DEMO3EI28",
        email: "tarun.singh@example.com",
        phone: "9876501028",
        gender: "male",
        branch: "EIE",
        year: "3",
        hostelPreference1: "BH-7",
        hostelPreference2: "BH-6",
        roommateRoll: "DEMO3ME27",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO028",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T11:15:00.000Z"
    },

    // 3rd Year - Female
    {
        applicationId: "HH-2026-DEMO29",
        fullName: "Aditi Sharma",
        rollNumber: "DEMO3CS29",
        email: "aditi.sharma@example.com",
        phone: "9876501029",
        gender: "female",
        branch: "CSE",
        year: "3",
        hostelPreference1: "GH-4",
        hostelPreference2: "GH-2",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO029",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T11:20:00.000Z"
    },

    // 3rd Year - Female
    {
        applicationId: "HH-2026-DEMO30",
        fullName: "Manya Gupta",
        rollNumber: "DEMO3EC30",
        email: "manya.gupta@example.com",
        phone: "9876501030",
        gender: "female",
        branch: "ECE",
        year: "3",
        hostelPreference1: "GH-1",
        hostelPreference2: "GH-2",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T11:25:00.000Z"
    },

    // 3rd Year - Male
    {
        applicationId: "HH-2026-DEMO31",
        fullName: "Yash Thakur",
        rollNumber: "DEMO3CE31",
        email: "yash.thakur@example.com",
        phone: "9876501031",
        gender: "male",
        branch: "CE",
        year: "3",
        hostelPreference1: "BH-6",
        hostelPreference2: "BH-9",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Rejected",
        submittedAt: "2026-09-05T11:30:00.000Z"
    },


    // =========================================================
    // 4th Year
    // =========================================================

    // 4th Year - Male - Single Room
    {
        applicationId: "HH-2026-DEMO11",
        fullName: "Rahul Mishra",
        rollNumber: "DEMO4CS11",
        email: "rahul.mishra@example.com",
        phone: "9876501011",
        gender: "male",
        branch: "CSE",
        year: "4",
        hostelPreference1: "BH-6",
        hostelPreference2: "BH-7",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO011",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T09:50:00.000Z"
    },

    // 4th Year - Female - Single Room
    {
        applicationId: "HH-2026-DEMO12",
        fullName: "Meera Joshi",
        rollNumber: "DEMO4EE12",
        email: "meera.joshi@example.com",
        phone: "9876501012",
        gender: "female",
        branch: "EE",
        year: "4",
        hostelPreference1: "GH-1",
        hostelPreference2: "GH-2",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T09:55:00.000Z"
    },

    // 4th Year - Male - Single Room
    {
        applicationId: "HH-2026-DEMO32",
        fullName: "Vikram Saini",
        rollNumber: "DEMO4ME32",
        email: "vikram.saini@example.com",
        phone: "9876501032",
        gender: "male",
        branch: "ME",
        year: "4",
        hostelPreference1: "BH-7",
        hostelPreference2: "BH-6",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO032",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T11:35:00.000Z"
    },

    // 4th Year - Female - Single Room
    {
        applicationId: "HH-2026-DEMO33",
        fullName: "Isha Verma",
        rollNumber: "DEMO4EC33",
        email: "isha.verma@example.com",
        phone: "9876501033",
        gender: "female",
        branch: "ECE",
        year: "4",
        hostelPreference1: "GH-2",
        hostelPreference2: "GH-4",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO033",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T11:40:00.000Z"
    },

    // 4th Year - Male - Single Room
    {
        applicationId: "HH-2026-DEMO34",
        fullName: "Ritesh Yadav",
        rollNumber: "DEMO4EI34",
        email: "ritesh.yadav@example.com",
        phone: "9876501034",
        gender: "male",
        branch: "EIE",
        year: "4",
        hostelPreference1: "BH-6",
        hostelPreference2: "BH-9",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Rejected",
        submittedAt: "2026-09-05T11:45:00.000Z"
    },

    // 4th Year - Female - Single Room
    {
        applicationId: "HH-2026-DEMO35",
        fullName: "Sakshi Jain",
        rollNumber: "DEMO4CE35",
        email: "sakshi.jain@example.com",
        phone: "9876501035",
        gender: "female",
        branch: "CE",
        year: "4",
        hostelPreference1: "GH-4",
        hostelPreference2: "GH-1",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO035",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T11:50:00.000Z"
    },

    // 4th Year - Male - Single Room
    {
        applicationId: "HH-2026-DEMO36",
        fullName: "Ankit Rawat",
        rollNumber: "DEMO4CS36",
        email: "ankit.rawat@example.com",
        phone: "9876501036",
        gender: "male",
        branch: "CSE",
        year: "4",
        hostelPreference1: "BH-9",
        hostelPreference2: "BH-7",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO036",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T11:55:00.000Z"
    },

    // 4th Year - Female - Single Room
    {
        applicationId: "HH-2026-DEMO37",
        fullName: "Tanvi Roy",
        rollNumber: "DEMO4ME37",
        email: "tanvi.roy@example.com",
        phone: "9876501037",
        gender: "female",
        branch: "ME",
        year: "4",
        hostelPreference1: "GH-1",
        hostelPreference2: "GH-4",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Rejected",
        submittedAt: "2026-09-05T12:00:00.000Z"
    },


    // =========================================================
    // Additional Mixed Applications
    // =========================================================

    // 2nd Year - Male
    {
        applicationId: "HH-2026-DEMO38",
        fullName: "Varun Gupta",
        rollNumber: "DEMO2EE38",
        email: "varun.gupta@example.com",
        phone: "9876501038",
        gender: "male",
        branch: "EE",
        year: "2",
        hostelPreference1: "BH-4",
        hostelPreference2: "BH-8",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO038",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T12:05:00.000Z"
    },

    // 3rd Year - Female
    {
        applicationId: "HH-2026-DEMO39",
        fullName: "Divya Menon",
        rollNumber: "DEMO3EE39",
        email: "divya.menon@example.com",
        phone: "9876501039",
        gender: "female",
        branch: "EE",
        year: "3",
        hostelPreference1: "GH-2",
        hostelPreference2: "GH-4",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO039",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T12:10:00.000Z"
    },

    // 2nd Year - Male
    {
        applicationId: "HH-2026-DEMO40",
        fullName: "Rajat Singh",
        rollNumber: "DEMO2CE40",
        email: "rajat.singh@example.com",
        phone: "9876501040",
        gender: "male",
        branch: "CE",
        year: "2",
        hostelPreference1: "BH-8",
        hostelPreference2: "BH-1",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Rejected",
        submittedAt: "2026-09-05T12:15:00.000Z"
    },

    // 3rd Year - Male
    {
        applicationId: "HH-2026-DEMO41",
        fullName: "Saurabh Mishra",
        rollNumber: "DEMO3ME41",
        email: "saurabh.mishra@example.com",
        phone: "9876501041",
        gender: "male",
        branch: "ME",
        year: "3",
        hostelPreference1: "BH-6",
        hostelPreference2: "BH-7",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO041",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T12:20:00.000Z"
    },

    // 2nd Year - Female
    {
        applicationId: "HH-2026-DEMO42",
        fullName: "Muskan Sharma",
        rollNumber: "DEMO2CS42",
        email: "muskan.sharma@example.com",
        phone: "9876501042",
        gender: "female",
        branch: "CSE",
        year: "2",
        hostelPreference1: "GH-5",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO042",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T12:25:00.000Z"
    },

    // 3rd Year - Female
    {
        applicationId: "HH-2026-DEMO43",
        fullName: "Pallavi Das",
        rollNumber: "DEMO3CE43",
        email: "pallavi.das@example.com",
        phone: "9876501043",
        gender: "female",
        branch: "CE",
        year: "3",
        hostelPreference1: "GH-4",
        hostelPreference2: "GH-2",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T12:30:00.000Z"
    },

    // 4th Year - Male
    {
        applicationId: "HH-2026-DEMO44",
        fullName: "Akash Choudhary",
        rollNumber: "DEMO4EI44",
        email: "akash.choudhary@example.com",
        phone: "9876501044",
        gender: "male",
        branch: "EIE",
        year: "4",
        hostelPreference1: "BH-7",
        hostelPreference2: "BH-9",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO044",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T12:35:00.000Z"
    },

    // 3rd Year - Female
    {
        applicationId: "HH-2026-DEMO45",
        fullName: "Komal Gupta",
        rollNumber: "DEMO3EC45",
        email: "komal.gupta@example.com",
        phone: "9876501045",
        gender: "female",
        branch: "ECE",
        year: "3",
        hostelPreference1: "GH-1",
        hostelPreference2: "GH-4",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO045",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T12:40:00.000Z"
    },

    // 2nd Year - Male
    {
        applicationId: "HH-2026-DEMO46",
        fullName: "Gaurav Singh",
        rollNumber: "DEMO2EI46",
        email: "gaurav.singh@example.com",
        phone: "9876501046",
        gender: "male",
        branch: "EIE",
        year: "2",
        hostelPreference1: "BH-1",
        hostelPreference2: "BH-8",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Rejected",
        submittedAt: "2026-09-05T12:45:00.000Z"
    },

    // 3rd Year - Male
    {
        applicationId: "HH-2026-DEMO47",
        fullName: "Karan Malhotra",
        rollNumber: "DEMO3CS47",
        email: "karan.malhotra@example.com",
        phone: "9876501047",
        gender: "male",
        branch: "CSE",
        year: "3",
        hostelPreference1: "BH-9",
        hostelPreference2: "BH-6",
        roommateRoll: "",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO047",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T12:50:00.000Z"
    },

    // 4th Year - Female
    {
        applicationId: "HH-2026-DEMO48",
        fullName: "Nisha Agarwal",
        rollNumber: "DEMO4EE48",
        email: "nisha.agarwal@example.com",
        phone: "9876501048",
        gender: "female",
        branch: "EE",
        year: "4",
        hostelPreference1: "GH-2",
        hostelPreference2: "GH-1",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO048",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T12:55:00.000Z"
    },

    // 2nd Year - Female
    {
        applicationId: "HH-2026-DEMO49",
        fullName: "Shalini Verma",
        rollNumber: "DEMO2ME49",
        email: "shalini.verma@example.com",
        phone: "9876501049",
        gender: "female",
        branch: "ME",
        year: "2",
        hostelPreference1: "GH-5",
        roommateRoll: "",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Under Review",
        submittedAt: "2026-09-05T13:00:00.000Z"
    },

    // 4th Year - Male
    {
        applicationId: "HH-2026-DEMO50",
        fullName: "Rohit Agarwal",
        rollNumber: "DEMO4CE50",
        email: "rohit.agarwal@example.com",
        phone: "9876501050",
        gender: "male",
        branch: "CE",
        year: "4",
        hostelPreference1: "BH-6",
        hostelPreference2: "BH-7",
        feeStatus: "paid",
        receiptNumber: "REC-DEMO050",
        declaration: "accepted",
        status: "Approved",
        submittedAt: "2026-09-05T13:05:00.000Z"
    }

];