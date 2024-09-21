import '../components/App.module.css';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SeatchBox.jsx';

function App() {
	return (
		<div>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</div>
	);
}

export default App;
