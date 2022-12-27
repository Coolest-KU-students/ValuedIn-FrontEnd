
import Organization1 from './../../public/Organization1.jpg'
import Organization2 from './../../public/Organization2.jpg'
import Organization3 from './../../public/Organization3.jpg'
import Organization4 from './../../public/Organization4.jpg'


const mockOrganization =(id, name, city, values, banner, match, description, owner, positions, employeeValues)=>{
    return {
        id: id,
        name: name,
        city: city,
        values: values, 
        banner: banner,
        match: match, 
        description: description,
        owner: owner,
        slogan: description,
        openPositions: positions,
        employeeValues: employeeValues
    }

}

const ORGANIZATIONS = [
    mockOrganization(1, "BarberShop", "Bakersfield, CA", ["Honesty", "Communication", "Extrovert", "Artistic"], Organization1, "12", "Classic Barbershop for Your needs", "James Kameron",  ["Barber"], ["Extrovert", "Honest", "Forth-coming"]),
    mockOrganization(2, "Saturated Development", "New York, NY", ["Open-minded", "Honesty", "Hard-working", "Solitary"], Organization2, "76", "We develop projects for incredible ideas", "Jak Blak",  ["Front End Developer"], ["Introvert", "Honest", "Forth-coming"]),
    mockOrganization(3, "WapeNash", "Alameda, CA", ["Friendly","Open-minded", "Commited", "Empathic"], Organization3, "52", "Ping Pong, pick Your Bong", "Jane Smith",  ["Assistant Manager"], ["Truth-seeker", "Honest", "Humble"]),
    mockOrganization(4, "Secret Shakespearean Club", "Pawleys Island, SC", ["Literate", "Tech-savvy", "Clever", "Forth-coming"], Organization4, "32", "Selling Highest quality Shakespearean books+", "Julius Keaser",  ["Cashier", "Salesperson"], ["Clever", "Responsible", "Fulfilled"]),
]


export const getOrganizationById = (id) =>{
    return ORGANIZATIONS[id]; 
}