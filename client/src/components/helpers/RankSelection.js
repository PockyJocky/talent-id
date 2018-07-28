import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const RankSelection = ({
    name,
    value,
    error,
    info,
    options,
    onChange,
}) => {
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ));
    return (
        <div className='form-group'>
            <select
                className={classnames('form-control form-control-lg', {
                    'is-valid': error
                })}
                name={name}
                value={value}
                onChange={onChange}
            >
                {selectOptions}
            </select>
            {info && <small className='form-text text-muted'>{info}</small>}
            {error && <div className='invalid-feedback'>{error}</div>}
        </div>
    );
};

RankSelection.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    info: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func.isRequired
};



export default RankSelection;