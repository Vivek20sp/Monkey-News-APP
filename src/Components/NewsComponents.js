import React, { Component } from 'react';
import NewComponentsDesign from './NewComponentsDesign';
import LoadingComponent from './LoadingComponent';
import InfiniteScroll from "react-infinite-scroll-component";
// or commonjs


export class NewsComponents extends Component {
  constructor(){
    super();
    this.state={
      article:[],
      loading:true,
      page:1,
      totalPage:0,
    };
  }


  async componentDidMount(){
    this.props.setState(0)
    let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&page=1&category=${this.props.cat}&apiKey=5457ced8942e4ec7b1687f6c44bfdd7c&pageSize=20`);
    this.setState({loading:true});
    this.props.setState(30);
    let data=await response.json();
    this.setState({loading:false});
    this.props.setState(70);
    this.setState({article:data.articles,totalPage:data.totalResults});
    document.title="Monkey-App-"+this.props.cat;
    console.log(this.props.cat);
    this.props.setState(100);
  }

  // handlePreviousClick= async ()=>{
  //   let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page-1}&category=${this.props.cat}&apiKey=5457ced8942e4ec7b1687f6c44bfdd7c&pageSize=20`);
  //   this.setState({loading:true});
  //   let data=await response.json();
  //   this.setState({loading:false});
  //   this.setState({article:data.articles,page:this.state.page-1});
  //   document.title="Monkey-App-"+this.props.cat
  // }

  // handleNextClick=async ()=>{
  //   if(Math.round(this.state.totalPage/20)===this.state.page){

  //   }
  //   else{
  //     let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page+1}&category=${this.props.cat}&apiKey=5457ced8942e4ec7b1687f6c44bfdd7c&pageSize=20`);
  //     this.setState({loading:true});
  //     let data=await response.json();
  //     this.setState({loading:false});
  //     this.setState({article:data.articles,page:this.state.page+1});
  //     document.title="Monkey-App-"+this.props.cat 
  //   }
  // }
  fetchData=async ()=>{
    let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page+1}&category=${this.props.cat}&apiKey=5457ced8942e4ec7b1687f6c44bfdd7c&pageSize=20`);
    this.setState({loading:true});
    let data=await response.json();
    this.setState({loading:false});
    this.setState({article:this.state.article.concat(data.articles),totalPage:data.totalResults,page:this.state.page+1});
    document.title="Monkey-App-"+this.props.cat;
  }
  refresh=async()=>{
    await this.fetchData();
  }

  render() {
    return (
      <div>
        <InfiniteScroll
            dataLength={this.state.article.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={(this.state.totalPage!==this.state.article.length)?true:false}
            loader={<LoadingComponent/>}
            refreshFunction={this.refresh}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            }>
        {this.state.loading && <LoadingComponent />}
        {!this.state.loading && <NewComponentsDesign data={this.state.article} cat={this.props.cat} />}
        {/* <div className="container d-flex flex-row flex-wrap justify-content-between">
            <button disabled={this.state.page<=1} type="submit" className="btn btn-primary" onClick={this.handlePreviousClick}>&laquo; Previous</button>
            <button disabled={Math.round(this.state.totalPage/20)===this.state.page} type="submit" className="btn btn-primary" onClick={this.handleNextClick}>Next &raquo;</button>
        </div> */}
        </InfiniteScroll>
      </div>
    )
  }
}

export default NewsComponents


