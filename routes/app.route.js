import verifyUser from "../middleware/auth.middleware.js";
import * as User from '../controllers/user.controller.js'; 

const routes = (app) => {
   
/**
 * @swagger
 * /api/healthcheck:
 *   get:
 *     summary: Health check route to see if the API is running
 *     responses:
 *       200:
 *         description: API is healthy
 */

    app.get("/api/healthcheck", (req, res) => res.sendStatus(200));
   
    /**
     * @openapi
     * /api/register:
     *  post:
     *     tags:
     *     - User
     *     description: Register a new user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               fname:
     *                 type: string
     *                 description: First name of the user
     *               lname:
     *                 type: string
     *                 description: Last name of the user
     *               mobile:
     *                 type: string
     *                 description: Mobile number of the user
     *               email:
     *                 type: string
     *                 description: Email address of the user
     *               password:
     *                 type: string
     *                 description: Password for the user account
     *     responses:
     *       200:
     *         description: User registered successfully
     */

    app.post('/api/register', User.register);
    /**
     * @openapi
     * /api/login:
     *  post:
     *     tags:
     *     - User
     *     description: Login a user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               emailOrMobile:
     *                 type: string
     *                 description: Email or Mobile number of the user
     *               password:
     *                 type: string
     *                 description: Password for the user account
     *     responses:
     *       200:
     *         description: User logged in successfully
     */
    app.post('/api/login', User.login);
    /**
     * @openapi
     * /api/profileDetails:
     *  get:
     *     tags:
     *     - User
     *     description: Get user profile details
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: User profile details retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 statusCode:
     *                   type: integer
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                     fname:
     *                       type: string
     *                     lname:
     *                       type: string
     *                     mobile:
     *                       type: string
     *                     email:
     *                       type: string
     *       400:
     *         description: Invalid Token or Something Went Wrong
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 statusCode:
     *                   type: integer
     */
    app.get('/api/profileDetails', verifyUser, User.profileDetails);
    /**
     * @openapi
     * /api/logout:
     *  get:
     *     tags:
     *     - User
     *     description: Logout the current logged-in user
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Logout Successful
     *       400:
     *         description: Something Went Wrong, Please Try Again
     */
    app.get('/api/logout', verifyUser, User.logout);



    
}

export default routes;