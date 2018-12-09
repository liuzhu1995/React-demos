




class TodoList extends React.Component {
    render() {
        return (
            <li>
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
        let recordset = this.props.recordset;
        if(recordset) {
            recordset.forEach((record, index) => {
                rows.push(<TodoList name={record.name}  key={index.toString()}/>)
            });
        }

        return (
            <ol>{rows}</ol>
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

    handleRecordTextAddChange(e) {
        this.props.onRecordTextAdd();
        e.preventDefault();
    }
    render() {
        return (
            <div className="SearchBar">
                <form >
                    <div>
                        <input
                            type="text"
                            value={this.props.recordText}
                            onChange={this.handleRecordTextInputChange}
                        />
                    </div>
                    <div >
                        <button
                            onClick={this.handleRecordTextAddChange}
                        >Add</button>
                    </div>
                </form>
            </div>
        )
    }
}



class RecordTodoTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recordText: '',
            recordset: [
                {name: '看书'},
                {name: '听歌'},
                {name: '煮饭'},
            ]
        };
        this.handleRecordTextInput = this.handleRecordTextInput.bind(this);
        this.handleRecordTextAdd = this.handleRecordTextAdd.bind(this);
        this.handleLocalStorage = this.handleLocalStorage.bind(this);
    }

    handleRecordTextInput(recordText) {
        this.setState({recordText: recordText})
    }
    handleRecordTextAdd() {
        let storage = getLocalStorage();
        let newRecordset = this.state.recordset.concat();
        newRecordset.unshift({name: this.state.recordText});
        this.setState({recordset: newRecordset, recordText: ''});
        storage.setItem('recordset', JSON.stringify(newRecordset));
    }
    handleLocalStorage() {
        let storage = getLocalStorage();
        if(typeof storage.recordset === 'undefined') {
            storage.setItem('recordset', JSON.stringify([]));
        }
        this.setState({recordset: JSON.parse(storage.recordset)});
    }

    componentWillMount() {
        this.handleLocalStorage()
    }
    render() {
        return (
            <div className="container">
                <InputBar
                    recordText={this.state.recordText}
                    onRecordTextInput={this.handleRecordTextInput}
                    onRecordTextAdd={this.handleRecordTextAdd}
                />
                <TodoTable
                    recordset={this.state.recordset}
                />
            </div>
        )
    }
}


function getLocalStorage() {
    if(typeof localStorage === 'object') {
        return localStorage;
    }else {
        throw new Error('local storage 无法使用！')
    }
}

ReactDOM.render(
  <RecordTodoTable/>,
  document.getElementById('root')
);