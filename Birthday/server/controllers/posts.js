import Birthday from '../models/Birthday.js'
import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
    try {
        const birthdays = await Birthday.find().sort({bdate:1})
        res.json(birthdays)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const birthday = req.body
    const newPost = new Birthday(birthday)

    try {
        await newPost.save()
        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req,res) => {
    const { id } = req.params;
    const birthday = req.body // this is updated post data

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await Birthday.findByIdAndUpdate(id, {...birthday, id}, { new: true })

    res.json(updatedPost);
}

export const deletePost = async (req,res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Birthday.findByIdAndRemove(id)

    res.json({message: 'Post Deleted'})
}