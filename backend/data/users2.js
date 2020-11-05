import bcrypt from "bcryptjs";

const users2 = [
  {
    name: "Kip Reinger",
    email: "Corbin.Howell@gmail.com",
    profile: {
      phone: "248-195-9658 x62139",
      dob: "1963-03-08T15:42:42.785Z",
      address: {
        street: "97985 Ruecker Spur",
        city: "West Juliannetown",
        state: "Rhode Island",
        zip: "01868-4410",
      },
      emergencyContactName: "Gino Pacocha",
      emergencyContactPhone: "(689) 056-2044 x8571",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg",
    },
  },
  {
    name: "Dr. Craig Blanda",
    email: "Cade47@hotmail.com",
    profile: {
      phone: "174.765.4568 x104",
      dob: "1974-04-26T14:36:20.285Z",
      address: {
        street: "685 Desiree Rue",
        city: "Ramonstad",
        state: "South Dakota",
        zip: "27910",
      },
      emergencyContactName: "Kimberly Collier",
      emergencyContactPhone: "055.741.7533 x423",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/moynihan/128.jpg",
    },
  },
  {
    name: "Mrs. Eusebio Pfeffer",
    email: "Jerry28@hotmail.com",
    profile: {
      phone: "602.593.7057 x18170",
      dob: "1989-09-29T10:50:30.612Z",
      address: {
        street: "111 Thiel Wall",
        city: "Hayesland",
        state: "Kansas",
        zip: "84492-8739",
      },
      emergencyContactName: "Halle Ortiz IV",
      emergencyContactPhone: "1-026-089-5252",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/richardgarretts/128.jpg",
    },
  },
  {
    name: "Miss Thelma Jakubowski",
    email: "Raoul.Wolff57@gmail.com",
    profile: {
      phone: "1-800-017-1428 x7267",
      dob: "1999-03-17T19:57:03.147Z",
      address: {
        street: "93126 Fredy Square",
        city: "Sporerton",
        state: "Georgia",
        zip: "49347-7436",
      },
      emergencyContactName: "Sabryna Larkin",
      emergencyContactPhone: "(151) 966-8807",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/cggaurav/128.jpg",
    },
  },
  {
    name: "Kieran Metz",
    email: "Ashley26@yahoo.com",
    profile: {
      phone: "401-619-6563 x9684",
      dob: "1964-03-26T01:00:00.752Z",
      address: {
        street: "2130 Callie Expressway",
        city: "North Piper",
        state: "Tennessee",
        zip: "35400",
      },
      emergencyContactName: "Drew Spinka",
      emergencyContactPhone: "1-059-821-2454 x666",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/iamkarna/128.jpg",
    },
  },
  {
    name: "Carol Aufderhar",
    email: "Avery_Bruen62@yahoo.com",
    profile: {
      phone: "1-151-620-9037 x6861",
      dob: "1975-11-20T05:57:32.874Z",
      address: {
        street: "32568 Moises Road",
        city: "Friedatown",
        state: "Vermont",
        zip: "46960",
      },
      emergencyContactName: "Dexter Nienow",
      emergencyContactPhone: "825-716-1440",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/plbabin/128.jpg",
    },
  },
  {
    name: "Dixie Lindgren",
    email: "Khalid_Mann31@gmail.com",
    profile: {
      phone: "364-758-9471 x309",
      dob: "1954-02-01T11:30:26.676Z",
      address: {
        street: "39862 Sipes Court",
        city: "Port Osbaldoside",
        state: "Connecticut",
        zip: "76344-4394",
      },
      emergencyContactName: "Arielle Ortiz",
      emergencyContactPhone: "1-060-950-5435 x62078",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/andrewcohen/128.jpg",
    },
  },
  {
    name: "Lysanne Jakubowski",
    email: "Ines77@hotmail.com",
    profile: {
      phone: "340-734-6996 x23075",
      dob: "1966-05-13T08:25:22.043Z",
      address: {
        street: "789 Shanelle Islands",
        city: "East Elbert",
        state: "Arizona",
        zip: "35718-2331",
      },
      emergencyContactName: "Albina Collier",
      emergencyContactPhone: "556.744.3010",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/taylorling/128.jpg",
    },
  },
  {
    name: "Dr. Joshua Bartoletti",
    email: "Caleigh.Johnson17@hotmail.com",
    profile: {
      phone: "(238) 511-4505 x38274",
      dob: "1988-06-04T14:34:56.105Z",
      address: {
        street: "6450 Durgan Glen",
        city: "Adellefurt",
        state: "Pennsylvania",
        zip: "79035",
      },
      emergencyContactName: "Miss Otho Von",
      emergencyContactPhone: "998.632.6258 x04217",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg",
    },
  },
  {
    name: "Christopher Reichert",
    email: "Andre_Conroy@hotmail.com",
    profile: {
      phone: "394-498-5570 x5638",
      dob: "1999-07-09T09:04:46.795Z",
      address: {
        street: "1434 Will Stream",
        city: "Kutchmouth",
        state: "Maryland",
        zip: "88093",
      },
      emergencyContactName: "Lila Cartwright",
      emergencyContactPhone: "(099) 587-3951 x2015",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/salvafc/128.jpg",
    },
  },
];

export default users2;
