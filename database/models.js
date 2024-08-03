
const mongoose = require("mongoose");

module.exports = function (mongoose) {
    schema = {
        userSchema: new mongoose.Schema({
            username: { type: String, required: true, unique: true },
            hashedPassword: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            profilePicture: { type: String },
            favoriteGenres: [{ type: String }],
            readingList: [
                { type: mongoose.Schema.Types.ObjectId, ref: "Manga" }
            ],
            followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
            following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
            bio: { type: String },
            website: { type: String },
            birthdate: { type: Date },
            gender: { type: String },
            location: { type: String }
        }),
        commentSchema: new mongoose.Schema({
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            content: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
            replies: [this], // Replies to comments
            editedAt: { type: Date } // To track when the comment was last edited
        }),
        mangaSchema: new mongoose.Schema({
            id: { type: Number, required: true },
            title: { type: String, required: true },
            alternativeTitles: [{ type: String }],
            author: { type: String },
            artists: [{ type: String }],
            genre: [{ type: String }],
            status: { type: String, enum: ["Ongoing", "Completed", "Hiatus"] },
            description: { type: String },
            coverImage: { type: String },
            releaseDate: { type: Date },
            rating: { type: Number, min: 0, max: 10 },
            views: { type: Number, default: 0 },
            chapters: [
                {
                    chapterNumber: { type: Number, required: true },
                    title: { type: String },
                    pages: [{ type: String }],
                    releaseDate: { type: Date },
                    translator: { type: String },
                    editor: { type: String },
                    comments: [commentSchema]
                }
            ],
            originalLanguage: { type: String },
            publisher: { type: String },
            publisherId: { type: Number, required: true }
        })
    };
    return {
        User: new mongoose.Model("Users", schema.userSchema),
        Comment: new mongoose.Model("Comments", schema.commentSchema),
        Manga: new mongoose.Model("Mangas", schema.mangaSchema)
    };
};
