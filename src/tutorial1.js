var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        Hello, sucker, I'm a frickin' CommentBox
      </div>
      );
  }
})

React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);