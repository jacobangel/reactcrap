/** @jsx React.DOM */


var CommentBox = React.createClass({

  getInitialState: function () {
    return {data: []};
  },

  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  loadCommentsFromServer: function () {

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status);
      }.bind(this)
    });

  },

  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox url="src/comments.json" pollInterval={2000} />,
  document.getElementById('content')
);