const Items = require('../models/items');
const items = require('../models/items');

class ItemsController {
    static async create(req, res) {
        try {
            const { name , Age , type   } = req.body;
            if (!name || !Age || !type ) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            
            const itemsData = {
                name,
                Age,
                type
                
            };
            const newItems = await items.create(itemsData);
            return res.status(201).json({ message: 'item criada com sucesso', data: newItems });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar item', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const Items = await items.find();
            return res.status(200).json({ data: Items });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar items', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;  
            const items = await Items.findById(id);
            if (!items) {
                return res.status(404).json({ message: 'item não encontrada' });
            }
            return res.status(200).json({ data: items });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar item', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, Age, type, real} = req.body;
            const updatedData = {
                name,
                Age,
                type,
                real
            };
            const updatedItems = await items.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedItems) {
                return res.status(404).json({ message: 'item não encontrada' });
            }
            return res.status(200).json({ message: 'item atualizada com sucesso', data: updatedItems });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar item', error: error.message });
        }
    }

    static async delete(req, res) {
  try {
    const item = await Items.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ error: "Item não encontrado" });
    }

    item.isActive = false;
    await item.save();

    return res.status(200).json({ message: "Item desativado" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar item" });
  }
}
}
    

module.exports = ItemsController;