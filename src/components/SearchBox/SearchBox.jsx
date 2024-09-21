import css from './SearchBox.module.css';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';

const SearchBox = ({ value, handleFilterChange }) => {
	const searchFieldId = useId();
	return (
		<Formik>
			<Form>
				<div className={css.form}>
					<label htmlFor={searchFieldId}>Find contacts by name</label>
					<Field
						className={css.field}
						type="text"
						name="name"
						id={searchFieldId}
						onChange={handleFilterChange}
						value={value}
					/>
				</div>
			</Form>
		</Formik>
	);
};

SearchBox.propTypes = {
	value: PropTypes.string,
	handleFilterChange: PropTypes.func,
};

export default SearchBox;
