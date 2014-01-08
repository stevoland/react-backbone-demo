var React          = require('react/addons');

var JobListItemEditing = React.createClass({
  handleBlur: function (e) {
    if (event.target.value) {
      if (!this.state.saved) {
        this.props.onSave();
      }
    } else {
      this.props.onCancel();
    }

    this.setState({
      saved: true
    });
  },

  getInitialState: function () {
    return {
      saved: false
    };
  },

  handleChange: function (e) {
    this.props.onChange(event.target.value);
  },

  handleKeyDown: function (e) {
    switch (e.keyCode) {
      case 13: // Enter
        this.handleBlur(e);
        break;
      case 27: // Escape
        e.target.value = '';
        this.handleBlur(e);
        break;
    }
  },

  componentDidMount: function () {
    this.select();
  },

  componentWillReceiveProps: function (nextProps) {
    this.refs.name.getDOMNode().value = nextProps.name;
    this.setState({
      saved: false
    });
    this.select();
  },

  select: function () {
    this.refs.name.getDOMNode().select();
  },

  render: function () {
    return (
      <li key="new" className="selected editing">
        <input type="checkbox" checked={true} />
        {' '}
        <input
          ref="name"
          type="text"
          defaultValue={this.props.name}
          placeholder="Enter job name"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    );
  }
});

module.exports = JobListItemEditing;