import React, { Component } from 'react';
import { enlistedRanks, officerRanks, otherRanks, ranks} from '../../const/ranks.js';


import { Input } from 'reactstrap';

class Ranks extends Component {
    constructor(props){
        super(props);

        this.state = {
          selectedRankType: this.props.rankType,
          selectOptions: {}
        };
    }

    handleSelectOptions = (selectedRankType) => {
      this.setState({selectOptions: selectedRankType})
    };

    render(){
        const currRank = this.state.rankType;

        const filteredRanks =  ranks.filter((o) => o.type === this.state.selectedRankType);


        return(
            <Input
                type="select"
                className="form-control w-100"
                name="rank"
                onChange={this.onChange}
                onBlur={this.onBlur}
            >
                {
                    filteredRanks.map(o => (
                        o.rankType === this.state.rankType
                            ? <option
                                key={o.rank}
                                value={o.rank}
                            >
                                o.rank
                            </option>
                            : "Select your rank type"
                    ))

                }
            </Input>
        )
    }
}

export default Ranks