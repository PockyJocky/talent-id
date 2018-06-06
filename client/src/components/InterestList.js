import React, {Component} from 'react'
import {connect} from 'react-redux'

export class InterestList extends Component{
    // eslint-disable-next-line
    constructor(props){ super(props)
    this.state = {
        skillList: this.props.skillList
    }
    }
    render() {
        return(
            <div className = 'container'>
                {
                this.props.skillList.map((skill) => {
                        return (
                            <div className='keeper_of_the_skills' key={skill.skillName}>
                                <ul className='skill_list'>
                                    <li className='color_edge'/>
                                    <li className='skill_item skill_item_name'>{skill.skillName}</li>
                                    <li className='skill_item small_slider'>
                                        <input
                                            type="range"
                                            min='1'
                                            max='5'
                                            step='1'
                                            disabled='true'
                                            value={skill.skillValue}
                                        />
                                    </li>
                                    <li className='skill_item small_slider'>
                                        <input
                                            type="range"
                                            min='1'
                                            max='5'
                                            step='1'
                                            disabled='true'
                                            value={skill.interestValue}
                                        />
                                    </li>
                                </ul>
                            </div>
                        )
                    })}

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{skillList: state.interestCard.skillList}
}

export default connect(mapStateToProps)(InterestList)

