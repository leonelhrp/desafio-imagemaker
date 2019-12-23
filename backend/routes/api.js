const API_BASE = '/api';
const db = require('../db');

module.exports = (app) => {
	app.get(`${API_BASE}/characters`, (req, res) => {
		const query = db
			.getCharacters()
			.then(async (response) => {
				response.data.results = await response.data.results.map((item) => {
					return (({ id, name, status, species, gender, image }) => ({
						id,
						name,
						status,
						species,
						gender,
						image
					}))(item);
				});
				res.json(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}),
		app.get(`${API_BASE}/characters/:characterId`, (req, res) => {
			const query = db
				.getCharacterById(req.params.characterId)
				.then(async (response) => res.json(response.data))
				.catch((error) => {
					console.error(error);
				});
		}),
		app.get(`${API_BASE}/users`, (req, res) => {
			res.json('users');
		});

	app.post(`${API_BASE}/users/search`, (req, res) => {
		let userId = req.body.userId;
		client.hgetall(userId, (err, data) => {
			if (!data) {
				res.json('users', { message: 'No user exist' });
			} else {
				data.userId = userId;
				res.json('users', { users: data });
			}
		});
	});

	// hmset command accepts multiple key value at a time and overwrites any specified fields already existing in the hash. If key does not exist, a new key holding a hash is created.
	app.post(`${API_BASE}/users/add`, (req, res) => {
		let userId = req.body.userId;
		let name = req.body.name;
		let email = req.body.email;
		let password = req.body.password;
		client.hmset(userId, [ 'name', name, 'email', email, 'password', password ], (err, response) => {
			if (err) {
				console.log(err);
			} else {
				console.log(response);
				res.json('user', { user: response });
			}
		});
	});

	app.get(`${API_BASE}/users/delete/:userId`, function(req, res) {
		client.del(req.params.userId, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.redirect('/');
			}
		});
	});
};
