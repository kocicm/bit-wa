import React, { Component } from 'react';
import '../App.css';
import UserList from "../userList";
import userData from "../services/UserServices"
import UserGrid from "../userGrid";
import Loading from "./Loading";
import About from "./About";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./NotFound"

class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: [],
			showGrid: false,
			inputValue: '',
			search: [],
			mounted: false,
			startTime: 0,
			currentTime: 0,
			countTime: 0,
			searchMale: 0,
			searchFemale: 0,
		}

	}


	componentDidMount() {
		let view;

		if (localStorage.getItem('gridView') === "true") {
			view = false;
		} else {
			view = true
		}



		if (localStorage.getItem('arr') == null) {
			userData.getData()
				.then((response) => {
					this.setState({
						data: response,
						search: response,
						showGrid: view,
						mounted: true,
						startTime: new Date()
					})
					localStorage.setItem('arr', JSON.stringify(response));
					localStorage.setItem('timeStart', new Date);
				})
		} else {
			this.setState({
				data: JSON.parse(localStorage.getItem('arr')),
				search: JSON.parse(localStorage.getItem('arr')),
				showGrid: view,
				mounted: true,
				startTime: new Date()

			})
		}
		if (localStorage.getItem('timeStart') == null) {
			setInterval(
				() => {

					this.setState({
						currentTime: new Date(),
						countTime: new Date() - this.state.startTime
					})

					console.log((this.state.countTime) / 1000)
				}, 5000);
		} else {
			setInterval(
				() => {

					this.setState({
						currentTime: new Date(),
						countTime: new Date() - new Date(localStorage.getItem('timeStart'))
					})

				
				}, 5000);
		}




	}




	handleChange = () => {
		localStorage.setItem('gridView', this.state.showGrid)

		this.setState((prevState) => {
			return { showGrid: !prevState.showGrid }
		})
	}

	typing = (event) => {

		const search = this.state.data.filter(el => {
			return el.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		})
		const searchMale = search.filter((el)=> {
			return el.gender == 'male'
		})

		const searchFemale = search.filter((el)=> {
			return el.gender == 'female'
		})


		this.setState({
			inputValue: event.target.value,
			search,
			searchMale : searchMale.length,
			searchFemale : searchFemale.length
		})
	}

	additionalFetch() {
		localStorage.removeItem('arr');
	}

	countTime() { return (this.state.currentTime - this.state.startTime) }


	render() {

		return (
			<div className="App">
				<header className="App-header">
					<nav>
						<h1 className="App-title">BIT People</h1>
						<div className="nav-wrapper">
							<ul className="right hide-on-med-and-down">
								<li><Link to='/about'>About</Link></li>
								<li><a onClick={this.handleChange}><i className="material-icons">{this.state.showGrid ? "view_module" : "list"}</i></a></li>
								<li><a href="collapsible.html" onClick={this.additionalFetch}><i className="material-icons">refresh</i></a></li>
							</ul>
						</div>
					</nav>
				</header>

				<nav>
					<div className="nav-wrapper">
						<form>
							<div className="input-field">
								<input id="search" onChange={this.typing} value={this.state.inputValue} type="search" required />
								<label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
								<i className="material-icons">close</i>
							</div>
						</form>
					</div>
				</nav>
				{this.state.data.length === 0 ? <Loading /> : ""}
				{this.state.search.length === 0 && this.state.mounted === true ? <NotFound /> : <p>Male: {this.state.searchMale} : Female: {this.state.searchFemale}</p>}
				
				{this.state.showGrid ? <UserList arr={this.state.search} /> : <UserGrid arr={this.state.search} />}
				<footer className="App-footer">
					<h5 className="App-footer">© Copyright BIT       <span id="timer">{this.state.currentTime == 0 ? "" : "Last update " + (this.state.countTime/1000/60).toFixed(0) + " minutes ago"}</span></h5>
					

				</footer>
			</div>
		);
	}
}

export default Home;

