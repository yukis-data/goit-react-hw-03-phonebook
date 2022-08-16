import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      {' '}
      Find contact by name{' '}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.input}
      />{' '}
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
