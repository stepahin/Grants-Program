"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5506],{98881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));a(30828);const r={},i="OpenSquare off-chain voting for Polkadot ecosystem",l={unversionedId:"applications/OpenSquare-offchain-voting",id:"applications/OpenSquare-offchain-voting",title:"OpenSquare off-chain voting for Polkadot ecosystem",description:"Team Name:* OpenSquare",source:"@site/docs/applications/OpenSquare-offchain-voting.md",sourceDirName:"applications",slug:"/applications/OpenSquare-offchain-voting",permalink:"/Grants-Program/applications/OpenSquare-offchain-voting",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Future Plans",id:"future-plans",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opensquare-off-chain-voting-for-polkadot-ecosystem"},"OpenSquare off-chain voting for Polkadot ecosystem"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team Name:")," OpenSquare"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," 0x4905083abdD13bd95345A871701Fd0b08AbD46d1 (USDT)")),(0,o.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In short, you can see this proposed platform as ",(0,o.kt)("a",{parentName:"p",href:"https://snapshot.org"},"snapshot")," in the polkadot ecosystem."),(0,o.kt)("p",null,"Though Polkadot/Kusama and most other Substrate based chains have on-chain governance and runtime can be easily upgraded with democracy. We think this platform still make sense with following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compared to the formal on-chain votes, this platform provides not so formal off-chain signed polls which may help token holders and community members engage ",(0,o.kt)("strong",{parentName:"li"},"more")," in the ecosystem building."),(0,o.kt)("li",{parentName:"ul"},"Compared to Polkassembly polls on post:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"users have to sign their votes and the signed data will be stored on IPFS"),(0,o.kt)("li",{parentName:"ul"},"users don\u2019t have to do any registration."),(0,o.kt)("li",{parentName:"ul"},"Different strategies can also be provided to calculate the final result, rather than simply count the vote numbers."))),(0,o.kt)("li",{parentName:"ul"},"Not all on-chain systems with assets on Substrate based chains can upgrade with democracy, like assets issued on Statemine, ERC-20 assets which may be issued on Moonriver, Karura, Shiden, etc.")),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("p",null,"Off-chain votes will be an important part of OpenSquare collaboration platform. Other planned collaboration forms include bounties, payment QA, short term employment, etc. Key components in this proposal include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefined spaces where users can create proposals. It will definitely include Kusama and Polkadot, current para-chains with very high possibility."),(0,o.kt)("li",{parentName:"ul"},"Proposal list in one space where users can view the closed or ongoing proposals."),(0,o.kt)("li",{parentName:"ul"},"Proposal detail page where users can view the detail and the signed votes."),(0,o.kt)("li",{parentName:"ul"},"A proposal discussion arena where users submit the signed messages and here we expect chaos."),(0,o.kt)("li",{parentName:"ul"},"An authoring page where users can create proposals, and set the corresponding snapshot height, start and end date(height)."),(0,o.kt)("li",{parentName:"ul"},"Archive nodes interaction with which we read users\u2019 balances on the corresponding snapshot block height."),(0,o.kt)("li",{parentName:"ul"},"A backed server to interact with the node(Polkadot, Kusama, etc), store the organized data to DB, handle IPFS storage, provide APIs to get data.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2264908/127607269-5d54f0b0-d8b8-48f1-9c7a-fc8c205bc645.png",alt:"os_grant_voting"})),(0,o.kt)("p",null,"Some implementation notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have to call polkadot.js extension to sign the voting/poll, and some discussion messages."),(0,o.kt)("li",{parentName:"ul"},"About voting power, since Polkadot/Kusama have proxy accounts, so we have to support proxy account vote on behalf of the original one."),(0,o.kt)("li",{parentName:"ul"},"In this proposal, we will implement ",(0,o.kt)("inlineCode",{parentName:"li"},"balance of account")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"quadratic balance of account")," strategies for Polkadot and Kusama. It means if Alice's balance is 100 at one chain height, her voting power will be 100 and 10 by these 2 strategies.  "),(0,o.kt)("li",{parentName:"ul"},"We have a partnership with ",(0,o.kt)("a",{parentName:"li",href:"https://crust.network/"},"Crust"),", and we may store data to IPFS through ",(0,o.kt)("a",{parentName:"li",href:"https://decoo.io/"},"decoo")," that crust granted.")),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Providing off-chain voting/polls to help token holders/community members engage more in ecosystem building.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flexible strategies help produce different voting/poll results which bring us different opinions from the on-chain tallying methods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://snapshot.org"},"snapshot")," is popular for Ethereum stack projects, mainly for governance, and currently we didn't see similar projects in Polkadot ecosystem.")),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("h3",{id:"team-members"},"Team members"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Yongfeng Li(@wliyongfeng), Full stack developer")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chaojun Huang(@hyifeng), Full stack developer"),(0,o.kt)("li",{parentName:"ul"},"Wentao Chen(@qiyisi), Full stack developer"),(0,o.kt)("li",{parentName:"ul"},"Yizhou Xin(@YoshiyukiSakura), Full stack developer"),(0,o.kt)("li",{parentName:"ul"},"Alcazar(@Popoulosss), Designer"),(0,o.kt)("li",{parentName:"ul"},"Yaping Wu, BD and execution member")),(0,o.kt)("p",null,"You can see our team with this ",(0,o.kt)("a",{parentName:"p",href:"https://www.opensquare.network/team/"},"link"),"."),(0,o.kt)("h3",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," Yongfeng Li"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:wliyongfeng@gmail.com"},"wliyongfeng@gmail.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Website:")," ",(0,o.kt)("a",{parentName:"li",href:"https://www.opensquare.network"},"https://www.opensquare.network"))),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Address:")," 3 FRASER STREET #05-25, DUO TOWER, SINGAPORE 189352"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," OPENSQUARE FOUNDATION LTD.")),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("p",null,"We have more than 3 years experience with Substrate/Polkadot related tech stack. Our recently developing products include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.dotreasury.com/"},"doTreasury"),". We can now see it as a treasury business explorer but it aims to improve the treasury mechanism with retrospection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.statescan.io"},"Statescan"),", a fungible asset explorer for Statemint implementation chains."),(0,o.kt)("li",{parentName:"ul"},"OpenSquare bounties business built on substrate. We got a grant for this, and please check details ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/open_square_network.md"},"here"),".")),(0,o.kt)("p",null,"We are honored that either dotreasury or statescan get support from kusama or polkadot treasury, and our work about bounties is granted by w3f previously. We are confident to deliver a high quality and usable off-chain voting site."),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/opensquare-network/"},"https://github.com/opensquare-network/")),(0,o.kt)("p",null,"Team members github accounts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wliyongfeng"},"https://github.com/wliyongfeng")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hyifeng"},"https://github.com/hyifeng")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/qiyisi"},"https://github.com/qiyisi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/YoshiyukiSakura"},"https://github.com/YoshiyukiSakura")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Popoulosss"},"https://github.com/Popoulosss"))),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("p",null,"Only 1 milestone in this proposal, while the main goal is to check the feasibility of off-chain voting in the polkadot ecosystem.\nWe will put more features like more plugins and strategies in future proposals, but after this proposal we will launch it and make it available to the community."),(0,o.kt)("p",null,"Milestone 1 \u2014 Implement Basic off-chain voting/polls logic for Polkadot & Kusama"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Estimated duration: 2 weeks"),(0,o.kt)("li",{parentName:"ul"},"FTE: 3"),(0,o.kt)("li",{parentName:"ul"},"Costs: 8,000 USD")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,o.kt)("td",{parentName:"tr",align:null},"Code"),(0,o.kt)("td",{parentName:"tr",align:null},"Code will be open source, organized in one monorepo by ",(0,o.kt)("a",{parentName:"td",href:"https://classic.yarnpkg.com/en/docs/workspaces/"},"yarn workspaces"),", hosted on ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/opensquare-network/"},"OpenSquare github account"),". It will be implemented in JavaScript, ",(0,o.kt)("a",{parentName:"td",href:"https://reactjs.org/"},"React")," for fronted, ",(0,o.kt)("a",{parentName:"td",href:"https://koajs.com/"},"koa")," for backend. Either fronted and backed will depend on polkadot.js, while fronted will also depend on ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension/tree/master/packages/extension-dapp"},"extension-dapp")," to interact with polkadot{.js} extension.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide a documentation site to explain necessary concepts, how this site work, and some user workflows.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,o.kt)("td",{parentName:"tr",align:null},"Test cases"),(0,o.kt)("td",{parentName:"tr",align:null},"Core functions will be covered by unit tests to ensure functionality and robustness. They will could be verified in simple npm scripts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"User story 1"),(0,o.kt)("td",{parentName:"tr",align:null},"Alice opens OpenSquare.io(domain not finally decided) and she can see spaces at least include polkadot and kusama. She can see a closed and ongoing proposal list after clicking a space.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"User story 2"),(0,o.kt)("td",{parentName:"tr",align:null},"Alice will see the proposal description, votes records and the final result or analysis/distribution on a closed proposal page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"User story 3"),(0,o.kt)("td",{parentName:"tr",align:null},"Alice votes yes on an ongoing proposal with polkadot{.js} extension, she can see her vote and re-vote to override the previous one. The reason that she changed her vote is that she checked the discussion and found some related news.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"4."),(0,o.kt)("td",{parentName:"tr",align:null},"User story 4"),(0,o.kt)("td",{parentName:"tr",align:null},"Alice created a proposal with the title \u201cShould there be a specified UI for the society features?\u201d and some description, and there are 2 choices: yes and no. She chose the voter balance as the final result strategy, while she can also choose sqrt balance as the strategy. With a very high sumed balance vote yes to Alice\u2019s proposal, she now is very confident to seek more support to go on with following actions.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"5."),(0,o.kt)("td",{parentName:"tr",align:null},"User story 5"),(0,o.kt)("td",{parentName:"tr",align:null},"Bob wanted to create a proposal at kusama height 1000, but failed, because his account has 0 balance. Anybody can create a proposal, but the minimum requirement is having at least 10 KSM at the target height.")))),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add more spaces, and in the future users may create their own space and customize it."),(0,o.kt)("li",{parentName:"ul"},"Support plugins and more strategies so users can customize the process and voting result."),(0,o.kt)("li",{parentName:"ul"},"Support voting by assets issued on statemine or erc-20 tokens.")))}h.isMDXComponent=!0}}]);