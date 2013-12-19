var React = require('react-tools/build/modules/React');

var MenuItem = React.createClass({
  render: function () {
    var className = this.props.selected ? 'selected' : null;
    var content = !this.props.selected ?
      (<a href={this.props.url}>{this.props.text}</a>) : this.props.text;

    return (
      <li className={className}>
        {content}
      </li>
    );
  }
});

var Layout = React.createClass({

  getDefaultProps: function () {
    return {
      pages: [
        {
          id: 'main',
          text: 'Main',
          url: '/'
        },
        {
          id: 'about',
          text: 'About',
          url: '/about'
        }
      ]
    };
  },

  getInitialState: function () {
    return {
      current: 'main'
    }
  },

  render: function () {
    var selected = this.props.selected;
    var items = this.props.pages.map(function (page) {
      var isSelected = (page.id === selected);

      return MenuItem({
        selected: isSelected,
        url: page.url,
        text: page.text
      });
    });

    return (
      <div>
        <ul>
          {items}
        </ul>
        {this.props.children}
      </div>
    );
  }
});


module.exports = Layout;