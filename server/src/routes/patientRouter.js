const Router = require('express');
const { User, Patient } = require('../models/schemas');

const patientRouter = Router();

// Ruta para obtener un paciente por ID
patientRouter.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	console.log(`get patient with id: ${id}`);
	req.data = `get patient with id: ${id}`;
	req.statusCode = 200;
	next();
});

// Ruta para crear un nuevo paciente y nuevo usuario
patientRouter.post('/', async (req, res, next) => {

	const {
		email,
		password,
		dni,
		name,
		address,
		birthDate,
		gender,
		nationality,
		socialSecurityId
	} = req.body

	try {
		// Crear y guardar el nuevo usuario
		const newUser = new User({
			email,
			password,
			dni,
			name,
			address,
			birthDate,
			gender,
			nationality
		});

		await newUser.save();
		console.log(newUser);

		// Crear y guardar el nuevo paciente
		const newPatient = new Patient({ user: newUser._id, socialSecurityId });
		await newPatient.save();

		// Poblar la referencia 'user' en el paciente
		const patientWithUser = await newPatient.populate('user')

		req.data = patientWithUser
		req.statusCode = 201
		next()

	} catch (error) {
		next(error);
	}
});

module.exports = patientRouter;
