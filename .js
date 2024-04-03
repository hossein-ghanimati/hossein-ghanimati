const getData = (dataName) => {
    let data = null;

    switch (dataName) {
        case "name":
            data ="Hossein Ghanimati"
            break;
    
        case "skills":
            data ="HTML CSS JS"
            break;

        case "workSamples":
            data = [
                {
                    name : "asancode training site",
                    category : "training",
                    languages : "HTML, CSS, JS",
                    description : `
                        An educational site with all facilities, responsive and with a management panel
                    `,
                    link : "https://hossein-ghanimati.github.io/asancode"
                }
            ]
            break;

    
        case "description":
            data = `Hi guys. I'm Front End Developer. My skills are HTML, CSS and javascript. I have been in the front-end world for almost a year
            And I have been dealing with the dear JavaScript language for almost 9 months
            I have recently mastered Javascript and am about to start learning React`
            break;
    
        default:
            data = "The JS Developer";
    }
    return data
}


const getInfo = username => {
    if(username != "hossein-ghanimati") return false;

    const info = {
        name : getData('name'),
        skills : getData('skills'),
        workSamples : getData('workSamples'),
        description : getData("description")
    }

    return JSON.stringify(info)
}

export {getInfo}
