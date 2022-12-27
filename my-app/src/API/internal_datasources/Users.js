import axios from 'axios';
import GLOBAL_CONFIG from '../config';

const link = GLOBAL_CONFIG.internalAPISource;

export const LoadPaginatedData = (setUsers, configuration, callback) => {
    axios.post(link+'/users/', configuration).then((response) => {
        setUsers(response.data);
        if (typeof callback == typeof (() => {})) callback();
    });
};

export const createNewUser = (config, callback) => {
    console.log(config);
    axios.post(link+'/auth/register', config)
        .then((response) => {
           // Notification('Success', response.data, 'success', 1500);
            if (typeof callback == typeof (() => {})) callback();
        });
};

export const UpdateUser = (User, callback) => {
    axios.put(link+'/users/', User).then(() => {
        if (typeof callback == typeof (() => {})) callback();
    });
};

export const ChangeUserExpiration = (login, callback) => {
    axios
        .delete(link+'/users/' + login)
        .then(() => {
            if (typeof callback == typeof (() => {})) callback();
        })
        .catch((error) => {
           // Notification('Error', error, 'danger', 3000);
        });
};

export const GetUserFeed = (callback, {pageSize, textSearch}) =>{
    var users = MOCK_USERS;

    users = users.filter(user => (user.fullName+user.status+user.values).toLowerCase().includes(textSearch.toLowerCase()));
    
    console.log(textSearch, users);

   callback(users.slice(0, pageSize));
}

export const GetUserById=(id) =>{
    var users = MOCK_USERS;

    return users.find(user => user.id==id);
}

const mockUser = (id, fullName, status, values, match, photo, city, CV, banner) =>{
    return {
        id: id,
        fullName: fullName,
        status: status,
        values: values,
        match: match,
        photo: photo,
        city: city,
        CV: CV,
        banner: banner
    }
}


const MOCK_USERS = [
    {
        id: 1,
        fullName: "Jane Smith",
        status: "Manager",
        values: "compassion, empathy, kindness, generosity, understanding",
        match: 78,
        city: "Scranton, PA",
        CV: ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        banner: "https://static.wikia.nocookie.net/theoffice/images/2/2d/Dunder_Mifflin%2C_Inc_Long.jpg"
    },
    {
        id: 2,
        fullName: "John Doe",
        status: "Team Lead",
        values: "tolerance, acceptance, patience, cooperation, support",
        match: 91,
        city: "Scranton, PA",
        CV: ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        banner:"https://static.wikia.nocookie.net/theoffice/images/2/2d/Dunder_Mifflin%2C_Inc_Long.jpg"
    },
    {
        id: 3,
        fullName: "Samantha Jones",
        status: "Consultant",
        values: "respect, fairness, honesty, responsibility, integrity",
        match: 65,
        city: "Scranton, PA",
        CV: ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        banner:"https://static.wikia.nocookie.net/theoffice/images/2/2d/Dunder_Mifflin%2C_Inc_Long.jpg"
    },
    {
        id: 4,
        fullName: "Michael Williams",
        status: "CEO",
        values: "humility, gratitude, forgiveness, compassion, creativity",
        match: 82,
        city: "Scranton, PA",
        CV: ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],
        photo: "https://randomuser.me/api/portraits/men/4.jpg",
        banner:"https://static.wikia.nocookie.net/theoffice/images/2/2d/Dunder_Mifflin%2C_Inc_Long.jpg"
    },
    {
        id: 5,
        fullName: "Emily Brown",
        status: "HR Coordinator",
        values: "courage, resilience, perseverance, determination, optimism",
        match: 74,
        city: "Scranton, PA",
        CV: ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        banner:"https://static.wikia.nocookie.net/theoffice/images/2/2d/Dunder_Mifflin%2C_Inc_Long.jpg"
    },
    mockUser(6, "John Kennedy", "Self-Employed Filantropist", "Genius, Hopeful, Successful, Believer, Humble", "37","https://randomuser.me/api/portraits/men/8.jpg", "Scranton, PA", ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"], "https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2018/04/brandbanner-mcd-1100x200.png"),
    mockUser(7, "Jack Black", "Musician", "Straight-forward, Creative, Busy, Charming, Funny", "56","https://randomuser.me/api/portraits/men/9.jpg", "Scranton, PA", ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],"https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2018/04/brandbanner-mcd-1100x200.png"),
    mockUser(8, "Catherine El Mugeto", "Singer/Mom", "Honest, Abrupt, Funny, Serious", "50%","https://randomuser.me/api/portraits/men/10.jpg", "Scranton, PA", ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],"https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2018/04/brandbanner-mcd-1100x200.png"),
    mockUser(9, "Jonny Black", "Product Manager at PearlBright", "Loyal, Hard-working, Serious, Cheerful, Determined", "50","https://randomuser.me/api/portraits/men/11.jpg", "Scranton, PA", ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],"https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2018/04/brandbanner-mcd-1100x200.png"),
    mockUser(10, "Pramiro Hon Cuse", "", "Loyal, Hard-working, Serious, Cheerful, Determined", "50","https://randomuser.me/api/portraits/men/12.jpg", "Scranton, PA", ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],"https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2018/04/brandbanner-mcd-1100x200.png"),
];