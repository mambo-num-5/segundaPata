import React from 'react';
import $ from 'jquery';

class LikeButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        likes: 0
      }
      this.likes = this.likes.bind(this);
      this.postLike = this.postLike.bind(this);
      this.boxLike = this.boxLike.bind(this);
    }

     likes() {
       this.setState({
         likes: this.state.likes+1
       });
     }

     postLike(likes){
    $.ajax({
      method: 'POST',
      url:'/likes',
      contentType: 'application/json',
      data: JSON.stringify({
        likes: this.state.likes
      })
    }).done(() => {
      //this.getLikePost();
    });
  }

   boxLike() {
     this.postLike();
     this.likes();
   }

  render() {
    return (
      // Passing in text.
      <div className="num">
        <button className="btn" onClick={this.boxLike}>
        </button>
          {this.state.likes}
      </div>
    );
  }
}

export default LikeButton;
