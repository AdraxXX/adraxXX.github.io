document.querySelector("#fName").textContent = profile.firstName;
let lName = document.createElement('span');
lName.classList = "text-primary";
lName.textContent = " " + profile.lastName;
document.querySelector("#fName").appendChild(lName);

document.querySelector("#location").textContent = profile.address;
let email = document.createElement('a');
email.href = "mailto:" + profile.email;
email.textContent = " " + profile.email;
document.querySelector("#location").appendChild(email);

document.querySelector("#about p").textContent = profile.about;

// Experice Page
let experices = profile.experience;
let expericeTab = document.querySelector("#experience div");
experices.forEach(experice =>
{
    let card = document.createElement('div');
    card.classList = "resume-item d-flex flex-column flex-md-row justify-content-between mb-5";
   
    let resumeContent = document.createElement('div');
    resumeContent.classList = "resume-content";
    
    let title = document.createElement('h3');
    title.classList = "mb-0";
    title.textContent = experice.title;
    
    let employer = document.createElement('div');
    employer.classList = "subheading mb-3";
    employer.textContent = experice.employer;
    
    resumeContent.appendChild(title);
    resumeContent.appendChild(employer);
    
    experice.details.forEach(bullet =>
    {
        let point = document.createElement('p');
        point.textContent = bullet.info;
        resumeContent.appendChild(point);
    });
    
    let dateArea = document.createElement('div');
    dateArea.classList = "resume-date text-md-right";
    
    let location = document.createElement('div');
    location.classList = "text-primary";
    location.textContent = "Location: " + experice.location
    
    let date = document.createElement('span');
    date.classList = "text-primary";
    date.textContent = experice.dates;
    
    dateArea.appendChild(date);
    dateArea.appendChild(location);
    
    card.appendChild(resumeContent);
    card.appendChild(dateArea);
    expericeTab.appendChild(card);
});

// Education Page
let education = profile.education;
let educationTab = document.querySelector("#education div");
education.forEach(educationExperice =>
{
    let card = document.createElement('div');
    card.classList = "resume-item d-flex flex-column flex-md-row justify-content-between mb-5";
    
    let resumeContent = document.createElement('div');
    resumeContent.classList = "resume-content";
    
    let school = document.createElement('h3');
    school.classList = "mb-0";
    school.textContent = educationExperice.school;
    
    let degree = document.createElement('div');
    degree.classList = "subheading mb-3";
    degree.textContent = educationExperice.degree;
    
    let track = document.createElement('div');
    track.textContent = educationExperice.track;
    
    resumeContent.appendChild(school);
    resumeContent.appendChild(degree);
    resumeContent.appendChild(track);
    
    let dateArea = document.createElement('div');
    dateArea.classList = "resume-date text-md-right";
    
    let date = document.createElement('span');
    date.classList = "text-primary";
    date.textContent = educationExperice.graduationDate;
    
    let gpa = document.createElement('p');
    gpa.classList = "text-primary";
    gpa.textContent = "GPA: " + educationExperice.gpa;
    
    
    dateArea.appendChild(date);
    dateArea.appendChild(gpa);
    
    card.appendChild(resumeContent);
    card.appendChild(dateArea);
    educationTab.appendChild(card);
});

// Awards / Certs Page
let awards = profile.awards;
let awardsTab = document.querySelector("#awards div ul");
awards.forEach(award =>
{
    let card = document.createElement('li');
    
    let dateArea = document.createElement('div');
    dateArea.classList = "resume-date text-md-right";
    
    let from = document.createElement('span');
    from.classList = "text-primary";
    from.textContent = award.from + ": " + award.date;
    
    dateArea.appendChild(from);
    
    let name = document.createElement('i');
    if(award.award == 1)
        name.classList = "fa-li fa fa-trophy text-warning";
    else
        name.classList = "fa-li fa fa-certificate text-warning";
    
    let nameOfAward = document.createTextNode(award.title);
    
    card.appendChild(dateArea);
    card.appendChild(name);
    card.appendChild(nameOfAward);
    
    awardsTab.appendChild(card);
});

// Projects Page
let projects = profile.projects;
let projectsTab = document.querySelector("#projects div");
projects.forEach(project =>
{
    let card = document.createElement('div');
    card.classList = "resume-item d-flex flex-column flex-md-row justify-content-between mb-5";
   
    let resumeContent = document.createElement('div');
    resumeContent.classList = "resume-content";
    
    let title = document.createElement('h3');
    title.classList = "mb-0";
    title.textContent = project.name;
    
    resumeContent.appendChild(title);
    
    project.details.forEach(bullet =>
    {
        let point = document.createElement('p');
        point.textContent = bullet.info;
        resumeContent.appendChild(point);
    });
    
    let dateArea = document.createElement('div');
    dateArea.classList = "resume-date text-md-right";
    
    let date = document.createElement('span');
    date.classList = "text-primary";
    date.textContent = project.dates;
    
    let status = document.createElement('div');
    status.classList = "text-primary";
    status.textContent = "Status: " + project.status
    
    dateArea.appendChild(date);
    dateArea.appendChild(status);
    
    card.appendChild(resumeContent);
    card.appendChild(dateArea);
    projectsTab.appendChild(card);
});
