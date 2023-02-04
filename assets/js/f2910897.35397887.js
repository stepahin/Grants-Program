"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5993],{68224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(30828);const r={},o="Web3Go",l={unversionedId:"applications/Web3Go",id:"applications/Web3Go",title:"Web3Go",description:"Team Name:* Web3Go",source:"@site/docs/applications/Web3Go.md",sourceDirName:"applications",slug:"/applications/Web3Go",permalink:"/Grants-Program/applications/Web3Go",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture",id:"architecture",level:4},{value:"Components",id:"components",level:4},{value:"Technologies",id:"technologies",level:4},{value:"PoC",id:"poc",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1  \u2014 Website, customizied indexer,Semi-automatic chart generation and databoards",id:"milestone-1---website-customizied-indexersemi-automatic-chart-generation-and-databoards",level:3},{value:"Milestone 2  \u2014 More databoards, fully-automatic chart generation",id:"milestone-2---more-databoards-fully-automatic-chart-generation",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],h={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"web3go"},"Web3Go"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Web3Go"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xD57e28773c92E6fB9D9Fb164889886cd360074BE(USDT)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Web3Go is an open data platform that focuses on the formatting, visualization, sharing, and collaborative analysis of the on-chain data generated in the Polkadot ecosystem."),(0,i.kt)("p",null,"Due to the explosion of Defi, NFT, and metaverse, there is massive amount of data generated on the blockchain every day, which is very important information for the media companies, investment institutions, and blockchain participants. However, it is difficult for non-professionals to obtain and understand these data. Beyond all doubt, data is valuable. Our project is to build a data platform for the Polkadot ecosystem and provide a series of toolsets so that everyone can easily create visualized results of data analysis. We are able to track smart contracts on-chain, and various parameters like stakings and CDPs of different Defi protocols, NFT circulation, and cross-chain assets on Polkadot ecosystem, and make these data formatted and persisted. With the help of the smart contract on Substrate parachain,   non-professionals can publish their data needs on the platform and use rewards to motivate professionals to help them perform data analysis; for professionals, they can publish their own professional analysis for everyone to use paid or for free. In the second situation,  they can get the reputation from the community.  In the end, we broke the monopoly of some existing companies on data analysis and interpretation, so that everyone can truly enjoy the true value behind blockchain data."),(0,i.kt)("p",null,"We believe that with the development of Polkadot ecosystem, more on-chain data will be generated and the value behind the data is giant. Currently, there is still a gap between professional users and common participants in terms of the technical know-how of data. Using the infrastructure and tools provided by Web3Go, everyone can easily create, publish and share their point of view in the form of nice charts  based on the real data which has been formatted from the blockchain."),(0,i.kt)("p",null,"The interpretation and analysis of data should not be in the hands of certain centralized professionals, but rather all users should have a say and benefit from it. Our vision is to build a Polkadot-based data analytics infrastructure, toolset, and incentive system where everyone can publish and be rewarded for related data tasks. Finally, an open and free data platform will be built to surface the signals of what is happening in the Polkadot system."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("h4",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/Moehringen/Storage/blob/main/Polka-Analytics.png",alt:null})),(0,i.kt)("h4",{id:"components"},"Components"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Indexer:")," an indexer of blockchain is used to extracts the on-chain data and saves the data in the database in formatted manner. Since the Polkadot network is composed of relay chain and parachains, each parachain can define its own Event or call, so each indexer of the parachain must be adapt to its metadata. So there will be multiple instances of the indexer of Polkadot.  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Board:"),"\ndata board is the visualization result of data analysis created by analysts or community member, which can display the analyzed and customized  information on the Polkadot ecosystem such as a token transaction or holders,  an NFT transfer, and history of the transaction, the statistics of a Defi protocol, or some special event like parachain auction, and governance.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Contract on Substrate:"),"\nWe will use smart contracts on the Substrate nodes to demand, publish, share and reward the data activities within Web3Go. There are primarily two kinds of players involved in the smart contract: data demander, who has a need of professional, visualized results of data analysis regarding events that happened on the blockchain. Data demanders will publish the needs through the contract with bounty to incentive whoever fulfill these needs; on the other hand, data analyst, who has professional knowledge and skills can take on data tasks, or they can publish and share any data board they have created to the community in a paid or free manner. This smart contract will incentive more people to contribute to the data activities in the ecosystem since those who create more valuable data boards will gain a higher reputation.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Query Module:"),"  The data query module provides a user interface to the data analyst to generate data boards. Because data stored on the blockchain is in the form of key-value pair, it is very hard to use and analyze the on-chain data directly. With the UI provided by the query module and along with the chart display module, the analyst can take advantage of the formatted data and visualize it in an automatic and customizable manner. The data will also be automatically synchronized with the blockchain, so updates will be reflected on the data board in real-time.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Chart Display Module:")," The chart display module is used to visualize the result of data analysis and is the main component of the data board. The chart display module can provide different charts like bar charts, pie charts, scatter plot, and so on.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Subscription Module:")," For each created data board,  the data demander of this data board can subscribe to the notification signaled from this board.  The notification can be  triggered by a big transaction of a token or an APR vary of a Defi protocol.  This module provides the functional for the subscription.  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Label/Tag Module:"),' this module will give the address different labels basing on its historical activities on the blockchain, e.g. token transfer,  Defi participation, etc.  It is survied that at least more than 50% of the total addresses on Blockchain are inactive. So this module will filter the active address according to its activities such as "Big Whale", "High Activity" and so on.  The labeled addresses are a very good dataset that can be monitored to signal what is happening on the blockchain.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Mining Module:")," data mining module is used to look for regulations and patterns in large batches of data come from blockchain.  data mining is widely used in some traditional industries like Retail, manufacturing, financial and financial insurance, but we believe that this technology will benefit the blockchain industry as well. The module will dig through historical data to discover hidden connections and predict future trends in the specific area of the blockchain, like token price prediction,  Defi earns prediction, etc.  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Community Module:"),"  The community module is a public place where data activities participants can communicate. For example, data demanders can publish their demands, the data analysts can take on the tasks or share their own data boards, and the most welcome data boards will be listed here."))),(0,i.kt)("h4",{id:"technologies"},"Technologies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://subquery.network/"},"Subquery")," is a blockchain indexer for Polkadot, Kusama, and other parachains. We will rebuild and customized this framework to fulfill our requirements."),(0,i.kt)("li",{parentName:"ul"},"Node.js"),(0,i.kt)("li",{parentName:"ul"},"Docker"),(0,i.kt)("li",{parentName:"ul"},"Substrate"),(0,i.kt)("li",{parentName:"ul"},"Rust"),(0,i.kt)("li",{parentName:"ul"},"Machine Learning"),(0,i.kt)("li",{parentName:"ul"},"Python")),(0,i.kt)("h4",{id:"poc"},"PoC"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://web3go.xyz/"},"web application")," with three data boards has been built as a  proof of concept. We have used the architecture mentioned above to index three kinds of tokens: LIT, ATA, and POLS. With nice charts and tables, the transaction, holders are visualized and some addresses have been labeled according to the labeling rules; the second data board lists the crowdloan event on Kusama networks. This data board lists the contribution and participants for each project which attends the crowdloan event; the third data board tracks the CDP(collator debt position) status of Karura lending system and provides the real-time status of each account."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"We have found several successful data analysis projects in the Ethereum ecosystem.  Each project focuses on a specific area: Defi tracking, token tracking, wallet profile tracking.  But currently, there is no data analysis project designed for Polkadot.  Due to the unique structure of the Polkadot network, there will be more interesting data generated in the network, so we believe the whole community needs a data analysis tool as soon as possible."),(0,i.kt)("p",null,"Similar projects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nansen.ai/"},"https://www.nansen.ai/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://duneanalytics.com/"},"https://duneanalytics.com/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://0xtracker.com/"},"https://0xtracker.com/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://debank.com/"},"https://debank.com/"))),(0,i.kt)("p",null,"What makes us different is,as a part of Web 3 community and Polkadot ecosystem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first project focuses on the data analysis for Polkadot world"),(0,i.kt)("li",{parentName:"ul"},"Designed to let everyone can benefit from the value of data in the Polkadot world and make the valuable data public to everyone, not in the hand of one centralized project"),(0,i.kt)("li",{parentName:"ul"},"An incentive mechanism that gets everyone involved and participates in the data activities."),(0,i.kt)("li",{parentName:"ul"},"A comprehensive analysis not only focuses on one area but will include all data like a cross-chain asset, governance,  auction, Defi, staking, and token.")),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hao Ding: VP of Litentry. MSc of University Stuttgart."),(0,i.kt)("li",{parentName:"ul"},"Yifei Wu: Substrate lead of Litentry. PhD of Tokyo University."),(0,i.kt)("li",{parentName:"ul"},"Han Zhao: Substrate core dev of litentry. MSc of University Stuttgart."),(0,i.kt)("li",{parentName:"ul"},"Minqi Wang: Backend and contract developer. Master of University Columbia."),(0,i.kt)("li",{parentName:"ul"},"Yunjian Bian: Software Architect of Litentry. Bachelor of University Suzhou.")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Hao Ding"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:hao.ding@litentry.com"},"hao.ding@litentry.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://web3go.xyz"},"https://web3go.xyz"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," T5-1023, Europe and America Finance City, Yuhang district, Hangzhou, Zhejiang of China"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Hangzhou Liteng Network Technology Co., Ltd.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"All team members of Web3Go are from Litentry. Litentry is a DID (distributed identity) solution provider in the Polkadot ecosystem. Litentry has been granted a grant from the Web3 Foundation."),(0,i.kt)("p",null,"Web3Go team members have strong engineering background: Han Zhao, Yifei Wu and Minqi Wang are responsible for the development of Litentry's parachain (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/litentry/litentry-parachain"},"https://github.com/litentry/litentry-parachain"),"), Hao ding and Yunjian Bian are responsible for the on-chain data indexing And front-end and back-end development. (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/litentry/data-analysis"},"https://github.com/litentry/data-analysis"),")"),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/web3go-xyz"},"https://github.com/web3go-xyz")," Web3Go official repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/web3go-xyz/web3go"},"https://github.com/web3go-xyz/web3go"),"  Backend and UI of web3go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/web3go-xyz/Indexer"},"https://github.com/web3go-xyz/Indexer")," Indexer of Moonriver staking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/h4n0"},"https://github.com/h4n0")," Han Zhao")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/bianyunjian"},"https://github.com/bianyunjian")," Yunjian Bian")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Satoshi-Kusumoto"},"https://github.com/Satoshi-Kusumoto")," Yifei Wu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/wangminqi"},"https://github.com/wangminqi")," Minqi Wang")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Moehringen"},"https://github.com/Moehringen")," Hao Ding"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/zhaohan6/"},"https://www.linkedin.com/in/zhaohan6/")," Han Zhao"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/%E4%BA%91%E5%81%A5-%E5%8D%9E-5a2b9112a/"},"https://www.linkedin.com/in/%E4%BA%91%E5%81%A5-%E5%8D%9E-5a2b9112a/")," Yunjian Bian"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/john-wu-72960586/"},"https://www.linkedin.com/in/john-wu-72960586/")," Yifei Wu"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/minqi-wang-53b5b19b/"},"https://www.linkedin.com/in/minqi-wang-53b5b19b/")," Minqi Wang"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/"},"https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/")," Hao Ding")),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.web3go.xyz"},"WebSite"),": visit this url:   ",(0,i.kt)("a",{parentName:"li",href:"https://www.web3go.xyz"},"https://www.web3go.xyz")," can take a look at the current developement progress of  the website."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web3go.xyz/#/CDPProfiler"},"Data board-Karura CDP"),": This data board tracks and visualizes the real-time CDP information of Karura, and provides the historical analytics and real-time CDP status of each participant."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web3go.xyz/#/ParaChainProfiler"},"Data board-KSM crowdloan"),": This data board tracks and visualizes the real-time Kusama crowdloan on each lease, including the total amount of each project, address, and amount of each contribution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://106.52.138.224:8080/#/WalletProfiler?data=%7B%22type%22%3A%22ERC20%22,%22name%22%3A%22LIT%20Analysis%22,%22description%22%3A%22Sample%20Analysis%20For%20LIT%20To%20View%20The%20Details%20And%20Trends%22,%22created%22%3A%22Litentry%20Offical%20Team%22,%22data%22%3A%7B%22contractAddress%22%3A%220xb59490ab09a0f526cc7305822ac65f2ab12f9723%22%7D%7D"},"Data board-ERC20 Token"),": This data board tracks and visualizes the real-time and historical transactions, amounts,  and addresses of ERC20 tokens including LIT, ATA, and POLS with analysis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/drive/folders/1NIEB0Tbj7tIcf7Q2CRzuMwbkU95ADnH4?usp=sharing"},"UI Mock-ups"),": here saved the UI design and mock-up of Web3Go, it is keep updating."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web3go.xyz/#/CustomQuery?editSupport=true"},"Semi-automatic chart generation"),': This module is to let users can generate visualized charts automatically by simply writing SQL language based on our existing indexed and formatted data. Currently the supported chart is bar chart, line chart, and pie chart. The word "semi-automatic" means that the user has to write SQL to generate the chart.')),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 40,000 USD")),(0,i.kt)("h3",{id:"milestone-1---website-customizied-indexersemi-automatic-chart-generation-and-databoards"},"Milestone 1  \u2014 Website, customizied indexer,Semi-automatic chart generation and databoards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 25,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can use the existing data board, and use the UI to create/publish their own customized data board")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article"),"/workshop that explains the concept and vision of Web3Go")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.a"),(0,i.kt)("td",{parentName:"tr",align:null},"Indexer"),(0,i.kt)("td",{parentName:"tr",align:null},"We will develop our customized indexer on the top of Subquery to make it more compatible to our scenario in below two areas: 1. Handle data/event and extract the result to external storage: currently the indexed data is saved in the built-in Postgres database due to the design of the framework of Subquery.  And we have to retrieve the data from Postgres to our database again, it is very inefficient.  We are going to build two new modules: the post-process module and the logic handling module, which can directly save the data to our database directly according to our logic module. in this way,  the data and logic part can be decoupled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.b"),(0,i.kt)("td",{parentName:"tr",align:null},"Indexer"),(0,i.kt)("td",{parentName:"tr",align:null},"2. Enable HTTP/HTTPS module to retrieve external data when fetching block: currently, the framework does not support retrieving data externally during fetching the block.  But this case happens from time to time: retrieving the NFT metadata from IPFS can be one example.  We will implement this module on top of the Subqeruy existing framework.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"UI Module:general WebApp"),(0,i.kt)("td",{parentName:"tr",align:null},"We will continue on the development of the web application to implement: user sign-in/sign-up, categorization of data board,  social interactions functionality including like and share,  subscription of a specific event comes from a specific data board,  UI redesign and refinement, documentation and tutorial.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"3 more Data Boards:"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create 3 more data boards of other projects in Polkadot ecosystem that have already won the bid in the Kusama auction(or Polkadot auction if it happens), so we will have more valuable data boards on our platform and user collect their board basing on our data and tools. Three projects are planned to index: ",(0,i.kt)("a",{parentName:"td",href:"https://www.rmrk.app/"},"RMRK"),"(NFT circulation), ",(0,i.kt)("a",{parentName:"td",href:"https://moonbeam.network/networks/moonriver/"},"Moonriver"),"(stake tracking) and ",(0,i.kt)("a",{parentName:"td",href:"https://parallel.fi/index.html"},"Parallel"),"(Defi tracking).  (The projects might be changed but the number of data boards is fixed)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"UI Module: semi-automatic chart generation"),(0,i.kt)("td",{parentName:"tr",align:null},"This part is the core value of Web3Go, which can help users generate charts based on existing data. We will optimize the UI and make the chart more charming and easy to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Support more Kusama Token:"),(0,i.kt)("td",{parentName:"tr",align:null},"We will support the token analysis for KSM, MOVR, KAR, kUSD, Heiko instead of ERC20 token.")))),(0,i.kt)("h3",{id:"milestone-2---more-databoards-fully-automatic-chart-generation"},"Milestone 2  \u2014 More databoards, fully-automatic chart generation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Estimated Duration:")," 8 months")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"FTE:"),"  2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Costs:")," 9,000 USD"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can use the existing data board, and use the UI to create/publish their own customized data board")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article"),"/workshop that explains the concept and vision of Web3Go")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"UI Module:support more charts in semi-automatic chart generation"),(0,i.kt)("td",{parentName:"tr",align:null},"we will continue optimizing the automatic generation of charts, to make it support more kinds of charts like scatter charts, area charts, and tables.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"UI Module:fully-automatic chart generation"),(0,i.kt)("td",{parentName:"tr",align:null},'We will enhance the user interaction of generating charts, provide the "drag and create" module for the user to generate charts. In this case, the user can generate charts with the same complexity as writing SQL can do. This functionality will provide a more easy way for the user to generate complicated charts who does not know program with SQL.')))))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'As our vision is to let "everyone enjoy the value behind the blockchain data", we will design the token economics to let more people involved in the whole data board activities. The rough idea is to design three kinds of roles: data demander, data analyst, and data validator, and introduce the token incentive to incentive the community to create more customized and interesting data boards, and this will be done through the parachain system. We have already started doing the research on the token economics design, and after this grant is finished, parachain development will be started.'),(0,i.kt)("li",{parentName:"ul"},"As our team is a sub-team of Litentry, so we have a strong development team , operations team, a 60k+ community, and have a good relationship with most of the projects in the Polkadot ecosystem.  All of the above has provided us a strong foundation of success. we want to be the best data analysis project in the Polkadot ecosystem, and even collect more data across other public chains in the future.")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"  "),(0,i.kt)("p",null,"Web3 Foundation Website and  personal recommendation."))}p.isMDXComponent=!0}}]);