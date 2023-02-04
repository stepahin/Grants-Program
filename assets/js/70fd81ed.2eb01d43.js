"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6858],{57921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var l=a(87462),i=(a(67294),a(3905));a(30828);const n={},r="Curve AMM",o={unversionedId:"applications/curve_amm",id:"applications/curve_amm",title:"Curve AMM",description:"Team Name:* Equilibrium",source:"@site/docs/applications/curve_amm.md",sourceDirName:"applications",slug:"/applications/curve_amm",permalink:"/Grants-Program/applications/curve_amm",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Initial implementation, pool manipulations, invariant calculation",id:"milestone-1-initial-implementation-pool-manipulations-invariant-calculation",level:3},{value:"Milestone 2: Assets exchange",id:"milestone-2-assets-exchange",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"curve-amm"},"Curve AMM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Equilibrium"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xee25e18E6bEa41792Adf464D399554B628A80067")),(0,i.kt)("h2",{id:"project-overview"},"Project Overview"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Curve AMM substrate module will be a 6-week long project with the final aim to deliver the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Low slippage, high efficiency stablecoin exchange"),(0,i.kt)("li",{parentName:"ul"},"High efficiency exchange tool for other homogeneous assets on Polkadot (e.g. wrapped assets) "),(0,i.kt)("li",{parentName:"ul"},"Low risk fee income for liquidity providers. "),(0,i.kt)("li",{parentName:"ul"},"Liquidity superfluidity with additional rewards from supplying liquidity to lending protocols such as Equilibrium and Acala.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Deployment"),"\nWe will build an open-soure pallet which will may be deployed to any substrate/parachain and support Polka's native balances/assets module which works with multiassets and multilocations.\nTo demonstrate the use-case of Curve AMM we will deploy the module to Equilibrium substrate adapting it slightly to support Equilibrium's balances module. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Polkadot Ecosystem Benefits"),"\nCurve\u2019s unique stableswap invariant utilizes liquidity much more efficiently compared to all existing DEXes for stablecoins at already several hundred USD TVL (total value locked). Since initial liquidity on Polkadot is hardly going to be very large, proposed efficiency is VERY important for the ecosystem to flourish."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why are we creating this project"),"\nWe believe in mutually beneficial cooperation between Polkadot, Curve, and Equilibrium. We want to give community a useful tool for managing liquidity in assets with same primary underlying. "),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1zvvyZ6G9M9vqIEttb6Hk48I-q4gQL981Vs5IkuvLmUU/edit#"},"Curve AMM google doc file")," for details on business logic, Curve's invariant calculations, and technical specification. "),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"There is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/sunrise-dex.md"},"Sunrise DEX")," project which aims to deliver identical functionality. There are several diferences worth highligting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We're not aming to create a separate special-purpose DEX parachain, but rather a light-weight exchange module, which will be pluggable into any substrate/parachain. "),(0,i.kt)("li",{parentName:"ul"},"We will focus solely on Curve's stable swap invariant as we believe it will be of maximum utility to Polkadot's ecosystem, especially when Parachains, XCM, and SPREE come into existence and there will be multiple assets representing same base/underlying asset. "),(0,i.kt)("li",{parentName:"ul"},"We will have only substrate in our dependencies and won't use custom asset modules like ORML tokens, so the module will be universal and usable by substrates who support standard functionality."),(0,i.kt)("li",{parentName:"ul"},"We will deliver a working solution faster than Sunrise DEX is promising.   ")),(0,i.kt)("h2",{id:"team"},"Team"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alex Melikhov: Founder & CEO "),(0,i.kt)("li",{parentName:"ul"},"Peter Sergeev: Sr. Project Manager Tech Team"),(0,i.kt)("li",{parentName:"ul"},"Veniamin Khrapov: Tech Lead"),(0,i.kt)("li",{parentName:"ul"},"Pavel Gavrilushkin: Tech Lead")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Peter Sergeev"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:peter.s@equilibrium.io"},"peter.s@equilibrium.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://equilibrium.io"},"https://equilibrium.io"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Floor 4, Willow House, Cricket Square, KY1-9010 Grand Cayman, Cayman Islands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," AEQUUM LIMITED")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"The team has strong experience building Decentralized Financial Protocols in Ethereum, EOS, and now Polkadot. "),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/equilibrium-eosdt"},"Equilibrium"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alex-melikhov-bb272532/"},"Alex Melikhov")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/peter-sergeev-32520b54/"},"Peter Sergeev")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/pavel-gavrilushkin-3116a979"},"Pavel Gavrilushkin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/%D1%85%D1%80%D0%B0%D0%BF%D0%BE%D0%B2-%D0%B2%D0%B5%D0%BD%D0%B8%D0%B0%D0%BC%D0%B8%D0%BD-4272ba5b/"},"Veniamin Khrapov")," ")),(0,i.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 3 FTE  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000.00 DAI")),(0,i.kt)("h3",{id:"milestone-1-initial-implementation-pool-manipulations-invariant-calculation"},"Milestone 1: Initial implementation, pool manipulations, invariant calculation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how substrates may integrate our pallet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Module design"),(0,i.kt)("td",{parentName:"tr",align:null},"Assets will be handled using a new assets trait. We will implement a pool storage structure for handling different asset pools with different parameters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Customizable Liquidity Pools"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement methods to set up custom asset pools.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Invariant calculation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement a method to iteratively calculate Curve\u2019s invariant D and points on the bonding curve in non-overflowing integer operations.")))),(0,i.kt)("h3",{id:"milestone-2-assets-exchange"},"Milestone 2: Assets exchange"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation We will provide both inline documentation of the code and a basic tutorial that explains how substrates may integrate our pallet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests. Tests will include: creation of stable coin pool, addition and removal of liquidity, swap (exchange), rewards for LPs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Exchange"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement methods to work with asset pools: add liquidity / remove liquidity, and exchange assets.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Rewards"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement a mechanism to reward liquidity providers with LP tokens.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Asset fluidity"),(0,i.kt)("td",{parentName:"tr",align:null},"Assets locked inside Curve liquidity pools may be further used in various lending protocols across the Polkadot ecosystem.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Expand research in AMMs and possibly introduce Invariants based on economic model of rational economic agents who strive to maximize their representative utility function with a choice of varieties under the budget constraint. (e.g. ",(0,i.kt)("a",{parentName:"p",href:"http://www.columbia.edu/~jid2106/td/dixitstiglitzbasics.pdf"},"Dixit-Stiglitz"),")"),(0,i.kt)("h2",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,"The work under this application will be done under the supervision of the Curve team. The stable swap AMM will be delivered and launched under Curve's brand, Equilibrium will be responsible for tehcnical/dev support."))}d.isMDXComponent=!0}}]);