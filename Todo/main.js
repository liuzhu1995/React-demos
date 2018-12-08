




class TodoList extends React.Component {
    render() {
        return (
            <li>
                <span className="serialNum">{this.props.index + 1}</span>
                <span className="recordValue"> {this.props.name}</span>

            </li>
        )
    }
}

class TodoTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rows = [];
        this.props.recordset.forEach((record, index) => {
            rows.push(<TodoList name={record.name} index={index} key={index.toString()}/>)
        });
        return (
            <ul>{rows}</ul>
        )
    }
}

class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleRecordTextInputChange = this.handleRecordTextInputChange.bind(this);
        this.handleRecordTextAddChange = this.handleRecordTextAddChange.bind(this);
    }

    handleRecordTextInputChange(e) {
        this.props.onRecordTextInput(e.target.value)
    }

    handleRecordTextAddChange() {
        this.props.onRecordTextAdd()
    }
    render() {
        return (
            <div>
                {/*<input type="checkbox"/>*/}
                <input
                    type="text"
                    value={this.props.recordText}
                    onChange={this.handleRecordTextInputChange}
                />
                <button
                    onClick={this.handleRecordTextAddChange}
                >Add</button>
            </div>
        )
    }
}



class RecordTodoTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recordText: '',
            records: [
                {name: '看书'},
                {name: '听歌'},
                {name: '煮饭'},
            ]
        };
        this.handleRecordTextInput = this.handleRecordTextInput.bind(this);
        this.handleRecordTextAdd = this.handleRecordTextAdd.bind(this);
    }

    handleRecordTextInput(recordText) {
        this.setState({recordText: recordText})
    }
    handleRecordTextAdd() {
        let newRecordset = this.state.records.concat();
        newRecordset.unshift({name: this.state.recordText});
        this.setState({records: newRecordset});
    }

    render() {
        return (
            <div>
                <InputBar
                    recordText={this.state.recordText}
                    onRecordTextInput={this.handleRecordTextInput}
                    onRecordTextAdd={this.handleRecordTextAdd}
                />
                <TodoTable
                    recordset={this.state.records}
                />
            </div>
        )
    }
}


ReactDOM.render(
  <RecordTodoTable/>,
  document.getElementById('root')
);