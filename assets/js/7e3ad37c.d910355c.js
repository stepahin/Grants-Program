"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[2023],{27202:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));a(30828);const i={},r="CosmWasm VM - Core product",l={unversionedId:"applications/CosmWasmVM-CoreProduct",id:"applications/CosmWasmVM-CoreProduct",title:"CosmWasm VM - Core product",description:"- Team Name: Composable Finance LTD",source:"@site/docs/applications/CosmWasmVM-CoreProduct.md",sourceDirName:"applications",slug:"/applications/CosmWasmVM-CoreProduct",permalink:"/Grants-Program/applications/CosmWasmVM-CoreProduct",draft:!1,tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Pallet CosmWasm VM",id:"milestone-1--pallet-cosmwasm-vm",level:3},{value:"Milestone 2 \u2014 PolkadotJS Integration",id:"milestone-2--polkadotjs-integration",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:m},u="wrapper";function c(t){let{components:e,...a}=t;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmwasm-vm---core-product"},"CosmWasm VM - Core product"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team Name:")," Composable Finance LTD"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," (USDC) 0x7C0776FBfadcB5EeEA5eF1DC5b50d603c9a40621"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,o.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,o.kt)("p",null,"Composable Finance focuses on trustless, cross-chain communications between Polkadot and other ecosystems.\nIn this case, a CosmWasm VM is a supplementary component to onboarding a new developer community and a widely adopted smart contract framework."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The first CosmWasm VM implementation in Substrate for the Polkadot and Kusama ecosystems."),(0,o.kt)("p",null,"CosmWasm, short for Cosmos Webassembly, is a smart contract framework designed for use in the Cosmos ecosystem.\nOriginally, the CosmWasm specification was built as a Cosmos SDK module and currently provides a plug-and-play functionality for Cosmos chains.\nCosmWasm was written in half Rust and half Golang (Go), with low-level calls in Rust and high-level dispatching logic, handled in Go.\nThe actor model is implemented in Go which then calls the low-level Rust library to execute contracts effectively."),(0,o.kt)("p",null,"CosmWasm offers a high degree of customization as part of its design philosophy.\nA key feature of CosmWasm is that it allows for multi-chain contracts; one dApp, one contract, but multiple chains.\nAs a result, CosmWasm allows users to benefit from the utility across chains instead of being forced to choose between them.\nImplementing the CosmWasm framework in Substrate will allow developers and parachains in the Polkadot and Kusama ecosystems\nto seamlessly interact with a well-tested and heavily adopted smart contract framework."),(0,o.kt)("p",null,"In terms of security, CosmWasm is designed to avoid the attack vectors found in Ethereum and Solidity, such as Reentrancy, and Default Visibilities.\nIts security is further reinforced by its well-developed tooling and testing mechanisms prioritized early in its conception.\nDue to these benefits, many projects have adopted CosmWasm as their smart contract framework,\nincluding notable examples like Juno, OKX, and Osmosis."),(0,o.kt)("p",null,"Overall, the CosmWasm VM proved to be the best VM for our needs as we found it to be the most portable and robust solution.\nCosmWasm was built with interoperability in mind from the very beginning,\nthe goal being to build a smart contracting framework capable of operating across multiple blockchains.\nBy utilizing the XCMP as a transport layer,\nCosmWasm contracts would be able to communicate with each other on different parachains without the need for any trusted parties.\nThe entire Dotsama ecosystem has the potential to benefit from CosmWasm.\nThis means that any team building on Dotsama will have unparalleled reach,\nand the potential to create applications that have never been seen before."),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("p",null,"In its current state, Confio\u2019s implementation of the CosmWasm VM excludes library components and consists of a single implementation targeting the Cosmos SDK.\nOur team is building a library implementation of CosmWasm that can be utilized by different host implementations to minimize the work to port Cosmwasm to different ecosystems.\nCurrently, the only implementation of CosmWasm consists of half of it written in Rust and half Golang.\nTherefore, the current version was not compatible with Substrate and has never been leveraged outside of Cosmos.\nThis meant we had to build a VM from scratch."),(0,o.kt)("p",null,"Furthermore, we have two host implementations which allows developers to integrate CosmWasm in their ecosystems in a straightforward manner.\nThis ensures that our CosmWasm VM is highly portable with consistent execution semantics regardless of its host.\nAs a result, this would enable developers to integrate our CosmWasm VM as a pallet, within a frontend app, or inside a CLI tool."),(0,o.kt)("p",null,"The official CosmWasm VM uses Wasmd for the runtime.\nIt ensures that developers follow the same execution semantics,\nthus, all CosmWasm contracts will function the same irrespective of the Cosmos blockchain they are executed on.\nWe utilized the Wasmd reference material to rewrite the Go portions of CosmWasm in Rust for implementation on our parachains."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?id=1zcIT6UHveRrUfZunNx6otKuMCerEdX2J",alt:"high_level_overview"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Documentation of core components, protocols, architecture, etc. to be deployed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://book.cosmwasm.com/"},"https://book.cosmwasm.com/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmwasm.com/docs/1.0/"},"https://docs.cosmwasm.com/docs/1.0/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cosmwasm.com/resources"},"https://cosmwasm.com/resources"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PoC/MVP or other relevant prior work or research on the topic:"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/cosmwasm/cosmwasm-for-ctos-f1ffa19cccb8"},"https://medium.com/cosmwasm/cosmwasm-for-ctos-f1ffa19cccb8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/cosmwasm/cosmwasm-for-ctos-i-the-architecture-59a3e52d9b9c"},"https://medium.com/cosmwasm/cosmwasm-for-ctos-i-the-architecture-59a3e52d9b9c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/cosmwasm"},"https://medium.com/cosmwasm"))),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("p",null,"CosmWasm would be able to facilitate the orchestration of cross-chain smart contracts between different parachains."),(0,o.kt)("p",null,"Our target audience consists of parachain builders,\nand dApps in the Dotsama ecosystem that want to leverage a WASM based smart contracting framework.\nWe hope this VM enables and incentivizes developers to build in the Polkadot ecosystem as CosmWasm has been adopted by a large developer community."),(0,o.kt)("p",null,"We are the only team in the Substrate/Polkadot/Kusama ecosystem implementing CosmWasm for Substrate."),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("h3",{id:"team-members"},"Team members"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name of team leader: Hussein Ait-Lahcen"),(0,o.kt)("li",{parentName:"ul"},"Names of team members: Cor Pruijs, Abduallah Eryuzlu")),(0,o.kt)("h3",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," Ahmad Wehbi"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:ahmad@composable.finance"},"ahmad@composable.finance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Website:")," ",(0,o.kt)("a",{parentName:"li",href:"https://www.composable.finance/"},"https://www.composable.finance/"))),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Registered Address:")," "),(0,o.kt)("p",{parentName:"li"},"FortGate Offshore Investment and Legal Services LTD, "),(0,o.kt)("p",{parentName:"li"},"1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet,"),(0,o.kt)("p",{parentName:"li"},"P.O. Box 838, Castries, Saint Lucia")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Registered Legal Entity:"),"  Composable Finance LTD"))),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hussein Ait Lahcen: Principal Blockchain engineer at Composable Finance, previously Core Rust developer at Parity"),(0,o.kt)("li",{parentName:"ul"},"Abdullah Eryuzlu: Substrate Rust engineer at Composable Finance, previously Substrate engineer at Webb.tools"),(0,o.kt)("li",{parentName:"ul"},"Cor Pruijs: Software engineer at Composable Finance, previously Software engineer at ConsenSys")),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ComposableFi/cosmwasm-vm"},"https://github.com/ComposableFi/cosmwasm-vm"))),(0,o.kt)("p",null,"GitHub accounts of all team members:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hussein-aitlahcen"},"https://github.com/hussein-aitlahcen")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aeryz"},"https://github.com/aeryz")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cor"},"https://github.com/cor"))),(0,o.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tr.linkedin.com/in/abdullah-eryuzlu-675611182"},"https://tr.linkedin.com/in/abdullah-eryuzlu-675611182")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://fr.linkedin.com/in/hussein-a-967810a7"},"https://fr.linkedin.com/in/hussein-a-967810a7")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nl.linkedin.com/in/corpruijs"},"https://nl.linkedin.com/in/corpruijs"))),(0,o.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/supercolony/a-look-into-virtual-machines-and-smart-contract-runtimes-313cd7d494e3"},"https://medium.com/supercolony/a-look-into-virtual-machines-and-smart-contract-runtimes-313cd7d494e3")),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 11 Weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1,5 FTE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 29,700 USD")),(0,o.kt)("h3",{id:"milestone-1--pallet-cosmwasm-vm"},"Milestone 1 \u2014 Pallet CosmWasm VM"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated duration:")," 8 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  1,5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," $21,600")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0a.")),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"GPLv3 / MIT /")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0b.")),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can test and execute transactions using cosmwasm vm pallet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0c.")),(0,o.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0d.")),(0,o.kt)("td",{parentName:"tr",align:null},"Docker"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test the pallet functionality.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"1a.")),(0,o.kt)("td",{parentName:"tr",align:null},"Development"),(0,o.kt)("td",{parentName:"tr",align:null},"We will deliver the core pallet for the CosmWasm VM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"1b.")),(0,o.kt)("td",{parentName:"tr",align:null},"Development"),(0,o.kt)("td",{parentName:"tr",align:null},"This milestone includes the pallet supporting the following features: XCM integration, native asset support, allow calling extrinsics, verification through Fuzzing & Kani and Benchmarking.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"1c.")),(0,o.kt)("td",{parentName:"tr",align:null},"Testing"),(0,o.kt)("td",{parentName:"tr",align:null},"A local network setup running a substrate chain with the pallet and a contract showing the functionality described in the milestones, so that it can be inspected and called through Polkadotjs.org.")))),(0,o.kt)("h3",{id:"milestone-2--polkadotjs-integration"},"Milestone 2 \u2014 PolkadotJS Integration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE: 1.5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$8,100"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0a.")),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"GPLv3 / MIT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0b.")),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how contracts interact with PolkadotJS.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0c.")),(0,o.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by integration tests to ensure functionality and robustness.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0d.")),(0,o.kt)("td",{parentName:"tr",align:null},"Docker"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0e.")),(0,o.kt)("td",{parentName:"tr",align:null},"Article"),(0,o.kt)("td",{parentName:"tr",align:null},"We intend to publish an article which outlines what was achieved as part of the grant, how it benefits the Substrate ecosystem and how other parachains can utilize the pallet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"1.")),(0,o.kt)("td",{parentName:"tr",align:null},"Development"),(0,o.kt)("td",{parentName:"tr",align:null},"This milestone would include PolkadotJS support querying contracts\u2019 state and interacting with CosmWam contracts")))),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"Composable is continuing to contribute upstream, further pushing the boundaries of cryptographic research and opening up endless possibilities for the Dotama ecosystem as we work in line with our cross-chain/cross-layer interoperability goals."),(0,o.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," "),(0,o.kt)("p",null,"Web3 Foundation Medium and Twitter"))}c.isMDXComponent=!0}}]);