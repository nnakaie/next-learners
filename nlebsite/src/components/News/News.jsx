import React from 'react';
import './News.scss';

class News extends React.Component {
    render() {
      return (
        <div id="news" className="category">
          <h2 className="category-title">NEWS</h2>
          <ul>
            <li>
              <div className="date">6/8/2019</div>
              <a href="">hello world news hello world news hello world news</a>
            </li>
            <li>
              <div className="date">6/8/2019</div>
              <a href="">hello world news hello world news hello world news</a>
            </li>
            <li>
              <div className="date">6/8/2019</div>
              <a href="">hello world news hello world news hello world news</a>
            </li>
          </ul>
        </div>
      );
    };　　
  };

  export default News;