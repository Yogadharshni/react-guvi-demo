import "./App.css";

export default function App() {
  return (
    <div className="App"> 
    <PricingCards />
    </div>
  );
}


function PricingCards(){
  const cardslist=[{
    "main":"FREE",
    "price":"$0/month",
    'Number_of_user':"Single User",
    "storage":"5GB Storage",
    "Access":"Community Access",
    "subdomin":"No Free Subdomain"
},
{
    "main":"PLUS",
    "price":"$9/month",
    "Number_of_user":"5 User",
    "storage":"50GB Storage",
    "Access":"Community Access",
   "subdomin":"Free Subdomain"      
},
{
 "main":"PRO",
 "price":"$49/month",
 "Number_of_user":"Unlimited Users",
 "storage":"150GB Storage",
 "Access":"Community Access",
 "subdomin":"Unlimited Free Subdomain"      
}
];
  return(
    <div className="toalign">
      {cardslist.map((mv)=>(
      <Pricing cards={mv} />
      ))}
    </div>
  );
}


function Pricing({cards}){
  return(
      <div className="Card">
        <p>{cards.main}</p>
        <h1>{cards.price}</h1>
        <p>{cards.Number_of_user}</p>
        <p>{cards.storage}</p>
        <p>{cards.subdomin}</p>
        <p>{cards.Access}</p>
        <button className='button'>Buy Now</button>
        </div>
  );
}





