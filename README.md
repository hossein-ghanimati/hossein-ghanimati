```javascript
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

    return info
}

const information = getInfo("hossein-ghanimati") 
console.log(information);
```

#### outPut : 

``` json
{
    name: 'Hossein Ghanimati',
    skills: 'HTML CSS JS',
    workSamples: [
      {
        name: 'asancode training site',
        category: 'training',
        languages: 'HTML, CSS, JS',
        description: '\n' +
          '                        An educational site with all facilities, responsive and with a management panel\n' +
          '                    ',
        link: 'https://hossein-ghanimati.github.io/asancode'
      }
    ],
    description: "Hi guys. I'm Front End Developer. My skills are HTML, CSS and javascript. I have been in the front-end world for almost a year\n" +
      '            And I have been dealing with the dear JavaScript language for almost 9 months\n' +
      '            I have recently mastered Javascript and am about to start learning React'
}
```

### Hi there 👋

<!--
**hossein-ghanimati/hossein-ghanimati** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
