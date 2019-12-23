import React from 'react'
import FormBuilder from '../../Components/Form/Builder/Builder'
import { connect } from 'react-redux';
import * as actions from '../../ReduxShbeeb/Actions';
import Note from '../../Components/Note/Note'
import styles from './Styles'
import asEntity from "../../Hocs/asEntity";
import { isRequired,} from '../../Services/Validations';

class Home extends FormBuilder {
    constructor(props) {
        super(props);
        this.initForm({
            forms: {
                addTaskForm: {
                    _id: {
                        value: new Date().getTime().toString(),
                        validators: []
                    },
                    name: {
                        value: '',
                        validators: [isRequired()]
                    },
                    description: {
                        value: '',
                        validators: [isRequired()]
                    }
                },
                searchForm: {
                    search: {
                        value: '',
                        validators: [isRequired()]
                    },
                }
            },
            tasks: [],
            searchResult:[]
        })
    }

    componentDidMount() {
        this.props.$store.get();
    }
    onAddTask=(e,formType="addTaskForm") => {
        e.preventDefault();
        if (this.validateForm(formType)) {
            this.props.$store.post(this.formValues(formType));
        }
    }
    onDeleteTask=(item) => {
        this.props.$store.delete(item);
    }
    onSearchTask=(e,formType="searchForm") => {
        e.preventDefault();
        if (this.validateForm(formType))
        {
            var search=this.formValues(formType).search
            var searchResult = this.state.tasks.filter(task => task.name.includes(search));
            this.setState({searchResult})
        }
            // this.props.$store.post(this.formValues('searchForm'))
    }

    entityDidPost(data) {
        this.setState({ tasks: [...this.state.tasks,data] })
    }

    entityDidGet(data) {
        this.setState({ tasks: data })
    }
    entityDidDelete(data) {
        var tasks=this.state.tasks.filter(task => task._id!==data._id)
        var searchResult=this.state.searchResult.filter(task => task._id!==data._id)

        this.setState({ tasks,searchResult })
    }

    entityDidCatch(method,{ errors }) {
        alert("Somethin went wrong");
    }

    render() {
        const { TextInput }=this
        return (
            <div style={styles.container}>
                <div style={styles.formContainer}>
                    <form onSubmit={this.onAddTask}>
                        <TextInput name={'name'} label={'Name'} formType={'addTaskForm'} />
                        <TextInput name={'description'} label={'Description'} formType={'addTaskForm'} />
                        <button>Add Task</button>
                    </form>
                </div>
                <form onSubmit={this.onSearchTask}>
                    <TextInput name={'search'} label={'Search'} formType={'searchForm'} />
                    <button>Search</button>
                </form>
                {/* <Search /> */}
                <div style={styles.taskContiner}>
                    {
                        this.formValues('searchForm').search!==''?
                        this.state.searchResult.map((task)=>
                            <Note task={task} onDeleteTask={(taskId)=>this.onDeleteTask(taskId)}/>)
                        :
                        this.state.tasks.map((task) =>
                            <Note task={task} onDeleteTask={(task) => this.onDeleteTask(task)} />
                        )

                    }
                </div>
            </div>
        )
    }
}



export default asEntity({ storeKey: 'Home' })(Home);
