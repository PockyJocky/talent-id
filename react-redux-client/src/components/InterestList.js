import React, {Component} from 'react'
import {connect} from 'react-redux'

class InterestList extends Component{
    // eslint-disable-next-line
    constructor(props){ super(props) }
    render() {
        return(
            <div className = 'container'>
                {console.log(this.props.skillList)}
                {this.props.skillList.map((skill) => {
                    return (
                        <div className = 'keeper_of_the_skills'>
                            <ul className = 'skill_list'>
                                <li className = 'color_edge'/>
                                <li className = 'skill_item'>{skill.skillName}</li>
                                <li className = 'skill_item'>
                                    <input
                                        className = "small_slider"
                                        type = "range"
                                        min = '1'
                                        max = '5'
                                        step = '1'
                                        disabled = 'true'
                                        value = {skill.skillValue}
                                    />
                                </li>
                                <li className = 'skill_item'>
                                    <input
                                        className = "small_slider"
                                        type = "range"
                                        min = '1'
                                        max = '5'
                                        step = '1'
                                        disabled = 'true'
                                        value = {skill.interestValue}
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

