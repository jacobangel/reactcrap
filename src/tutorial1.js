/** @jsx React.DOM */
var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        Hello, sucker, I am a frickin CommentBox
      </div>
      );
  }
});

React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);