```javascript
//Corrected aggregation query
db.users.aggregate([
  {
    $match: {
      age: { $gte: 18 },
      city: { $exists: true } // Ensure 'city' field exists
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  },
  { //Optional stage for better readability
    $sort: { averageAge: -1 }
  }
])
```