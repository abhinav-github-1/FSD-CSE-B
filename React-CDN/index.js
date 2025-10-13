// const image=React.createElement("img",
//     {
//         src:"https://tse4.mm.bing.net/th/id/OIP.YSJE-m47WRFAFX1JP1r2jgHaL3?pid=Api&P=0&h=180",
//         width: "150",
//         height:"150",
//         alt:"book-image"
//     },null
// );
// const h4=React.createElement("h4",null,"Price:345/-");
// const child=React.createElement("div",{
//     className: "card"
// },image,h4);
// const parent=document.getElementById("root");
// // ReactDOM.render(child,parent); changed in react 19
// const root=ReactDOM.createRoot(parent);
// root.render(child);

//using babble 
function Book(props){
    return(
        <div className="card">
            <img src={props.image} width="150" height="150" alt="book"/>
            <h4>Price: {props.price}</h4>
        </div>
    )
};
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<Book image="https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?pid=Api&P=0&h=180" price="521/-"/>);
