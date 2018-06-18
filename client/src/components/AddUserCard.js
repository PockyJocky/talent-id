import React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { ComboBox } from 'office-ui-fabric-react/lib/ComboBox';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Formik, Form, FieldArray } from 'formik';
import { object, string, mixed, number, array } from 'yup';

const rankList = ['AB', 'Amn', 'A1C', 'SrA', 'SSgt', 'TSgt', 'MSgt', 'SMSgt', 'CMSgt'];
const squadronList = ['13 IS', '48 IS' ,'548 OSS', '9 IS', '548 ISRG'];

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
        this.pages = [this.renderUserForm, this.renderInterestForm];

        this.state = {
            pageNum: 0,
        };
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

    renderPage(props) {
        const { pageNum } = this.state;
        const page = this.pages[pageNum];
        const isFirstPage = pageNum === 0;
        const isLastPage = pageNum === (this.pages.length - 1);
        
        console.log(props)
        return [
            page(props),
            <div key='actions' className='actions'>
                <DefaultButton onClick={e => this.prevPage()} disabled={isFirstPage}>
                    Prev
                </DefaultButton>
                <DefaultButton onClick={e => this.nextPage()} disabled={isLastPage}>
                    Next
                </DefaultButton>
                <DefaultButton onClick={e => this.handleSubmit(props.values)} disabled={!isLastPage || !props.isValid}>
                    Submit
                </DefaultButton>
            </div>
        ];
    }

    renderUserForm(props) {
        const { values, errors, touched, setFieldTouched, setFieldValue } = props;
        return (
            <Form key='user'>
                <TextField
                    key='firstName'
                    name='user.firstName'
                    label='First Name'
                    errorMessage={ touched.user && touched.user.firstName && errors.user && errors.user.firstName }
                    onBlur={e => setFieldTouched('user.firstName')}
                    onChanged={v => setFieldValue('user.firstName', v)}
                    value={values.user.firstName} 
                    required
                />,
                <TextField
                    key='lastName'
                    label='Last Name'
                    errorMessage={ touched.user && touched.user.lastName && errors.user && errors.user.lastName }
                    onBlur={ e => setFieldTouched('user.lastName') }
                    onChanged={v => setFieldValue('user.lastName', v)}
                    value={values.user.lastName} 
                    required
                />,
                <TextField
                    key='edipi'
                    label='DOD ID Number'
                    errorMessage={ touched.user && touched.user.edipi && errors.user && errors.user.edipi }
                    onBlur={ e => setFieldTouched('user.edipi') }
                    onChanged={v => setFieldValue('user.edipi', v)}
                    value={values.user.edipi} 
                    required
                />,
                <Dropdown
                    key='rank'
                    label='Rank'
                    placeHolder='Select a rank'
                    defaultSelectedKey={values.user.rank}
                    errorMessage={ touched.user && touched.user.rank && errors.user && errors.user.rank }
                    onBlur={ e => setFieldTouched('user.rank') }
                    onChanged={v => setFieldValue('user.rank', v.key)}
                    options={rankList.map( val => ({ key: val, text: val }) )}
                    value={values.user.rank} 
                    required
                />,
                <Dropdown
                    key='unit'
                    label='Unit'
                    placeHolder='Select a unit'
                    defaultSelectedKey={values.user.squadron}
                    errorMessage={ touched.user && touched.user.squadron && errors.user && errors.user.squadron }
                    onBlur={ e => setFieldTouched('user.squadron') }
                    onChanged={v => setFieldValue('user.squadron', v.key)}
                    options={squadronList.map( val => ({ key: val, text: val }) )}
                    value={values.user.squadron} 
                    required
                />
            </Form>
        );
    }

    renderInterestForm(props) {
        const { values, errors, touched, setFieldTouched, setFieldValue } = props;
        return (
            <FieldArray
                key='interest'
                name='skills'
                render={ helpers => {
                    const addSkill = e => helpers.push({ name: '', proficiency: 3, interest: 3 });
                    let skillList = values.skills.map( (skill, index) => (
                        <div className='add_skill' key={index}>
                            <ComboBox
                                placeHolder='Enter a skill'
                                errorMessage={touched.skill && touched.skill.name && errors.skill && errors.skills.name}
                                autoComplete='on'
                                onChange={e => setFieldValue(`skills.${index}.name`, e.target.value)}
                                onBlur={e => setFieldTouched(`skills.${index}.name`)}
                                options={[]}
                                allowFreeform
                            />
                            <Slider
                                label='Proficiency'
                                onBlur={e => setFieldTouched(`skills.${index}.proficiency`)}
                                onChange={v => setFieldValue(`skills.${index}.proficiency`, v)}
                                defaultValue={3}
                                step={1}
                                min={1}
                                max={5}
                                showValue
                            />
                            <Slider
                                label='Interest'
                                onBlur={e => setFieldTouched(`skills.${index}.interest`)}
                                onChange={v => setFieldValue(`skills.${index}.interest`, v)}
                                defaultValue={3}
                                step={1}
                                min={1}
                                max={5}
                                showValue
                            />
                        </div>
                    ));

                    return (
                        <Form>
                            { skillList }
                            <DefaultButton key='add' onClick={addSkill}>
                                Add Another Skill
                            </DefaultButton>
                        </Form>
                    )
                }}
            />
        );
    }

    handleSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={values => this.handleSubmit(values)}
                validationSchema={validationSchema}
                render={props => this.renderPage(props)}
            />
        );
    }
}

export default AddUserCard;
