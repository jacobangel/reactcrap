/** @jsx React.DOM */
var CommentForm = React.createClass({

	handleSubmit: function () {
		var author = this.refs.author.getDOMNode().value.trim();
		var text = this.refs.text.getDOMNode().value.trim();

		if(!text || !author) {
			console.log('preventing submission');
			return false;
		}

		// @todo presumably wqire this up.
		this.refs.author.getDOMNode().value = '';
		this.refs.text.getDOMNode().value = '';

		console.log('Post attempted by: ', author, text);
		return false;
	},

	render: function () {
		return (
		<form className="commentForm" onSubmit={this.handleSubmit}>
			<input type="text" ref="author" placeholder="Name" />
			<input type="text" ref="text" placeholder="Say something..." />
			<input type="submit" value="Post" />
		</form>
		);
	}
});