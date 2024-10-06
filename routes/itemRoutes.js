// routes/itemRoutes.js
import express from 'express';
import upload from '../config/multerConfig.js';
import { createItem, getItemsByCategory } from '../controllers/itemController.js';
import verifyUser from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - categoryId
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the item
 *         name:
 *           type: string
 *           description: The name of the item
 *         price:
 *           type: number
 *           description: The price of the item
 *         imageUrl:
 *           type: string
 *           description: The URL of the item image
 *         categoryId:
 *           type: integer
 *           description: The ID of the category the item belongs to
 *       example:
 *         id: 1
 *         name: Margherita Pizza
 *         price: 10.99
 *         imageUrl: "/uploads/pizza.jpg"
 *         categoryId: 1
 */

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Add a new item to a category
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               categoryId:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: The item was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       500:
 *         description: Some server error
 */
router.post('/items', upload.single('image'), verifyUser,createItem);

/**
 * @swagger
 * /categories/{categoryId}/items:
 *   get:
 *     summary: Get items by category
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the category
 *     responses:
 *       200:
 *         description: A list of items in the category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 *       500:
 *         description: Some server error
 */
router.get('/categories/:categoryId/items', verifyUser,getItemsByCategory);

export default router;
