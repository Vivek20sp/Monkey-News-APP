import React, { Component } from 'react';
import NewComponentsDesign from './NewComponentsDesign';
import LoadingComponent from './LoadingComponent';
import InfiniteScroll from "react-infinite-scroll-component";

class NewsComponents extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.props.setState(0);
    await this.fetchData();
  }

  fetchData = async () => {
    const { page } = this.state;
    const { cat } = this.props;
    const apiKey = '5457ced8942e4ec7b1687f6c44bfdd7c';

    this.setState({ loading: true });

    try {
      let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&page=${page}&category=${cat}&apiKey=${apiKey}&pageSize=20`);
      let data = await response.json();

      if (data.articles && Array.isArray(data.articles)) {
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...data.articles],
          totalResults: data.totalResults,
          loading: false,
          page: prevState.page + 1,
        }));
      } else {
        console.error('Error fetching articles:', data);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }

    document.title = `Monkey-App-${cat}`;
    this.props.setState(100);
  }

  refresh = async () => {
    this.setState({ page: 1, articles: [] }, this.fetchData);
  }

  render() {
    const { articles, loading, totalResults } = this.state;

    return (
      <div>
        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchData}
          hasMore={articles.length < totalResults}
          loader={<LoadingComponent />}
          refreshFunction={this.refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>}
          releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>}
        >
          {loading && <LoadingComponent />}
          {!loading && articles.length > 0 && <NewComponentsDesign data={articles} cat={this.props.cat} />}
        </InfiniteScroll>
      </div>
    );
  }
}

export default NewsComponents;
