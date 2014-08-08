/** @jsx React.DOM */


var CommentBox = React.createClass({

  getInitialState: function () {
    return {data: []};
  },

  componentDidMount: function () {

    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);

  },

  handleCommentSubmit: function (comment) {
    var comments = this.state.data;
    var newComments = comments.concat([ comment ]);
    this.setState({data: newComments });
    $.ajax({
      url: this.props.url,
      type: 'POST',
      dataType: 'json',
      data: comment,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  loadCommentsFromServer: function () {

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);