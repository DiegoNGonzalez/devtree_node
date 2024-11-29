import { Router } from 'express'
import {body} from 'express-validator' 
import { createAccount, login } from './handlers'
import { handleInputErrors } from './middleware/validation'

const router = Router()

//Routing

/**Auth and register */

router.post('/auth/register',
     body('handle').notEmpty().withMessage('El handle no puede ir vacio'),
     body('name').notEmpty().withMessage('El nombre no puede ir vacio'),
     body('email').isEmail().withMessage('El correo no es valido'),
     body('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
     handleInputErrors,
     createAccount )


router.post('/auth/login',
    body('email').isEmail().withMessage('El correo no es valido'),
     body('password').notEmpty().withMessage('El password es obligatorio.'),
    handleInputErrors,
    login)     
export default router