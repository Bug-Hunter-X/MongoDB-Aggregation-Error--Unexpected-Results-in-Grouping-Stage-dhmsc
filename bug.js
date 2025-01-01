```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  {
    $match: {
      age: { $gte: 18 }
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  }
])
```