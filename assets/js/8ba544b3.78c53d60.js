"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7259],{45680:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(30828);const r={},i="Validators selection",o={unversionedId:"applications/validators_selection",id:"applications/validators_selection",title:"Validators selection",description:"- Team Name: Optymalizacja AI Grzegorz Miebs",source:"@site/docs/applications/validators_selection.md",sourceDirName:"applications",slug:"/applications/validators_selection",permalink:"/Grants-Program/applications/validators_selection",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Basic functionality",id:"milestone-1-example--basic-functionality",level:3},{value:"Milestone 2 (Testing)",id:"milestone-2-testing",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},d="wrapper";function u(t){let{components:e,...a}=t;return(0,l.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"validators-selection"},"Validators selection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Optymalizacja AI Grzegorz Miebs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qtcjq0jpcup43ny5e66f6kuvcn9pyhamguecsgu BTC"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("p",null,"Response to an RFP ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/docs/rfps/Open/validator-selection-algorithm.md",title:"validator-selection-algorithm.md"},"validator-selection-algorithm"),"."),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This project aims to create a decision-support tool aiding nominators in selecting validators based on their individual preferences. These preferences are expressed in a very easy and intuitive way by performing pairwise comparisons. A nominator has to answer several times (around 6) which one out of two present validators they prefer. Based on these comparisons a mathematical model reflecting the nominator's preference is created. Finally, the model is used to rank validators.\nI was already involved in a research phase of this project hence I'd like to make a final version."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"The aim of this project is only a backend. The final result will be a Python flask application exposing its functionality via RESTful API"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Functionality"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Providing a pair of validators for comparison"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Input:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"previous comparisons"))),(0,l.kt)("li",{parentName:"ul"},"Output:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"next pair"),(0,l.kt)("li",{parentName:"ul"},"current model\u2019s quality"),(0,l.kt)("li",{parentName:"ul"},"current model"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Providing a ranking for a given model"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Input:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"model"))),(0,l.kt)("li",{parentName:"ul"},"Output:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ranking of validators"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accepting new data"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Input:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"validators.csv file that contains information of recent era data from trusted sources")))))))),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"This application will be used in a validators selection phase, thus all nominators are its audience. The project makes the selection process easier and more robust. To the best of my knowledge, there isn't a similar project."),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Grzegorz Miebs")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Grzegorz Miebs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:grzegorz.miebs@protonmail.ch"},"grzegorz.miebs@protonmail.ch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Website:"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," Poland, Poznan 61-853, Wierzbowa 2/22"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Optymalizacja AI Grzegorz Miebs")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"I have 4 years of industry experience as a data scientist and 6 years of academic experience in a multicriteria decision support field.\nThe most relevant project is of course study regarding this topic with the preprint available here: ",(0,l.kt)("a",{parentName:"p",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515"},"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515"),"\nOther related projects:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Multicriteria job planning for bus and tram drivers for the public transport system of Pozna\u0144"),(0,l.kt)("li",{parentName:"ul"},"Selection of a sustainable third-party reverse logistics provider ",(0,l.kt)("a",{parentName:"li",href:"https://doi.org/10.1016/j.omega.2018.05.007"},"https://doi.org/10.1016/j.omega.2018.05.007"))),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/miepsik"},"https://github.com/miepsik"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/grzegorz-miebs/"},"https://www.linkedin.com/in/grzegorz-miebs/"))),(0,l.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"preprint ",(0,l.kt)("a",{parentName:"li",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515"},"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515"))),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 30 days"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1FTE"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 9,000 USD")),(0,l.kt)("h3",{id:"milestone-1-example--basic-functionality"},"Milestone 1 Example \u2014 Basic functionality"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  20 days"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 6,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,l.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,l.kt)("strong",{parentName:"td"},"article"),"/workshop that explains how this algorithm works and how to use the software")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Next pair"),(0,l.kt)("td",{parentName:"tr",align:null},"Develop an algorithm for efficient calculations of the next pair to be compared to maximize the model\u2019s information gain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Ranking calculation"),(0,l.kt)("td",{parentName:"tr",align:null},"Develop an algorithm calculating a score for each validator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"New data"),(0,l.kt)("td",{parentName:"tr",align:null},"Develop a function for the data preprocessing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Internal testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit tests covering the functionality and logic")))),(0,l.kt)("h3",{id:"milestone-2-testing"},"Milestone 2 (Testing)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  10 days"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 3000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,l.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,l.kt)("strong",{parentName:"td"},"article"),"/workshop that explains how this algorithm works and how to use the software")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,l.kt)("td",{parentName:"tr",align:null},"Deploy the code on a test server provided by the Grants Team or by myself.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Test live environment"),(0,l.kt)("td",{parentName:"tr",align:null},"Test the server efficiency by checking an average response time for each endpoint and provide a report")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Polishing"),(0,l.kt)("td",{parentName:"tr",align:null},"Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like the way data are provided, configuration, etc.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"The possible extensions are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"analysis of the obtained results and nominators' preferences"),(0,l.kt)("li",{parentName:"ul"},"capturing drift of preferences and just updating the model instead of repeating the whole pairwise comparison procedure")),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Personal recommendation"))}u.isMDXComponent=!0}}]);