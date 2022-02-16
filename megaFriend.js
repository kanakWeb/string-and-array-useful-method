function megaFriends(friends) {

    if (Array.isArray(friends) == false) {
        return "no exists"

    }

    let mega = friends[0];
    for (const friend of friends) {

        if (friend.length > mega.length) {
            mega = friend;
        }

    }
    return mega;

}

//const friendName = ['kanak', 'sabbir', 'rahim', 'tutol', 'tomali'];
const TotalFriend = megaFriends(1212121);

console.log(TotalFriend)