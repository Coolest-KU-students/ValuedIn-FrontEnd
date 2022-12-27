import Organization1 from './../../public/Organization1.jpg'
import Organization2 from './../../public/Organization2.jpg'
import Organization3 from './../../public/Organization3.jpg'
import Organization4 from './../../public/Organization4.jpg'

let indexCalc = 0;

const createMockJob = (jobAvatar, jobTitle, jobDescription, jobTags, values, match) =>{
    return {
        jobId: ++indexCalc,
        jobAvatar: jobAvatar,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        jobTags: jobTags,
        values: values,
        match: match
    }
}

const MockedData = [
    createMockJob(Organization1, "Barber in BarberShop", "BarberShop provides a wide array of men's haircuts and styles for a diverse clientele.", "Barber, fulltime", "Openness, Extrovert, Empathic, Social", "54"),
    createMockJob(Organization2, "Front End Developer in Saturated Development", "Saturated Development network is a curated group of some of the fastest growing startups and tech companies in the country.", "IT, developer, remote, fulltime", "Eager, Honest, Loyal, Hard-working", "81"),
    createMockJob(Organization3, "Assistant Manager in WapeNash", "WapeNash is immediately hiring a full-time Assistant Store Manager to join our team in Alameda, California!", "Management, urgently hiring", "Social, Hard-working, Authentic, Fit", "32"),
    createMockJob(Organization4, "Secret Shakespearean Club", "If you are a person in constant motion, a motivated, enthusiastic, go-getter who enjoys a fast-paced team environment laced with challenges and opportunities, you are coming to the right place, come join a FUN team - APPLY TODAY!", "Part-time", "Apathic, Solitary, Devious, Humble", "31")
]

const createJobProfile = (jobAvatar, jobTitle, jobOffer, jobLocation, jobDescription, jobField, jobSkills, jobSalary, match, values) =>{
    return {
        jobAvatar: jobAvatar,
        jobTitle: jobTitle,
        jobOffer: jobOffer,
        jobLocation: jobLocation,
        jobDescription: jobDescription,
        jobField: jobField,
        jobSkills: jobSkills,
        jobSalary: jobSalary,
        match: match, 
        values: values
    };
}

const MockedJobProfile = [
    createJobProfile(Organization1, "BarberShop", "Barber", "Bakersfield, CA", "BarberShop provides a wide array of men's haircuts and styles for a diverse clientele.", "Field of work: Barber",
    "Skills required: Barber applicants must hold a valid NJ barber or cosmetology license. They must be efficient in short and long scissor and clipper cuts, beard trims and straight razor shaves. Customer service, styling techniques and knowledge on current trends is a plus.",
    "Salary: $45,000 - $85,000 a year", "57", "Openness, Extrovert, Empathic, Social"),

    createJobProfile(Organization2, "Saturated Development", "Front End Developer", "New York, NY", "Saturated Development network is a curated group of some of the fastest growing startups and tech companies in the country. We actively turn away more than 50% of companies that attempt to join.", "Field of work: IT",
    "Skills required: Our companies look for Frontend Developers proficient in HTML, CSS, JavaScript, and more. The ideal candidate is passionate about building UIs that solve complex problems and are delightful to use. Many of our companies are looking for mid-to-senior level talent, both individual contributors and managers.",
    "Salary: $122,151.00 - $132,833.00 per year", "80", "Eager, Honest, Loyal, Hard-working"),

    createJobProfile(Organization3, "WapeNash", "Assistant Manager", "Alameda, CA", "WapeNash is immediately hiring a full-time Assistant Store Manager to join our team in Alameda, California! Become a part of our store leadership team and enjoy a culture of collaboration and teamwork in an engaging, fast-paced environment. As Assistant Store Manager, you will have the opportunity to grow your own career while also playing a significant role in leading associate development.", "Field of work: Management",
    "Skills required:Adaptability, Collaboration, Customer focus, Oral and written communication skills, Team leader/builder/player, Problem analysis/solving, Understand key performance and reporting indicators, Planning, organizing and scheduling, People skills.",
    "Salary: $63,100.00 - $100,700.00 per year", "21", "Social, Hard-working, Authentic, Fit"),

    createJobProfile(Organization4, "Secret Shakespearean Club", "Cashier/Salesperson", "Pawleys Island, SC", "If you are a person in constant motion, a motivated, enthusiastic, go-getter who enjoys a fast-paced team environment laced with challenges and opportunities, you are coming to the right place, come join a FUN team - APPLY TODAY!", "Field of work: Sales",
    "Skills required: Contributes to a customer focused environment while demonstrating excellent service, Communicates clearly with customers, team and leadership, Reliable, trustworthy, and dedicated to growing with a great company, Ability to work effectively independently and within a team to perform all tasks as assigned, Maintains a positive attitude; works with a sense of urgency; demonstrates timely and thoroughly execution, Flexible with an ability to handle multiple tasks where priorities shift with the demands of the business.",
    "Salary: From $15.00 per hour", "12", "Apathic, Solitary, Devious, Humble")
]



export const loadJobOverviews = (dataCallback) => {
    setTimeout(()=>{dataCallback(MockedData)}, 300);
}

export const loadJobProfile = (id, dataCallback) => {
    setTimeout(()=>{dataCallback(MockedJobProfile[id])}, 300);
}
