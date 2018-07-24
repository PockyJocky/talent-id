import React from 'react';
import { connect } from 'react-redux'
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Formik, Form, FieldArray } from 'formik';
import { object, string, mixed, number, array } from 'yup';

import { addNewUser } from '../actions/UserActions';

import { computerSciece } from '../const/skillNames.js';

// import 'react-bootstrap';
import '../styles/AddUserCard.css';
import SkillPopover from './helpers/SkillPopover.js'

const enlistedRanks = ['AB', 'Amn', 'A1C', 'SrA', 'SSgt', 'TSgt', 'MSgt', 'SMSgt', 'CMSgt'];
const officerRanks = ['2nd Lt', '1st Lt', 'Capt', 'Maj', 'Lt Col', 'Col', 'Brig Gen', 'Maj Gen', 'Lt Gen', 'Gen'];
const otherRanks = [ 'Civilian', 'Contractor' ];
const rankTypes = [ 'Enlisted', 'Officer', ...otherRanks ];
const rankList = [ ...enlistedRanks, ...officerRanks, ...otherRanks ];

const squadronList = ['13 IS', '48 IS' ,'548 OSS', '9 IS', '548 ISRG', '7 IS'];

const userValidation = object().shape({
    firstName: string('First Name')
        .required('You must provide a first name.'),
    lastName: string('Last Name')
        .required('You must provide a last name.'),
    edipi: string('EDIPI')
        .matches(/^\d{10}$/, 'You must provide a valid EDIPI.')
        .required('You must provide an EDIPI.'),
    rank: mixed('Rank')
        .oneOf(rankList, 'You must select a rank.')
        .required('You must select a rank.'),
    squadron: mixed('Squadron')
        .oneOf(squadronList, 'You must select a unit.')
        .required('You must select a unit.'),
});

const skillValidation = object().shape({
    name: string()
        .label('Skill')
        .required('You must provide a skill.'),
    skill: number()
        .label('Proficiency')
        .min(0)
        .max(5)
        .default(3),
    interest: number()
        .label('Interest')
        .min(1)
        .max(5)
        .default(3),
});

const validationSchema = object().shape({
    user: userValidation,
    skills: array().of(skillValidation).min(1)
});

const initialValues = {
    user: {
        firstName: '',
        lastName: '',
        edipi: '',
        rank: '',
        squadron: '',
    },
    skills: [{
        name: '',
        proficiency: 3,
        interest: 3,
    }]
};

class AddUserCard extends React.Component {
    constructor(props) {
        super(props);

        this.renderUserForm.bind(this);
        this.renderInterestForm.bind(this);
        this.renderReview.bind(this);
        this.pages = [this.renderUserForm, this.renderInterestForm, this.renderReview];

        this.state = {
            pageNum: 0,
            rankType: 'Enlisted',
            popoverOpen: false
        };
    }

