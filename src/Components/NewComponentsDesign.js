import React from "react";

const NewComponentsDesign = ({ data }) => {
    const excess=(description)=>{
        let newDescription= description?.split(' ');
        let updatedDescription=''
        for(let i in newDescription){
            if(i<=31){
                updatedDescription=updatedDescription+newDescription[i]+" ";
            }
            else{
                break;
            }
        }
        return updatedDescription;
    }
  return (
    <>
      <div className="container d-flex flex-row flex-wrap justify-content-center align-item-center">
        <h1 style={{padding:"10px"}}>Today's Top Headlines</h1>
        <hr />
        <div className="row">
          {data.map((ele) => {
            return (
              <div className="col-lg-4" key={ele.url}>
                <div className="card" style={{ width: "25rem",height:"35rem" }}>
                    <img src={ele.urlToImage!=null?ele.urlToImage:"☠️"} className="card-img-top" alt="" width="100%" height="179"/>
                    <div className="card-body" style={{width:"100%",height:"309px"}}>
                        <h5 className="card-title">{ele.title}</h5>
                        <p className="card-text">{excess(ele.description)}.....</p>
                        <p className="card-text">by author {ele.author!==null?ele.author:"none"} on {new Date(ele.publishedAt).toUTCString()}</p>
                        <a href={`${ele.url}`} className="btn btn-primary">
                            Read More
                        </a>
                    </div>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewComponentsDesign;
