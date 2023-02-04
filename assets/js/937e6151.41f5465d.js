"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8113],{48778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));a(30828);const l={},r="W3F Grant Proposal",o={unversionedId:"applications/ipfs_utilities",id:"applications/ipfs_utilities",title:"W3F Grant Proposal",description:"- Project Name: Substrate IPFS Utilities",source:"@site/docs/applications/ipfs_utilities.md",sourceDirName:"applications",slug:"/applications/ipfs_utilities",permalink:"/Grants-Program/applications/ipfs_utilities",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview",id:"project-overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Previous Work",id:"previous-work",level:4},{value:"Upload Utilities",id:"upload-utilities",level:4},{value:"Read/Access Utilities",id:"readaccess-utilities",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team Members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 - Research and implementation of file upload feature",id:"milestone-1---research-and-implementation-of-file-upload-feature",level:3},{value:"Milestone 2 -  Implementation of the redirect/fetch file feature",id:"milestone-2----implementation-of-the-redirectfetch-file-feature",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"w3f-grant-proposal"},"W3F Grant Proposal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Project Name:")," Substrate IPFS Utilities"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.tdsoftware.de/"},"TDSoftware")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0x8Db0972d9F40357526B879A002d60CCf6B4a8882"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Level:")," 3")),(0,n.kt)("h2",{id:"project-overview"},"Project Overview"),(0,n.kt)("p",null,"IPFS is a web3 solution to store and provide big-sized and not structured data. The datas address is based on it's content (CID: Content Identifier), which guarantees that the content or file isn't changed or manipulated in any way. The same CID will always point to the same content spread in the IPFS network. Currently there is no satisfying way of an integration for IPFS on Substrate blockchains. An example use case are NFTs (Non-Fungible Tokens): An NFT for instance might be linked to an external artwork (image, audio file, video file, ...) that is stored within IPFS."),(0,n.kt)("h3",{id:"problem"},"Problem"),(0,n.kt)("p",null,"Currently, the easiest way to record IPFS CIDs on a Substrate-based blockchains, is to call an extrinsic and pass the IPFS CID as an input parameter to store it on chain. So two separate steps are necessary:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add (artwork) file to IPFS to retrieve CID"),(0,n.kt)("li",{parentName:"ol"},"Store CID for NFT on chain")),(0,n.kt)("p",null,"Because this are two separate actions to be performed by a client, we cannot consider this to be secure.\nIn the second step we cannot verify that the previously uploaded content in the IPFS network is the correct wanted one."),(0,n.kt)("p",null,"In addition, there is no redirect feature on Substrate blockchains to request a file from IPFS via Substrate RPC."),(0,n.kt)("h3",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Provide a pallet implementation that allows clients to add files to IPFS and store the related CID on chain with one RPC. For instance when minting an NFT with a given artwork file."),(0,n.kt)("p",null,"In addition to that, the Substrate blockchain can offer an RPC API to read the file from IPFS too. Therefore a redirect feature needs to be implemented based on the PRG mechanism.\nAs it takes a few moments until an added file is available on the IPFS network thru public gateways, the local IPFS node can used to retrieve the file."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("h4",{id:"previous-work"},"Previous Work"),(0,n.kt)("p",null,"The implementation from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rs-ipfs/substrate/tree/offchain_ipfs"},"offchain_ipfs")," provides a working local IPFS node and utilities to interact with that node. This upcoming project will use the existing IPFS node implementation and will add adjustments and more functionality as shown below. The current implementation especially misses a proper handling of the CID and has no redirect feature to fetch files from IPFS with Substrate. It also uses a signed extrinsic method to fetch files from IPFS: that is not necessary, because the file is public available."),(0,n.kt)("h4",{id:"upload-utilities"},"Upload Utilities"),(0,n.kt)("p",null,"In the first part, detailed research on the existing implementation is needed. The following things will be implemented or adjusted:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Accepting bytes as an input parameter of an extrinsic to end up in IPFS"),(0,n.kt)("li",{parentName:"ul"},"Adding ",(0,n.kt)("inlineCode",{parentName:"li"},"&[u8]")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"[u8]")," to the local IPFS node thru an off-chain worker"),(0,n.kt)("li",{parentName:"ul"},"Wait for the added file to be available thru a public IPFS gateway like ipfs.io"),(0,n.kt)("li",{parentName:"ul"},"Store CID information on chain"),(0,n.kt)("li",{parentName:"ul"},"After file is available thru public IPFS gateway, remove it from the on-chain storage"),(0,n.kt)("li",{parentName:"ul"},"Handling the CID version 0 and CID version 1"),(0,n.kt)("li",{parentName:"ul"},"Benchmarking on the extrinsic call to know the maximum size of bytes accepted")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://tdsoftware-dev.de/w3f-grant-program/ipfs-util-add-file.png",width:"800"})),(0,n.kt)("h4",{id:"readaccess-utilities"},"Read/Access Utilities"),(0,n.kt)("p",null,"In the second part, the redirect and fetch feature will be provided based on a PRG mechanism. This will allow users to fetch the linked files from IPFS by requesting the Substrate blockchain. The second part includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implement RPC API for file redirect to public IPFS gateway"),(0,n.kt)("li",{parentName:"ul"},"Based on Post/Redirect/Get (",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Post/Redirect/Get"},"PRG"),") pattern for gRPC"),(0,n.kt)("li",{parentName:"ul"},"API will return HTTP status code 303, so that the redirect will change the HTTP method from POST to GET"),(0,n.kt)("li",{parentName:"ul"},"API will return the actual file location. String value with URL."),(0,n.kt)("li",{parentName:"ul"},"Will redirect to public IPFS gateway. E.g. ipfs.io"),(0,n.kt)("li",{parentName:"ul"},"This feature is not limited to IPFS and can be used with any file server"),(0,n.kt)("li",{parentName:"ul"},"Developers can define the redirect location as CIDv0 or CIDv1.")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://tdsoftware-dev.de/w3f-grant-program/ipfs-util-prg.png",width:"500"})),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"The implementation helps people using IPFS with Substrate, this is a common scenario.\nEspecially for NFT products this solution is helpful to avoid external middleware implemetations taking action. Having the whole logic for minting NFTs with related content inside Substrate makes it easier to maintain and more secure."),(0,n.kt)("h4",{id:"technology-stack"},"Technology Stack"),(0,n.kt)("p",null,"Blockchain"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Substrate"),(0,n.kt)("li",{parentName:"ul"},"Rust"),(0,n.kt)("li",{parentName:"ul"},"IPFS")),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team Members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sascha Dobschal"),(0,n.kt)("li",{parentName:"ul"},"Antonio Yang"),(0,n.kt)("li",{parentName:"ul"},"Lasse Linnam\xe4ki"),(0,n.kt)("li",{parentName:"ul"},"Markus Fitzner")),(0,n.kt)("p",null,"The team setup might change depending on the availability at TDSoftware. With 40+ employees, TDSoftware has various developers that might contribute to the project. In all probability the members listed above will attend."),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Sascha Dobschal"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:s.dobschal@tdsoftware.de"},"s.dobschal@tdsoftware.de"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," Schlossgasse 20, 07743 Jena, Germany"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," TDSoftware GmbH")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"We have years of experience bringing ideas to life with a user-centered focus using blockchain and mobile technology. We have worked closely with many customers to implement their solutions and have already gained experience with blockchain technologies.\nOur most relevant projects are, among others:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SubIdentity (W3F Grant), Identity Directory for Substrate Chains"),(0,n.kt)("li",{parentName:"ul"},"Exchange for trading digital assets (Customer is a Top 200 Token of CMC)"),(0,n.kt)("li",{parentName:"ul"},"Token Swap WebApp (Customer is a Top 200 Token of CMC)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://artists.niftymarket.com/"},"Blockchain, NFT Pallets & App")," (In Development)")),(0,n.kt)("p",null,"We look forward to contributing to the web3 ecosystem with an open-source project next."),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("p",null,"Source code will be in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TDSoftware"},"https://github.com/TDSoftware"))),(0,n.kt)("p",null,"Team profiles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dobschal"},"https://github.com/dobschal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yanganto"},"https://github.com/yanganto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/markusdent"},"https://github.com/markusdent"))),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/company/tdsoftware-gmbh/mycompany/"},"https://www.linkedin.com/company/tdsoftware-gmbh/mycompany/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dobschal/"},"https://www.linkedin.com/in/dobschal/"))),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("p",null,"A concept and solution draft was created as part of this application and can be found in the Project Details chapter."),(0,n.kt)("p",null,"As described above, we will reuse the existing IPFS node implementation developed by: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/offchain_ipfs.md"},"offchain::ipfs"),".\nThis solution is not handling the CID in a proper way. E.g. instead of returning the CID, it's just logging it out. It also provides the reading of the file thru an extrinsic. As the file is public on IPFS, that is not necessary."),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 Months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 66,000 DAI")),(0,n.kt)("h3",{id:"milestone-1---research-and-implementation-of-file-upload-feature"},"Milestone 1 - Research and implementation of file upload feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 Month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 33,000 DAI")),(0,n.kt)("p",null,'After the first research, the pallet implementation will be developed. The goal of milestone 1, is a fully working round trip (except the redirect feature). A web3 client, reading a file, calling an extrinsic and uploading the content of a file, will be developed. The CID information from IPFS will be stored in the pallet.  Please see the chapter above ("Project Details > Upload utilities") for details.'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,n.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,n.kt)("strong",{parentName:"td"},"tutorial")," that explains how a developer can re-use the implementation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Code"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide the whole code in a public GitHub repository.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Implementation of the IPFS upload extrinsic"),(0,n.kt)("td",{parentName:"tr",align:null},"The pallet implementation will be added, that takes bytes of a file as input parameters. Adjust the extrinsic method ",(0,n.kt)("inlineCode",{parentName:"td"},"ipfs_add_bytes")," to trigger an event ",(0,n.kt)("inlineCode",{parentName:"td"},"IpfsAdd(CID)"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Implementation to retrieve CID and store it on chain"),(0,n.kt)("td",{parentName:"tr",align:null},"The off-chain worker needs to be extended. Data (bytes) received will be added to the local IPFS node via the IPFS offchain worker. Once added, it stores the CID on chain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Implementation of a web3 client"),(0,n.kt)("td",{parentName:"tr",align:null},"For testing and the use case of a tutorial, a web3 client with dedicated UI will be implemented. The client app can read the data from a file, call the implemented extrinsic and uploads the content in bytes to the Substrate node.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4."),(0,n.kt)("td",{parentName:"tr",align:null},"Benchmark and adjustments"),(0,n.kt)("td",{parentName:"tr",align:null},"To check the maximum accepted file size, a benchmarking is performed. The result should give some concrete limits that will be added to the implemetation.")))),(0,n.kt)("h3",{id:"milestone-2----implementation-of-the-redirectfetch-file-feature"},"Milestone 2 -  Implementation of the redirect/fetch file feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 Month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 33,000 DAI")),(0,n.kt)("p",null,"The goal of the second milestone is to implement the redirect/fetch utilities. A RPC request, based on a PRG mechanism, can be used to redirect to any file server, which is not limited to IPFS. If the file is not available thru a public IPFS gateway, the local node can be used to retrieve the file."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,n.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,n.kt)("strong",{parentName:"td"},"tutorial")," that explains how a developer can re-use the implementation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Code"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide the whole code in a public GitHub repository.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"We will write and publish a Medium article to spread the word and give developers an introduction to the project and how to use it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Fetch File Implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"Implement the logic that allows clients to fetch a file from IPFS with the Substrate node. E.g. ",(0,n.kt)("inlineCode",{parentName:"td"},'#[prg(name = "nft_getFileById")]')," will be designed and developed that allows users to redirect a request, which returns ",(0,n.kt)("inlineCode",{parentName:"td"},"Result<String>"),', to a file server. The PRG mechanism is used to provide a RPC API that can redirect to a file server. The existing IPFS "get file" extrinsic will be obsolet as we provide this new RPC API.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Web3 Client Extension"),(0,n.kt)("td",{parentName:"tr",align:null},"The web3 client will be extend to show the (PRG) redirect feature and retrieve corresponding files via a public IPFS gateway.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Local Node Fetch Implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"Implement a file fetch RPC API, that returns the file from the local embedded IPFS node instead of the public IPFS gateway. This is helpful when waiting for the file to be available on the public IPFS gateway.")))),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,"This is our second application for an open-source project to innovate the web3 Ecosystem."))}u.isMDXComponent=!0}}]);