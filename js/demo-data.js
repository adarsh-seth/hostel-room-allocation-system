const demoApplications = [
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
        status: "Submitted",
        submittedAt: "2026-09-05T09:00:00.000Z"
    },

    // 1st Year - Female
    // Female 1st year has only GH-3, so hostelPreference2
    // is intentionally not included.
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
        status: "Submitted",
        submittedAt: "2026-09-05T09:05:00.000Z"
    },


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
        status: "Submitted",
        submittedAt: "2026-09-05T09:10:00.000Z"
    },

    // 2nd Year - Male - Mutual Roommate 1
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
        roommateRoll: "DEMO2EE05",
        feeStatus: "pending",
        receiptNumber: "",
        declaration: "accepted",
        status: "Submitted",
        submittedAt: "2026-09-05T09:15:00.000Z"
    },

    // 2nd Year - Male - Mutual Roommate 2
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
        status: "Submitted",
        submittedAt: "2026-09-05T09:20:00.000Z"
    },

    // 2nd Year - Female
    // Only GH-5 is eligible.
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
        status: "Submitted",
        submittedAt: "2026-09-05T09:25:00.000Z"
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
        status: "Submitted",
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
        status: "Submitted",
        submittedAt: "2026-09-05T09:35:00.000Z"
    },

    // 3rd Year - Female - Roommate
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
        status: "Submitted",
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
        status: "Submitted",
        submittedAt: "2026-09-05T09:45:00.000Z"
    },


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
        status: "Submitted",
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
        status: "Submitted",
        submittedAt: "2026-09-05T09:55:00.000Z"
    }

];
