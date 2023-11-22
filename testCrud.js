const { Users, Posts, Followers, Likes } = require("./models");

async function createRecords() {
    // First User
    const user1 = await Users.create({
        username: "Goku",
        email: "goku@dragon.com",
        password_hash: "123456",
        bio: "kamehameha!",
        join_date: new Date(),
    });

    // Second User
    const user2 = await Users.create({
        username: "Gohan",
        email: "gohan@dragon.com",
        password_hash: "123456",
        bio: "kamehameha!",
        join_date: new Date(),
    });

    // First user's Post
    const post1 = await Posts.create({
        user_id: user1.id,
        content: "Hello, World!",
        creation_time: new Date(),
    });

    // Second User's Post
    const post2 = await Posts.create({
        user_id: user2.id,
        content: "Hello, World Again!",
        creation_time: new Date(),
    });

    // First User starts following Second User
    await Followers.create({
        follower_id: user1.id,
        following_id: user2.id,
        follow_time: new Date(),
    });

    // ** Uncomment below code to check constraint of follower and following can not be same user **
    // await Followers.create({
    //     follower_id: user1.id,
    //     following_id: user1.id,
    //     follow_time: new Date(),
    // });

    // First user likes their own post
    await Likes.create({
        user_id: user1.id,
        post_id: post1.id,
        like_date_time: new Date(),
    });

    // Second user likes First's user's post
    await Likes.create({
        user_id: user2.id,
        post_id: post1.id,
        like_date_time: new Date(),
    });

    // First user likes Second user's post
    await Likes.create({
        user_id: user1.id,
        post_id: post2.id,
        like_date_time: new Date(),
    });

    // Second user likes their own post
    await Likes.create({
        user_id: user2.id,
        post_id: post2.id,
        like_date_time: new Date(),
    });

    // First user re-posts Second user's tweet
    await Posts.create({
        user_id: user1.id,
        content: post2.content,
        creation_time: new Date(),
        is_reply: 1,
        original_post_id: post2.id,
    });
}

createRecords();
