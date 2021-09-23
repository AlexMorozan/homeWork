const contact = {
    name: {},
    lastName: {},
    callNumber: {},
    setName: ()=> {
        contact.name = prompt(`Введите имя контакта`);
        while(contact.name == null || contact.name == '')
        {
            contact.name = prompt(`Введите имя контакта`);
        }
    },
    setLastName: ()=> {
        contact.lastName = prompt(`Введите фамилию контакта`);
        while(contact.lastName == null || contact.lastName == '')
        {
            contact.lastName = prompt(`Введите фамилию контакта`);
        }
    },
    setNumber: ()=> {
        contact.callNumber = prompt(`Введите номер телефона контакта`);
        while(contact.callNumber == null || contact.callNumber == '')
        {
            contact.callNumber = prompt(`Введите номер телефона контакта`);
        }
    },
    setContact: ()=>{
        contact.setName();
        contact.setLastName();
        contact.setNumber();
    },
    print: ()=>{
        alert(`Имя: ${contact.name}  Фамилия: ${contact.lastName}  Номер телефона: ${contact.callNumber}`);
    }
};
contact.setContact();
contact.print();