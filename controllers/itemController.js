// controllers/itemController.js
import Item from '../models/item.js';

export const createItem = async (req, res) => {
  try {
    const { name, price, categoryId } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newItem = await Item.create({
      name,
      price,
      imageUrl,
      categoryId
    });

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error creating item' });
  }
};

export const getItemsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const items = await Item.findAll({ where: { categoryId } });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
};
