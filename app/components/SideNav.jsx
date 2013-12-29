var React = require('react/addons');
var SideNavItem = require('./SideNavItem.jsx');

var SideNav = React.createClass({

  render: function () {
    var selected = this.props.selected;
    var items = this.props.pages.map(function (page, i) {
      var isSelected = (page.id === selected);

      return SideNavItem({
        selected: isSelected,
        url: page.url,
        text: page.text,
        key: i
      });
    });

    return (
      <nav>
        <ul className="nav nav-pills nav-stacked">
          {items}
        </ul>
      </nav>
    );
  }
});


module.exports = SideNav;