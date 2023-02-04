"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9939],{24715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));a(30828);const r={},o="Integrating ISO-8583",s={unversionedId:"applications/Integrating-ISO8583",id:"applications/Integrating-ISO8583",title:"Integrating ISO-8583",description:"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.",source:"@site/docs/applications/Integrating-ISO8583.md",sourceDirName:"applications",slug:"/applications/Integrating-ISO8583",permalink:"/Grants-Program/applications/Integrating-ISO8583",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 ISO-8583 Implementation Plan Research",id:"milestone-1--iso-8583-implementation-plan-research",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"integrating-iso-8583"},"Integrating ISO-8583"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,n.kt)("inlineCode",{parentName:"p"},">")," (such as this one) can be removed."),(0,n.kt)("p",{parentName:"blockquote"},"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/#pencil-process"},"Grants Program Process")," on how to submit a proposal.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Stardust Labs Inc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0xF3d5F194D9eF961a85a4d5be05EFda7B2B33005d (DAI, Ethereum Mainet)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,n.kt)("em",{parentName:"p"},"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."))),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A brief description of your project.")),(0,n.kt)("p",null,"This proposal is in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/open/ISO_8583.md"},"response to the ISO-8583 RFP, that aims to make it easy and possible for the traditional finance industry to leverage substrate and ink! smart contracts to interact with ISO 8583 in various ways"),". While it seems the original RFP was primarily for a straightforward techincal implementation, the actual implementation of ISO-8583 on a distributed, permissionless architecture has several unsolved challenges. This grant proposal is to research and develop acceptable solutions to those challenges or at the very least provide the Web3.0 Foundation with a comprehensive view of the options and tradeoffs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.")),(0,n.kt)("p",null,"Supporting international standards would smooth the connection between crypto and traditional financial institutions and is a ",(0,n.kt)("a",{parentName:"p",href:"https://www.cryptopolitan.com/iso-20022-compliant-crypto-list/"},"go-to-market strategy for several competing projects"),". While those efforts are focused on the newer ISO-20022, and not ISO-8583, there is significant value in being the first blockchain to support traditional banking infrastructure and dislodge incumbent networks such as SWIFT or Visa/Mastercard."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An indication of why your team is interested in creating this project.")),(0,n.kt)("p",null,"I've built credit card infrastructure before during my role as an analyst at Capital One and believe I can bring some experience from traditional finance to this problem. At the very least I can call out the details and complex logistics that others without might miss."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8583"},"ISO-8583")," is the international standard for card based payments and transactions. It's used everywhere from ATMs to Merchant point of sale terminals. Supporting international standards could help smooth the connection between crypto and traditional financial institutions. ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/iso8583"},"Further simplifying matters is")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rkbalgi/iso8583_rs"},"that several rust crates exist")," ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/i8583/latest/i8583/"},"supporting the packing and unpacking of ISO-8583 data streams.")),(0,n.kt)("p",null,"At first glance, it seems like one could easily just integrate these packages to achieve the goals of the RFP, namely:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(Java) APIs or packages that make it possible for the traditional finance industry to integrate a substrate-based ISO 8583 solution into their existing tech stack.  "),(0,n.kt)("li",{parentName:"ul"},"Proof of concepts, potentially leveraging the unique ",(0,n.kt)("a",{parentName:"li",href:"https://docs.substrate.io/v3/concepts/off-chain-features/"},"Off-Chain Features of Substrate")," that show the advantages of using ISO 8583 together with Substrate.  "),(0,n.kt)("li",{parentName:"ul"},"Efficient on-chain representation of the ISO 8583 syntax")),(0,n.kt)("p",null,"Unfortunately, the logistics of actually implementing ISO-8583 compliant infrastructure on blockchains is unintuitvely complex. At a minimum, 3 major issues exist that must be addressed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Security"),"\nISO-8583 datastreams ",(0,n.kt)("a",{parentName:"p",href:"https://neapay.com/post/iso8583-atm-pos-crypto-api-integration-coinbase-binance_102.html"},"reveal far too much information to ever be publically exposed"),". Here neapay proposes using ISO-8583 to connect to Coinbase to purchase crypto. However you can see that once the datastream is unpacked, the user's financial details are immediately revealed. Unpacking data is a trivial process that has no security, ISO-8583 data is not encrypted. Of note is the exposed primary account number (F02_PAN: 9876 5000 0030 6082). Most people would recognize this number faster as their credit card number. While it is possible, and implemented in practice, to transfer the data securely between two, trusted centralized servers using ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie Hellman key exchange"),", research is needed to construct a way to place ISO-8583 data on-chain securely, if it is even possible. There are also laws about retaining this information for a fixed period of time, for example, ",(0,n.kt)("a",{parentName:"p",href:"https://www.revisor.mn.gov/statutes/cite/325E.64"},"Minnesota, a US state mandates that this information is deleted within 48 hours of reciept")," which is at odds with the enduring, provable structure of a blockchain."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transaction Reversals"),"\nOutside of simple purchases, one of the most common messages communicated over ISO-8583 are ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chargeback"},"chargebacks.")," ",(0,n.kt)("a",{parentName:"p",href:"https://shiftprocessing.com/chargeback-statistics/"},"About 0.6% of all transactions are ultimately recalled, though it varies by industry.")," ISO-8583 was designed to handle this process seamlessly and has a reserved MTI code for all chargebacks and reversals (x4xx). Unfortunately, modern blockchains by design are irreversible. From the original ",(0,n.kt)("a",{parentName:"p",href:"https://bitcoin.org/bitcoin.pdf"},"introduction of Satoshi Nakamoto's white paper"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"While the system (traditional finance) works well enough for most transactions, it still suffers from the inherent weaknesses of the trust based model. Completely non-reversible transactions are not really possible, since financial institutions cannot avoid mediating disputes. The cost of mediation increases transaction costs, limiting the minimum practical transaction size and cutting off the possibility for small casual transactions, and there is a broader cost in the loss of ability to make non-reversible payments for nonreversible services. With the possibility of reversal, the need for trust spreads.")),(0,n.kt)("p",null,"Supporting ISO-8583 functionality would require building a new token standard, or making changes to the operation of the blockchain to allow reversible transactions. A solution highlighted in the original bitcoin white paper is automatic escrow accounts, but research would be needed to identify the best way to implement these accounts or if there are better solutions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Authorizations and Privilages"),"\nThis leads to another major challenge. In traditional banking, the users are not equal. Certain entites such as the issuing bank or network can make decisions unilaterally without recourse. An example of this would be the aforementioned chargeback or transaction reversals which can be performed by the issuing bank or network for any reason. Blockchains operate on an equivalent peer model, and it is an open question as to how to authorize a super user and who should maintain super user priviliages over the entire network.  "),(0,n.kt)("p",null,"For Milestone 1 we aim to deliver a robust implementation proposal with solutions to these challenges. While likely no the intent of the RFP, significant foundational reserach has to be done into the feasibility of integrating ISO-8583 with Substrate (or even blockchains in general). These challanges have significant risks and may prove unfeasible. For example, it is possible that it is ultimately too risky to store ISO-8583 data on-chain or even expose it to nodes. While we do not aim to make such determinations during Milestone 1, we will provide a detailed documentation of the major challenges, options for addressing these challenges, and the major tradeoffs. We will also try to summarize what others have done in this space."),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"Supporting international standards would smooth the connection between crypto and traditional financial institutions and is a ",(0,n.kt)("a",{parentName:"p",href:"https://www.cryptopolitan.com/iso-20022-compliant-crypto-list/"},"go to market strategy for several competing projects"),". While those efforts are focused on the newer ISO-20022, not ISO-8583, there is significant value in being the first blockchain to support traditional banking infrastructure and dislodge incumbent networks such as SWIFT or Visa/Mastercard."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adit Patel")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Adit Patel"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:adit.patel@stardustfunds.com"},"adit.patel@stardustfunds.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://stardust.finance/"},"https://stardust.finance/"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Stardust Labs Inc. is a registered C-corp incoporated in Wyoming")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"Adit is a technical expert on cryptography, distributed ledgers, financial markets, and new product development. He graduated Columbia in 2011 with a BSc in Applied Physics and a minor in Econ. During his time there, he took additional coursework focused on cryptography, statistics, and fundamental computer science. After graduating, he joined Capital One and quickly rectified the failing, newly launched small business brand. These efforts made him well known as the go-to analyst for successful new product development, strategy and launch. He was tapped to design and launch financial products for Hispanic consumers and tapped again to build Capital One\u2019s B2B financial products. During his tenure there, Adit experienced first hand the hard learnings that lead to efficient risk mitigation in financial products and the intricacies of financial engineering. He has a decade of technical experience at the intersection of finance and technology and has built and implemented financial products including credit cards before."),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adit313/"},"https://github.com/adit313/"))),(0,n.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/adit-patel/"},"https://www.linkedin.com/in/adit-patel/"))),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"link to RFP: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/open/ISO_8583.md"},"https://github.com/w3f/Grants-Program/blob/master/rfps/open/ISO_8583.md"))),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("p",null,"Through this grant proposal, we aim to provide a well-detailed analysis and implementation plan for incorporating ISO-8583 with Substrate."),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 Weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1 FTE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 10K")),(0,n.kt)("h3",{id:"milestone-1--iso-8583-implementation-plan-research"},"Milestone 1 \u2014 ISO-8583 Implementation Plan Research"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 Weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 10k USD")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0."),(0,n.kt)("td",{parentName:"tr",align:null},"Rights"),(0,n.kt)("td",{parentName:"tr",align:null},"All developed materials will be publicly accessible and public domain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("strong",{parentName:"td"},"1.")),(0,n.kt)("td",{parentName:"tr",align:null},"Research Goal"),(0,n.kt)("td",{parentName:"tr",align:null},"A well-detailed analysis and implementation plan for incorporating ISO-8583 with Substrate with solutions or options for the outstanding challenges.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("strong",{parentName:"td"},"1a.")),(0,n.kt)("td",{parentName:"tr",align:null},"Specific Coverage"),(0,n.kt)("td",{parentName:"tr",align:null},"We will deep dive into the outstanding challenges related to security, reversibility, and authorization. As part of this, we will cover some industry security standards such as PCIDSS compliance and it's applicability, though this is not legal advice or intended to be legal advice. For each of these three challenges we will attempt to provide either a well developed solution or options with careful detailed tradeoffs for the Web3.0 Foundation team to select from.")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We think it is more important at this stage to have a robust implementation plan before attempting to build. If the plan is feasible and acceptable to the Web3.0 team, we will follow up with another grant for implementation.  ")),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/adit313/Grants-Program/blob/master/applications/stardust.md"},"Previous Grantee")))}u.isMDXComponent=!0}}]);