import express, { Application, Request, Response } from 'express'
import sequelizeConnection from './src/db/config'

sequelizeConnection();

const app: Application = express()
const port = 5000

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome our team's API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error) {
    if(error instanceof Error){
        console.log(`Error occurred: ${error.message}`)
    } else{
        console.log('Unexpected error', error)
    }
    
}