    toggle = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
        console.log(this.state.popoverOpen);
    }

    prevPage() {
        const { pageNum } = this.state;
        if (pageNum > 0)
            this.setState({ pageNum: pageNum - 1})
    }

    nextPage() {
        const { pageNum } = this.state;
        if (pageNum < this.pages.length - 1)
            this.setState({ pageNum: pageNum + 1 });
    }


    handleSubmit({ user, skills }) {
        this.props.addUser({ ...user, skills })
            .then( () => this.props.history.push('/list') );
    }

    renderCurrentActions(props) {
        let buttons;
        const { pageNum } = this.state;
        const { touched, errors, values } = props;

        switch (pageNum) {
            case 0:
                buttons = [
                    <button
                        key='next'
                        className='btn btn-primary'
                        onClick={ e => this.nextPage()}
                        disabled={!touched || !touched.user || (errors && errors.user)}
                    >
                        Next
                    </button>
                ];
                break;
            case 1:
                buttons = [
                    <button
                        key='prev'
                        className='btn btn-dark'
                        onClick={ e => this.prevPage()}
                    >
                        Prev
                    </button>,
                    <button
                        key='next'
                        className='btn btn-primary'
                        onClick={ e => this.nextPage()}
                        disabled={errors && errors.skills}
                    >
                        Next
                    </button>
                ];
                break;
            default:
                buttons = [
                    <button
                        key='submit'
                        className='btn btn-success'
                        onClick={ e => this.handleSubmit(values)}
                    >
                        Submit
                    </button>
                ];
        }

        return (
            <div key='actions' className='container pt-5'>
                { buttons }
            </div>
        );
    }

    renderPage(props) {
        const { pageNum } = this.state;
        const renderCurrentPage = this.pages[pageNum].bind(this);
        
        return (
            <div className="container pt-3 px-5 landing">

                <h2 className="text-white">Let's Start With Some Basic Information</h2>
                    <Form>
                        { renderCurrentPage(props) }
                        { this.renderCurrentActions(props) }
                    </Form>

            </div>
        );
    }

    renderUserForm(props) {
        const { values, errors, touched, setFieldTouched, setFieldValue } = props;
        const { rankType } = this.state;
        
        let ranksToShow;
        switch (rankType) {
            case 'Enlisted':
                ranksToShow = enlistedRanks.map( value => ({ key: value, text: value }) );
                break;
            case 'Officer':
                ranksToShow = officerRanks.map( value => ({ key: value, text: value }) );
                break;
            default:
                ranksToShow = [];
        }

        const handleRankTypeSelect = ({ key }) => {
            switch (key) {
                case 'Enlisted':
                case 'Officer':
                    break;
                default:
                    setFieldValue('user.rank', key);
                    setFieldTouched('user.rank', key);
            }

            this.setState({ rankType: key })
        };

        return [
            <div className="container mt-2 pt-2 text-left">
                <div key="name" className="row">
                    <div className="col-lg-4 d-none d-lg-block mt-2">
                        <label>First Name<span className="text-danger">*</span></label>
                    </div>
                    <div className="col-lg-8 d-none d-lg-block">
                        <input
                            key='firstName'
                            className='form-control'
                            name='user.firstName'
                            onBlur={e => setFieldTouched('user.firstName')}
                            onChange={v => setFieldValue('user.firstName', v.target.value)}
                            value={values.user.firstName}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 d-none d-lg-block mt-2">
                        <label>Last Name<span className="text-danger">*</span></label>
                    </div>
                    <div className="col-lg-8 d-none d-lg-block">
                        <input
                            key='lastName'
                            className='form-control'
                            name='user.lastName'
                            onBlur={ e => setFieldTouched('user.lastName') }
                            onChange={v => setFieldValue('user.lastName', v.target.value)}
                            value={values.user.lastName}
                            required
                        />

                    </div>
                </div>,
                <div key='id'>
                    <div className="row">
                        <div className="col-lg-4 d-none d-lg-block mt-2">
                            <label>DOD EDIPI <span className="text-danger">*</span></label>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block">
                            <input
                                type="text"
                                key='edipi'
                                className='form-control'
                                name='user.edipi'
                                onBlur={ e => setFieldTouched('user.edipi') }
                                onChange={v => setFieldValue('user.edipi', v.target.value)}
                                value={values.user.edipi}
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 d-none d-lg-block mt-2">
                            <label>Rank Type<span className="text-danger">*</span></label>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block mt-2">
                            <Dropdown
                                key='rank_type'
                                className='form-control'
                                defaultSelectedKey={rankType}
                                onChanged={handleRankTypeSelect}
                                options={rankTypes.map( value => ({ key: value, text: value }) )}
                                value={rankType}
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 d-none d-lg-block mt-2">
                            <label>Rank<span className="text-danger">*</span></label>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block mt-2">
                            <Dropdown
                                key='rank'
                                className='form-control'
                                placeHolder='Select a rank'
                                disabled={!ranksToShow.length}
                                defaultSelectedKey={values.user.rank}
                                errorMessage={ touched.user && touched.user.rank && errors.user && errors.user.rank }
                                onBlur={ e => setFieldTouched('user.rank') }
                                onChanged={v => setFieldValue('user.rank', v.key)}
                                options={ranksToShow}
                                value={values.user.rank}
                                required={ranksToShow.length}
                            />
                        </div>
                    </div>
                </div>,
                <div key='org' className='row'>
                    <div className="col-lg-4 d-none d-lg-block mt-2">
                        <label>Unit<span className="text-danger">*</span></label>
                    </div>
                    <div className="col-lg-8 d-none d-lg-block mt-2">
                        <Dropdown
                            key='unit'
                            className='form-control'
                            placeHolder='Select a unit'
                            defaultSelectedKey={values.user.squadron}
                            errorMessage={ touched.user && touched.user.squadron && errors.user && errors.user.squadron }
                            onBlur={ e => setFieldTouched('user.squadron') }
                            onChanged={v => setFieldValue('user.squadron', v.key)}
                            options={squadronList.map( val => ({ key: val, text: val }) )}
                            value={values.user.squadron}
                            required
                        />
                    </div>
                </div>
            </div>
        ];
    }

    renderInterestForm() {
        return (
            <div className="row">
                <div className="col-lg-8 d-block d-lg-block">
                    <div id="skillsAccordian">
                        <div className="card">
                            <div className="card-header">
                                <a className="card-link" data-toggle="collapse" href="#compSci">
                                    Computer Sciences
                                </a>
                            </div>
                            <div id="collapseOne" className="collapse show" data-parent="#skillsAccordian">
                                <div className="card-body">
                                    <div className="row">
                                        {
                                            computerSciece.map(skill => (
                                                <div className="col">
                                                    <SkillPopover skill={skill} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-block d-lg-block">
                    <div className="well">
                        Contains Clicked Tags
                    </div>
                </div>
            </div>
        );
    }

    renderReview(props) {
        const { values: { user, skills } } = props;
        const skillsReview = skills.map( (skill, index) => (
            <div className='form_row' key={index}>
                <span className='review_skill_name'>{ skill.name }</span>
            </div>
        ))
        return [
            <div className='form_row' key='name'>
                <span className='review_user_rank'>{ user.rank }</span>
                <span className='review_user_name'>{ `${user.firstName} ${user.lastName}` }</span>
            </div>,
            <div className='form_row' key='org'>
                <span className='review_user_org'>{ user.squadron }</span>
                <span className='review_user_id'>{ user.edipi }</span>
            </div>,
            <div className='form_row' key='skills'>
                { skillsReview }
            </div>
        ];
    }

    render() {
        return (
            <div className='container d-flex h-100 align-items-center'>
                <div className="mx-auto text-center">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => this.handleSubmit(values)}
                        validationSchema={validationSchema}
                        render={props => this.renderPage(props)}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addUser: user => dispatch(addNewUser(user)),
    }
};

export default connect(undefined, mapDispatchToProps)(AddUserCard);
