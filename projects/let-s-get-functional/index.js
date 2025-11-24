// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
  const males = _.filter(array, function(customer) {
    return customer.gender === 'male'
  })
  return males.length
};

var femaleCount = function(array) {
    return _.filter(array, function(customer){
        return customer.gender === 'female'
    }).length
};

var oldestCustomer = function(array) {
    var oldest = _.reduce(array, function(acc, customer) {
        if (customer.age < acc.age) {
            return acc
        } else {
            return customer
        }
    }).name
    return oldest
};

var youngestCustomer = function(array) {
    var youngest = _.reduce(array, function(acc, customer) {
        if (customer.age > acc.age) {
            return acc
        } else {
            return customer
        }
    }).name
    return youngest
};;

var averageBalance = function(array) {
    var balance = _.reduce(array, function(acc, customer) {
        acc += Number(customer.balance.replace(/[$,]/g, ''))
        return acc
    }, 0)
    return balance / array.length
};

var firstLetterCount = function(array, letter) {
    const count = _.filter(array, function(customer) {
        return customer.name[0].toLowerCase() === letter.toLowerCase()
    })
    return count.length
};

var friendFirstLetterCount = function(array, customer, letter) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            var friendo = _.filter(array[i].friends, function(friend) {
                return friend.name[0].toLowerCase() === letter.toLowerCase()
            })
            return friendo.length
        }
    }
};;

var friendsCount = function (array, name) {
    var output = []
    for (let i = 0; i < array.length; i++) {
        var friendo= _.filter(array[i].friends, function(friend) {
            return friend.name === name
        }) 
        if (friendo.length > 0) {
            output.push(array[i].name)
        }
    }
    return output
};

var topThreeTags = function(array) {
    var count = _.reduce(array, function(acc, current) {
        var tag = current.tags
        for (let i = 0; i < tag.length; i++) {
            let tags = tag[i]
            if(acc[tags]) {
                acc[tags]++
            } else {
                acc[tags] = 1
            }
        }
        return acc
    }, {})
var order = Object.keys(count).sort(function (first, second) {
    return count[second] - count[first]
})
return order.slice(0, 3)
};

var genderCount = function(array) {
    return _.reduce(array, function(acc, current) {
        var gender = current.gender
        if (acc[gender]) {
            acc[gender]++
        } else {
            acc[gender] = 1
        }
        return acc
    }, {})
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
