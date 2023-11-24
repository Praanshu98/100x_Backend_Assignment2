# 100x Microblogging Schema Design

## 1. Users Table (table name : users)

-   **id:** Unique identifier for each user (Primary Key, INT).
-   **username:** User's chosen name (VARCHAR).
-   **email:** User's email address (VARCHAR).
-   **password_hash:** Hashed password for security (VARCHAR).
-   **bio:** Short user biography (VARCHAR).
-   **profile_pic:** Link to profile picture (VARCHAR).
-   **join_date:** Date the user joined (DATETIME).
-   **location:** Optional user location (VARCHAR).

### Description

-   **Role:** The Users table is the central entity in the schema. It stores all the essential information about the users of the platform, such as their username, email, bio, and other personal details.
-   **Relationships:**
    -   **To Posts:** A one-to-many relationship exists between Users and Posts. A single user can create multiple posts.
    -   **To Follows:** Users have a self-referencing many-to-many relationship in the Follows table. A user can follow many other users and be followed by many.
    -   **To Likes:** There is a one-to-many relationship between Users and Likes. A user can like multiple posts.

## 2. Posts Table (table name : posts)

-   **id:** Unique identifier for each post (Primary Key, INT).
-   **user_id:** ID of the user who posted (Foreign Key referencing users.id, INT).
-   **content:** Text of the post (VARCHAR).
-   **creation_time:** Time when the post was made (DATETIME).
-   **is_reply:** Boolean to indicate if the post is a reply (BOOLEAN).
-   **original_post_id:** If the post is a reply, ID of the original post (Foreign Key referencing posts.id, INT, NULLABLE).

### Description

-   **Role:** This table holds the content posted by users. It includes information about the posts, such as the content, creation time, and whether it's a reply to another post.
-   **Relationships:**
    -   **From Users:** Posts are linked to Users through the user_id. Each post is associated with the user who created it.
    -   **To Likes:** Posts have a one-to-many relationship with Likes. A single post can be liked by multiple users.
    -   **Self-Referencing:** The Posts table has a self-referencing relationship for handling replies. A post (reply) can reference another post as its original post.

#### Note

-   The Posts table is designed to handle both posts and replies. A post is considered a reply if the `is_reply` field is TRUE and the `original_post_id` is not NULL. The `original_post_id` links the reply to the original post. This ensures that replies can only be made to original posts and not other replies.

## 3. Follows Table (table name : followers)

-   **follower_id:** ID of the following user (Foreign Key referencing user.id, INT).
-   **following_id:** ID of the followed user (Foreign Key referencing users.id, INT).
-   **FollowTime:** Time when the follow occurred (DATETIME).
-   **Constraint:** Primary Key on (FollowerID, FollowingID), CHECK (FollowerID != FollowingID) to prevent self-following.

### Description

-   **Role:** The Follows table manages the following relationships between users. It tracks who follows whom and the time of the follow.
-   **Relationships:**
    -   **From Users:** The Follows table references the Users table twice for follower_id and following_id, representing the many-to-many relationship between users in terms of followers and followees.

## 4. Likes Table (table name : likes)

-   **user_id:** ID of the user who liked the post (Foreign Key referencing users.id, INT).
-   **post_id:** ID of the liked post (Foreign Key referencing posts.id, INT).
-   **like_date_time:** Time when the post was liked (DATETIME).
-   **Constraint:** Primary Key on (UserID, PostID) to ensure a user can only like a post once.

### Description

-   **Role:** This table is dedicated to capturing the likes on posts by users. It stores which user liked which post and the timestamp of the like.
-   **Relationships:**
    -   **From Users:** Each record in the Likes table is linked to a user, indicating who liked the post.
    -   **From Posts:** It is also linked to the Posts table, indicating which post was liked.
