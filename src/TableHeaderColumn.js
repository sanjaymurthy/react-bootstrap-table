import React from 'react';
import classSet from 'classnames';
import Const from './Const';
import Util from './util';

class TableHeaderColumn extends React.Component{

  handleColumnClick(e){
    if(!this.props.dataSort)return;
    let order = this.props.sort == Const.SORT_DESC?Const.SORT_ASC:Const.SORT_DESC;
    this.props.onSort(order, this.props.dataField);
  }

  componentDidMount(){
    this.refs["header-col"].setAttribute("data-field", this.props.dataField);
  }

  render(){
    // var width = this.props.width!==null?parseInt(this.props.width):null;
    var thStyle = {
      textAlign: this.props.dataAlign,
      display: this.props.hidden?"none":null
      // width: width,
      // maxWidth: width
    };

    const defaultCaret = (!this.props.dataSort) ? null : (
      <span className="order">
        <span className="dropdown">
          <span className="caret" style={{margin: '10px 0 10px 5px', color: '#ccc'}}></span>
        </span>
        <span className="dropup">
          <span className="caret" style={{margin: '10px 0', color: '#ccc'}}></span>
        </span>
      </span>
    );
    const sortCaret = this.props.sort ? Util.renderReactSortCaret(this.props.sort) : defaultCaret;

    var classes = this.props.className+" "+(this.props.dataSort?"sort-column":"");
    return(
      <th ref='header-col'
          className={classes}
          style={thStyle}
          onClick={this.handleColumnClick.bind(this)}>
        {this.props.children}{sortCaret}
      </th>
    )
  }
}
TableHeaderColumn.propTypes = {
  dataField: React.PropTypes.string,
  dataAlign: React.PropTypes.string,
  dataSort: React.PropTypes.bool,
  onSort: React.PropTypes.func,
  dataFormat: React.PropTypes.func,
  isKey: React.PropTypes.bool,
  editable: React.PropTypes.any,
  hidden: React.PropTypes.bool,
  className:React.PropTypes.string,
  width: React.PropTypes.string,
  sortFunc: React.PropTypes.func,
  columnClassName: React.PropTypes.any,
  filterFormatted: React.PropTypes.bool,
  sort: React.PropTypes.string
};

TableHeaderColumn.defaultProps = {
  dataAlign: "left",
  dataSort: false,
  dataFormat: undefined,
  isKey: false,
  editable: true,
  onSort: undefined,
  hidden: false,
  className: "",
  width: null,
  sortFunc: undefined,
  columnClassName: '',
  filterFormatted: false,
  sort: undefined
};

export default TableHeaderColumn;
