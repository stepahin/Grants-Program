"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8441],{66233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));a(30828);const r={},l="Green Lemon",i={unversionedId:"applications/GreenLemon",id:"applications/GreenLemon",title:"Green Lemon",description:"- Team Name: Green Lemon",source:"@site/docs/applications/GreenLemon.md",sourceDirName:"applications",slug:"/applications/GreenLemon",permalink:"/Grants-Program/applications/GreenLemon",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement anonymous NFT based on ERC721",id:"milestone-1--implement-anonymous-nft-based-on-erc721",level:3},{value:"Milestone 2 \u2014 Implement anonymous transaction",id:"milestone-2--implement-anonymous-transaction",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"green-lemon"},"Green Lemon"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team Name:")," Green Lemon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," 0xf4f463B9A0ADa68536423121e7Bf9E559ce54fAf(Ethereum ERC20 USDT)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,o.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/997"},"Proposal: Dual-Key Stealth Address Protocol")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/504"},"Milestone Delivery: Dual-Key Stealth Address Protocol")),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Many of today\u2019s blockchains, including Bitcoin and Ethereum, are open and public ledgers in the sense that there are no restrictions on participation and all transaction details are visible on the blockchain. In a public ledger, the transaction entities are only identified by their blockchain addresses, which are derived from the corresponding public keys. Public ledgers are generally considered to be \u201cpseudo-anonymous\u201d, which means that an address is linked to one person, but that person is unknown to the public. However, by analyzing the transaction graph and combining it with other information, it is possible to reveal the true real-world identity behind a blockchain address, as shown by recent research. "),(0,o.kt)("p",null,"The Green Lemon protocol is an anonymous NFT solution for the Polkadot ecosystem based on zero-knowledge proof and dual-key stealth address protocol: users deposit DOT to an anonymous NFT contract and then anonymously send mint, transfer, and other ERC721 functions to that contract via relayer."),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("p",null,"The protocol implements the function of initiating anonymous transactions through zero-knowledge proofs and the function of hiding NFT owners through DKSAP."),(0,o.kt)("p",null,"Currently, a large number of anonymous transaction projects use zero-knowledge proofs, such as Monero and ZCash based on the UXTO model, and Zether and Tornado based on the account model."),(0,o.kt)("p",null,"Zether comes to our attention with its unique implementation, which uses the \u03a3-Bullets protocol, does not require the generation of public parameters for the initiation ceremony, and uses the Elgamal encryption algorithm for homomorphic encryption and decryption of account balance, which are excellent features. But the Gas for anonymous transfers involving 64 accounts verified amounted to 36,152,558 on Ethereum virtual machine."),(0,o.kt)("p",null,"Meanwhile, Tornado, based on zk-SNARK, performed well in terms of Gas, with a Gas consumption of 1,088,354 for deposits and 301,233 for withdrawals. After comparison, we decided to develop a zero-knowledge proof module based on zk-SNARK."),(0,o.kt)("p",null,'DKSAP is a new privacy transaction protocol invented by rynomster/sdcoin in 2014. Since its announcement, it has landed in numerous blockchain projects (Monero, Samourai Wallet, TokenPay, etc.). It is characterized by the fact that the account needs to generate two sets of public and private key pairs, "scan key pair", and "spend key pair", the recipient of each transaction is encrypted and cannot be associated with a particular blockchain account.'),(0,o.kt)("p",null,"The protocol contains the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Deposit: The user generates a random note and deposits a coin to the NFT anonymous contract, so that can pay the relayer fees for anonymous transactions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Withdrawal: The user will get back the DOT previously deposited, and nullifier the corresponding note.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Registration: The user registers the Scan public key and Spend public key to the NFT contract, and if the relayer sends the transaction to the chain, the user needs to pay the fee for the relayer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mint: The user generates the encrypted public key address ePub1(encrypted pub key) based on his scan pub and anonymously mint NFT through the relayer, the owner of this NFT is ePub1, and the user needs to pay the gas fee to the relayer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Transfer: The user generates the encrypted public key address ePub2 based on the scan pub of the recipient and uses the private key signature corresponding to ePub1 to anonymously transfer the NFT, and the owner of the NFT is ePub2, and the user needs to pay a fee to the relayer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Burn: The user pays the fee to relayer to burn NFT.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Other functions supported by ERC721, including Approval, ApprovalForAll, clear_approval, and set_approval_for_all."))),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("p",null,"NFT sales reached $17.7 billion in 2021, up from $82.5 million in 2020 \u2014 a jump of more than 200 times. Total NFT profits when reselling or buying also skyrocketed from $12 million in 2020 to $5.4 billion in 2021."),(0,o.kt)("p",null,"Sotheby's - a renowned auction house with a history of nearly 300 years - generated $7.3 billion in sales in 2021, of which 10% was in private transactions. "),(0,o.kt)("p",null,"This gives us confidence that anonymous trading, the act of buying and selling without revealing the identity of the trader, is just as strongly demanded in the NFT ecosystem. "),(0,o.kt)("p",null,"As the first anonymous NFT application of web3 Ecology, we believe Green Lemon will have a positive impact on Polkadot. Users of NFT who value their privacy greatly will find it attractive."),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("h3",{id:"team-members"},"Team members"),(0,o.kt)("p",null,"Yahuang Wu"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wuyahuang"},"Github address")),(0,o.kt)("li",{parentName:"ul"},"Educated in Xiamen University, MEM"),(0,o.kt)("li",{parentName:"ul"},"7 years of internet R&D experience, participated in the development of several apps with millions of Daily Active Users (Qunar, Snowball, Meiyou)"),(0,o.kt)("li",{parentName:"ul"},"Head of the technical team of EOS genesis block producer"),(0,o.kt)("li",{parentName:"ul"},"Author of 40 EOS technical articles ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/meet-one/documentation/blob/master/meetone-lab-docs.md"},"list of technical articles")),(0,o.kt)("li",{parentName:"ul"},"Selected into the EOS Open Source Community Acknowledgments List ",(0,o.kt)("a",{parentName:"li",href:"https://steemit.com/eos/@liondani/eos-acknowledgments-making-it-immutable-via-steemit"},"list of selected lists")),(0,o.kt)("li",{parentName:"ul"},"EOS Hongkong Hackathon tech mentor"),(0,o.kt)("li",{parentName:"ul"},"Contributed code to several repositories in the 2020 GitHub Archive Program"),(0,o.kt)("li",{parentName:"ul"},"10 blockchain technology patents ",(0,o.kt)("a",{parentName:"li",href:"http://www1.soopat.com/Home/Result?SearchWord=%E5%90%B4%E4%BA%9A%E7%9A%87&FMZL=Y&SYXX=Y&WGZL=Y&FMSQ=Y"},"Patent List"))),(0,o.kt)("p",null,"Rick"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Educated in Xiamen University, Computer Science & MBA"),(0,o.kt)("li",{parentName:"ul"},"Head of the technical team of Meiyou APP (one of the most famous female health APP in Aisa)"),(0,o.kt)("li",{parentName:"ul"},"Head of the technical team of EOS wallet (one of the most famous EOS wallets in Asia)")),(0,o.kt)("h3",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," Yahuang Wu"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:wuyahuang@gmail.com"},"wuyahuang@gmail.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Website:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/GreenLemonProtocol"},"https://github.com/GreenLemonProtocol"))),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Address:")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," ")),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("p",null,"We have 10 years of experience in Internet research and development, focusing on the blockchain industry since 2018. We are deep participants in several technical communities, hackathon winners, and node service providers for EOS and PlatON."),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Green Lemon Protocol: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/GreenLemonProtocol"},"https://github.com/GreenLemonProtocol"))),(0,o.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Yahuang Wu: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wuyahuang"},"https://github.com/wuyahuang")),(0,o.kt)("li",{parentName:"ul"},"Rick: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/MeetYouDevs"},"https://github.com/MeetYouDevs"))),(0,o.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/504"},"Milestone Delivery: Dual-Key Stealth Address Protocol")),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 12 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USD")),(0,o.kt)("h3",{id:"milestone-1--implement-anonymous-nft-based-on-erc721"},"Milestone 1 \u2014 Implement anonymous NFT based on ERC721"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 8,000 USD")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,o.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,o.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,o.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,o.kt)("td",{parentName:"tr",align:null},"Article"),(0,o.kt)("td",{parentName:"tr",align:null},"We will publish ",(0,o.kt)("strong",{parentName:"td"},"article & demo video")," that explains How is anonymous NFT contract hidden owner works based on dual-key stealth address protocol.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"(ink!)Smart contracts: Anonymous NFT"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/504"},"Milestone Delivery: Dual-Key Stealth Address Protocol")," only implements mint, transfer, and burn. Based on the current version, we will continue to develop other ERC721 protocol methods and related test cases, such as approve, approve_for, get_approved, base_uri, and token_uri. Additionally, we need to add an extra param into the message before hashing, which is the token nonce. Account nonce is unfit due to each token owner being a unique and one-time encrypted address. When an NFT is operated once, its corresponding token nonce is automatically added by 1. We think that token nonce can prevent replay attacks for signatures already sent to the blockchain.")))),(0,o.kt)("h3",{id:"milestone-2--implement-anonymous-transaction"},"Milestone 2 \u2014 Implement anonymous transaction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 9 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 22,000 USD")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,o.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,o.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,o.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,o.kt)("td",{parentName:"tr",align:null},"Article"),(0,o.kt)("td",{parentName:"tr",align:null},"We will publish ",(0,o.kt)("strong",{parentName:"td"},"article & demo video")," that explain How is anonymous NFT solution works based on zero-knowledge proof.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"(ink!)Smart contracts: Anonymous NFT"),(0,o.kt)("td",{parentName:"tr",align:null},"Development and testing of the core functions of the Anonymous NFT smart contract, including deposit/withdraw DOT from the contract, sending the transaction to the NFT contract through the relayer, and paying the transaction fee to the relayer on-chain. As mentioned above, anonymous transactions are based on zero-knowledge proof.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"(Node.js)Relayer service"),(0,o.kt)("td",{parentName:"tr",align:null},"Development and testing of the relayer service. As mentioned above, All user transactions are sent by the relayer service, and users need to transfer token to the relayer based on zero-knowledge proof.")))),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"Please include here"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Develop PC website and Google chrome extension wallet based on Green Lemon Protocol, lower the threshold for blockchain users"),(0,o.kt)("li",{parentName:"ul"},"Add Merkle tree to store notes on-chain, so users can verify that transactions are mined by the blockchain network.")),(0,o.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website"),(0,o.kt)("p",null,"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/997"},"Proposal: Dual-Key Stealth Address Protocol")))}d.isMDXComponent=!0}}]);