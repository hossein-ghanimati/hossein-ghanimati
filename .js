const getData = (dataName) => {
    let data = null;

    switch (dataName) {
        case "name":
            data ="Hossein Ghanimati"
            break;

    
        case "description":
            data = `Hi guys. I'm Front End Developer. My skills are HTML, CSS , javascript, tailwind, react, typescript (and some other packages). I have been in the front-end world for almost 1\5 year 
            \nAnd I have been dealing with the dear JavaScript language for almost 1 year and 2 month \nI have recently mastered react and am about to start learning Next`
            break;
    
        default:
            data = "The JS Developer";
    }
    return data
}


const getInfo = username => {
    if(username != "hossein-ghanimati") return false;

    const info = {
        name : getData('name')
        description : getData("description")
    }

    return JSON.stringify(info)
}

export {getInfo}
