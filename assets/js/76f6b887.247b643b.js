"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3575],{81881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var i=a(87462),r=(a(67294),a(3905));a(30828);const n={},o="Starks Network",s={unversionedId:"applications/starks_network",id:"applications/starks_network",title:"Starks Network",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/applications/starks_network.md",sourceDirName:"applications",slug:"/applications/starks_network",permalink:"/Grants-Program/applications/starks_network",draft:!1,tags:[],version:"current",frontMatter:{}},l={},h=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Brief Description",id:"brief-description",level:3},{value:"Substrate/Polkadot Integration",id:"substratepolkadot-integration",level:3},{value:"Team Interest",id:"team-interest",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Introduction to the Distaff VM",id:"introduction-to-the-distaff-vm",level:3},{value:"Architecture of the Starks Network",id:"architecture-of-the-starks-network",level:3},{value:"Existing Problem and Our Solution",id:"existing-problem-and-our-solution",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Integration of the Distaff VM as a Substrate Native Runtime Module",id:"milestone-1--integration-of-the-distaff-vm-as-a-substrate-native-runtime-module",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],c={toc:h},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"starks-network"},"Starks Network"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gbctech"},"gbctech")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qcx9jcqlvppyp2welewtmvwqvyl36sgeh09dyqk")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"brief-description"},"Brief Description"),(0,r.kt)("p",null,"Zero-knowledge proof (zkp) is a cryptographic technology which enables you to prove that you know a secret without revealing it. It is a powerful tool in the paradigm of Web 3.0 where people can prove certain attributes about themselves without giving away their private data. It can also be used to prove computational integrity which can result in novel applications such as a private smart contract on a blockchain."),(0,r.kt)("p",null,"However, it requires tremendous expertise to construct a zkp for certain computation. This hinders the adoption of this powerful technique for everyday use. Wouldn't it be great if we can construct a zkp for any general purpose computation without a deep understanding of zkp? Enter the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GuildOfWeavers/distaff"},"Distaff VM"),", a zk-STARK virtual machine written in Rust. For any program executed on Distaff VM, a STARK-based proof of execution is generated. This proof can then be used by anyone to verify that a program was executed correctly without knowing the inputs to the program or even the program itself."),(0,r.kt)("p",null,"The Starks Network is a ",(0,r.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2017/11/09/starks_part_1.html"},"zk-STARK")," based zkp parachain for the Polkadot/Kusama ecosystem. At its core, it uses the Distaff VM for zk-STARK proof generation and verification. Powered by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate")," blockchain framework, the Starks Network can serve other blockchains and enable applications such as private smart contract and private credential verification."),(0,r.kt)("h3",{id:"substratepolkadot-integration"},"Substrate/Polkadot Integration"),(0,r.kt)("p",null,"Substrate is a powerful blockchain framework. It enables us to bootstrap the skeleton of the Starks Network in a short time. The Starks Network blockchain serves several purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It keeps a record of all the proof verifications;"),(0,r.kt)("li",{parentName:"ul"},"It provides a way to setup a smart contract for a computation and to carry out subsequent actions based on the proof verification result;"),(0,r.kt)("li",{parentName:"ul"},"It enables the flow of economic incentives among the users and the verifiers.")),(0,r.kt)("p",null,"As already mentioned, other blockchains in the Polkadot/Kusama network can interact with the Starks Network via cross-chain message passing. Developers on other chains can design smart contract which benefit from zkp and they don't have to be experts of zkp at all."),(0,r.kt)("h3",{id:"team-interest"},"Team Interest"),(0,r.kt)("p",null,"The Glacier Blockchain team is an advocate of the Web3 ideology. It strives to help build an open, transparent and inclusive network which returns the sovereignty of data to their owners. It is a member of the ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/"},"DIF")," and has contributed to the international standardization of decentralized identity and verifiable credentials. The Glacier Blockchain team has also co-founded the ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@KILT_Protocol/web3-identity-lab-395342207d70"},"Web3 Identity Lab")," with the KILT Protocol team to work on scientific research and technical solutions from verifiable credentials to user privacy protection."),(0,r.kt)("p",null,"We have been fascinated by the progress of latest cryptographic primitives such as zero-knowledge proof. We have learned the potential of the Distaff VM project regarding privacy protection and computation integrity through our frequent discussions with the author of the project. We truly believe the combination of a general purpose zk-STARK virtual machine and the Substrate framework will make the Starks Network a valuable player in the Polkadot/Kusama ecosystem."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h3",{id:"introduction-to-the-distaff-vm"},"Introduction to the Distaff VM"),(0,r.kt)("p",null,"A high level ",(0,r.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/a-sketch-for-a-stark-based-vm/7048"},"architecture of the Distaff VM")," is shown as the following."),(0,r.kt)("img",{src:"https://ipfs.io/ipfs/QmU2wmw6nVGXjQhANtMymd6KSnkubmNPNAe2qxzY1aHZVf",alt:"distaff_overview",style:{zoom:"150%"}}),(0,r.kt)("p",null,"The Distaff VM provides a set of assembly language which can be used to construct a general purpose computation into a ",(0,r.kt)("em",{parentName:"p"},"program")," which can be interpreted by the virtual machine. The basic work flow of the VM is:"),(0,r.kt)("p",null,"a. Takes 2 inputs: a program and a set of inputs for the program;"),(0,r.kt)("p",null,"b. Executes the program with the given set of inputs;"),(0,r.kt)("p",null,"c. Outputs hash of the inputs, hash of the outputs generated by the program, and a STARK proof attesting to the correct execution of the program."),(0,r.kt)("p",null,"Then the verifier can take the hash of the program, hash of the inputs, and hash of the outputs, and uses them to verify the STARK proof. As such, the user can prove to the verifier that she owns some secret data which, when used as the input of a program, can yield certain output. She never has to reveal the input data to the verifier; thus her privacy is protected.  "),(0,r.kt)("p",null,"One way to automate this process is to set up a smart contract on the blockchain which can perform the proof verification. As such, a lot of real-world verification work can be moved on-chain and the users never have to give away their secrets for e.g. credential verification."),(0,r.kt)("h3",{id:"architecture-of-the-starks-network"},"Architecture of the Starks Network"),(0,r.kt)("p",null,"The overall system architecture and the basic work flow of STARK proof generation and verification on the Starks Network is shown as following."),(0,r.kt)("img",{src:"https://ipfs.io/ipfs/QmSDsZZngwipBuKkkXqqfjt8NQPXSpv4BvqqScrJ2gejzB",alt:"system_disgram",style:{zoom:"60%"}}),(0,r.kt)("p",null,"a. A verifier will set up an on-chain smart contract with a target Distaff VM program embedded."),(0,r.kt)("p",null,"b. A user will interact with the smart contact, get the program and generate a proof with their secret inputs using the Distaff VM embedded in the user client application (Step 1, 2 and 3)."),(0,r.kt)("p",null,"c. The user sends the hashes and proof data (results) back to the smart contract via a transaction (Step 4)."),(0,r.kt)("p",null,"d. The smart contract will verify the results using the Distaff VM built in the blockchain node binary, make a decision and update its state (Step 5 and 6)."),(0,r.kt)("p",null,"As such, the user has interacted with an on-chain smart contract without revealing their secret data. It should be noted that the Distaff VM will be made as part of the user client application for proof generation. It will also be made as part of the blockchain node binary and accessible to the on-chain smart contracts."),(0,r.kt)("h3",{id:"existing-problem-and-our-solution"},"Existing Problem and Our Solution"),(0,r.kt)("p",null,"It seems straightforward to perform step c in the previous section on a Substrate blockchain. However, it is actually not feasible and here is why. Compared to other zkp techniques such as zk-SNARK or Bulletproofs, one disadvantage of zk-STARK is the ",(0,r.kt)("a",{parentName:"p",href:"https://snarkage.substack.com/p/tradeoff-space-and-other-nizks-starks"},"relatively large proof size"),". The typical size of a Distaff VM proof is around 100KB. It would be unrealistic to store all the proofs on-chain as the blockchain storage is kind of expensive."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"So, is there a way to store the proof data off-chain while we can still make use of them for zkp smart contract verification?")),(0,r.kt)("p",null,"Thanks to the Substrate framework, we have a tool to solve this problem. An off-chain worker (ocw) is a Substrate subsystem which can process off-chain data in an asynchronous way. It can perform non-deterministic tasks such as Web requests or CPU-intensive computations and write the computation results back to the chain as signed transactions. As such, we can have some ",(0,r.kt)("em",{parentName:"p"},"stark data nodes")," in the system which will cache the proof data sent by the user in a local data store or even a decentralized data storage such as IPFS. The ocw will check the data store periodically, process the proof data, get the verification results and update the state of an on-chain smart contract with a transaction. This approach can solve the storage problem of off-chain proof data.  "),(0,r.kt)("p",null,"But there are again issues as a result of this approach. What if a node runner tries to cheat with their proof? What if a malicious node sends back incorrect verification results intentionally? We have designed counter measures regarding these threat models and they will be unfolded as our project progresses. In the scope of this grant application, we will focus on the PoC where an on-chain smart contract interacts with the Distaff VM using proof data stored off-chain."),(0,r.kt)("p",null,"We expect the teams to already have a solid idea about the project's expected final state."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"There are some existing projects which can be related to the Starks Network. In general, they fall into the following categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blockchain projects which provide confidential computing service using a hardware Trustable Execution Environment (TEE). ",(0,r.kt)("a",{parentName:"li",href:"https://phala.network/en/"},"Phala Network")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scs/substraTEE"},"SubstrateTEE")," are good examples of such projects. The main difference is that we use zkp instead of hardware chips to provide similar functionalities. Our approach makes the Starks Network immune to hardware bugs/failures/backdoors in proprietary CPUs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/LayerXcom/zero-chain"},"Zerochain")," is a Substrate based zkp blockchain project. The main difference from the Starks Network is that it uses zk-SNARK instead of zk-STARK VM as its zkp power house. The zk-SNARK is well known for its small proof size. But it requires a trust setup process to get started which limits its usage. In addition, the function of the Zerochain is focused on private transaction, while the Starks Network aims to provide zkp service for general purpose computations."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/starkware/hello-cairo-3cb43b13b209"},"Cairo project")," from ",(0,r.kt)("a",{parentName:"li",href:"https://starkware.co/"},"StarkWare"),' (inventor of the zk-STARK technology) announced a few days ago. As explained in the press release, "Cairo is the first production-grade platform for generating STARK proofs for general computation". The description of its functionalities have a lot of similarities to what our Starks Network have to offer. It is fair to say the Cairo project is a powerful counterpart of the Starks Network--only it is built in the Ethereum ecosystem. The whitepaper, documentation and related tooling are yet to come in the next few months (unsure if it is open sourced). And we will closely watch its development as it is exciting and inspiring to have more projects coming in the field of zk-STARKs application.')),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dr. Xiao Zhang - CEO/Project Lead/Blockchain Researcher"),(0,r.kt)("li",{parentName:"ul"},"Ming Chow - System Architect/Substrate Developer"),(0,r.kt)("li",{parentName:"ul"},"Xinran Chen - Substrate Developer"),(0,r.kt)("li",{parentName:"ul"},"Jinjiao Yin - Full-stack developer"),(0,r.kt)("li",{parentName:"ul"},"Linjun Lu - DevOps")),(0,r.kt)("h3",{id:"team-website"},"Team Website"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.gbctech.cn/"},"http://www.gbctech.cn/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("p",null,"Glacier Blockchain Technology is a company registered in Yantai, Shandong, P. R. China."),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dr. Xiao Zhang")," is a researcher with experience in computer architecture, blockchain and cryptography. He holds a PhD in computer science from the University of Twente of the Netherlands. He is an active advocator of Web3 and also one of the first Polkadot ambassadors in China. His current research interests include decentralized identity, verifiable credentials and zero-knowledge proof technology for privacy protection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ming Chow")," has a bachelor's degree in computer science. He has 10 years of experience in system architect and software development. He has worked in several high-tech companies in Guangzhou and Shenzhen in China and lead the design of several core business software. He is responsible for the Substrate system architecture design for the Starks Network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Xinran Chen")," has worked for many years in Internet companies such as Talkingdata, PingCAP and Qiniu.com. He has started working on blockchain product since 2019. He has contributed codes to Boltdb for Tendermint. He is the Substrate developer for the Starks Network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Jinjiao Yin")," is a senior computer science student of Shandong Technology and Business University. She is the group leader of the Student Blockchain Lab. During her college time, she has won multiple computer science competition awards. She is specialized in full-stack web app design for blockchain project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Linjun Lu")," is a senior software engineering student of Shandong Technology and Business University. She is a senior member of the Student Blockchain Lab. She is particularly interested in application DevOps on Linux platforms."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Starks Network Node: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gbctech/starks-node"},"https://github.com/gbctech/starks-node")),(0,r.kt)("li",{parentName:"ul"},"Glacier Blockchain: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gbctech"},"https://github.com/gbctech")),(0,r.kt)("li",{parentName:"ul"},"Xiao Zhang: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/xz-cn"},"https://github.com/xz-cn")),(0,r.kt)("li",{parentName:"ul"},"Xinran Chan: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Lawliet-Chan"},"https://github.com/Lawliet-Chan")),(0,r.kt)("li",{parentName:"ul"},"Jinjiao Yin: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/inoutcode"},"https://github.com/inoutcode")),(0,r.kt)("li",{parentName:"ul"},"Linjun Lu: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lulinjun1111"},"https://github.com/lulinjun1111"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/xzhangcn/"},"https://www.linkedin.com/in/xzhangcn/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/%E6%98%95%E7%87%83-%E9%99%88-b41b26187/"},"https://www.linkedin.com/in/%E6%98%95%E7%87%83-%E9%99%88-b41b26187/"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 1.83 BTC")),(0,r.kt)("h3",{id:"milestone-1--integration-of-the-distaff-vm-as-a-substrate-native-runtime-module"},"Milestone 1 \u2014 Integration of the Distaff VM as a Substrate Native Runtime Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 1.83 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can run our Substrate node. Once the node is up, it will be possible to interact with the Distaff VM module via API calls to perform e.g. zk-STARK proof verification.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a full test suite (mock and test files) for the VM module describing how the module can be tested. We will also provide a guide on how to perform the tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Substrate module: Distaff VM"),(0,r.kt)("td",{parentName:"tr",align:null},"We will reorganize the Distaff VM project, split its functions into a primitive module and a frame pallet following the conventions of the Substrate framework. In the primitive module, we will separate the proof generation and proof verification function and keep only the proof verifier on chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Substrate chain"),(0,r.kt)("td",{parentName:"tr",align:null},"The Distaff VM will be embedded as a native runtime module in the Substrate node. It can serve the off-chain worker, which will be a Wasm runtime module, via the ",(0,r.kt)("inlineCode",{parentName:"td"},"runtime_interface")," feature of the Substrate framework.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of our chain.")))),(0,r.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,r.kt)("p",null,"We will publish an article on medium upon the completion of this project. Meanwhile, we will give talks and do AMA sessions to advertise the project to the Polkadot community."),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Starks Network plans to become a parachain for both the Polkadot and the Kusama network."),(0,r.kt)("li",{parentName:"ul"},"This application covers milestone 1 in stage 1 of the Starks Network project. In stage 2 of the project, we will focus on the UX/UI design and provide several typical use cases (credential, smart contract) for evaluation. A MVP will be running in a testnet."),(0,r.kt)("li",{parentName:"ul"},"In stage 3, we will experiment the cross-chain communication with other parachains. If things go well, we will provide zkp support to the smart contracts in other parachains (Plasm or Edgeware are our choices right now)."),(0,r.kt)("li",{parentName:"ul"},"After its main functionalities are finalized and tested, the Starks Network will issue its own tokens. And we hope other parachains in the ecosystem can benefit from its zkp service. The network will receive economic incentives in the process to sustain its service model.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"What work has been done so far?"),(0,r.kt)("p",{parentName:"li"},"We have preliminarily integrated the Distaff VM as a native runtime module into the Substrate framework. We have saved the locally generated proof data as binary files and sent them to the Distaff VM module via RPC request. As show in the screenshot below, the VM in Substrate can function correctly and send back verification results indicating a passed/failed verification."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://ipfs.io/ipfs/QmQhUjUSLzpHR7rU4nLQVo2dAvnGLVg1KMWzb5dEueKLqv",alt:"test_result"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Are there are any teams who have already contributed (financially) to the project?"),(0,r.kt)("p",{parentName:"li"},"No.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Have you applied for other grants so far?"),(0,r.kt)("p",{parentName:"li"},"No, we are self-funded so far."))))}u.isMDXComponent=!0}}]);