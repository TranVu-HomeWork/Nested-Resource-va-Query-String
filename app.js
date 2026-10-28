const express = require('express');
const orders = require('./data/orders');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/v1/users/:userId/orders', (req, res) => {
    const userId = Number(req.params.userId);

    const validUsers = [1, 2, 3];
    if (!validUsers.includes(userId)) {
        return res.status(404).json({
            success: false,
            error: {
                code: "USER_NOT_FOUND",
                message: "User does not exist"
            }
        });
    }

    const { status, limit } = req.query;

    let userOrders = orders.filter(order => order.userId === userId);
    if (status && ['pending', 'paid', 'cancelled'].includes(status)) {
        userOrders = userOrders.filter(order => order.status === status);
    }

    const totalRecords = userOrders.length;

    const limitNumber = limit ? Number(limit) : 5;

    userOrders = userOrders.slice(0, limitNumber);

    res.status(200).json({
        success: true,
        data: userOrders,
        meta: {
            total: totalRecords
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});