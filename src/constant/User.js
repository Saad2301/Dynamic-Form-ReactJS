export const Fields = [
  {
    class:'input',
    title: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "enter your first name",
    regex: /^[a-zA-Z ]+$/,
    errorMessage: "Please Enter a valid Name",
    isRequired: true
  },
  {
    class:'input',
    title: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "enter your last name",
    regex: /^[a-zA-Z ]+$/,
    errorMessage: "Please Enter a valid Name",
  },
  {
    class:'input',
    title: "Email",
    type: "email",
    name: "email",
    placeholder: "xyz@gmail.com",
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    errorMessage: "Please Enter a valid Email",
   
  },
  {
    class:'input',
    title: "Contact",
    type: "tel",
    name: "contact",
    placeholder: "+92 310..",
    regex: /^\d{10}$/,
    errorMessage: "contact is not valid",
  },
  {
    class:'input',
    title:'City',
    name :'city',
    type : 'select',
    Option: [
      {
        label: "other",
        value: "other",
      },
        {
          label: "Islamabad",
          value: "Islamabad",
        },
        {
          label: "karachi",
          value: "karachi",
        },
        {
            label: "lahore",
            value: "lahore",
          },
          {
            label: "peshawar",
            value: "peshawar",
          },
          {
            label: "faisalabad",
            value: "faisalabad",
          },
        
      ],

  },
  {
    title: "Gender",
    type: "radio",
    name: "gender",
    regex: /^(male|female|other)$/i,
    errorMessage: 'Please select a gender',
    Option: [
      {
        label: "Male",
        value: "Male",
      },
      {
        label: "Female",
        value: "Female",
      },
      
    ],
  },
 
  {
    type:'checkbox',
    title:'Terms/conditions',
    name : 'terms',

  }
];
