import React from 'react';
import logo from './logo.svg';
import './ArticleList.css';

function ArticleList() {
  return (
    <div className="ArticleList">
      <header className="App-header">
        <h1>List of Articles</h1>

        <hr/>
        <br/>

        <div className="Article">
            <h2>Article example 1</h2>
            <strong>Article attribute type example 1</strong> Article attribute value example 1<br/>
            <strong>Article attribute type example 2</strong> Article attribute value example 2<br/>
            <strong>Article attribute type example 3</strong> Article attribute value example 3<br/>
            <strong>Article attribute type example 4</strong> Article attribute value example 4<br/>
            <strong>Article attribute type example 5</strong> Article attribute value example 5<br/>
        </div>

        <div className="Article">
            <h2>Article example 2</h2>
            <strong>Article attribute type example 1</strong> Article attribute value example 1<br/>
            <strong>Article attribute type example 2</strong> Article attribute value example 2<br/>
            <strong>Article attribute type example 3</strong> Article attribute value example 3<br/>
            <strong>Article attribute type example 4</strong> Article attribute value example 4<br/>
            <strong>Article attribute type example 5</strong> Article attribute value example 5<br/>
            </div>

        <div className="Article">
            <h2>Article example 2</h2>
            <strong>Article attribute type example 1</strong> Article attribute value example 1<br/>
            <strong>Article attribute type example 2</strong> Article attribute value example 2<br/>
            <strong>Article attribute type example 3</strong> Article attribute value example 3<br/>
            <strong>Article attribute type example 4</strong> Article attribute value example 4<br/>
            <strong>Article attribute type example 5</strong> Article attribute value example 5<br/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
