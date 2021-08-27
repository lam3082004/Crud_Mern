const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

const Post = require('../models/Post')

//kiểm tra
router.get('/', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({
            user: req.userId
        }).populate('user', [
            //populate là bỏ vào
            'username'
        ])
        res.json({
            success: true,
            posts
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})

// @route POST api/posts
// @desc Create post

router.post('/', verifyToken, async (req, res) => {
    const {
        title,
        description,
        url,
        status
    } = req.body

    // Simple validation
    if (!title)
        return res
            .status(400)
            .json({
                success: false,
                message: 'Title is required'
            })

    try {
        const newPost = new Post({
            title,
            description,
            url: url.startsWith('https://') ? url : `https://${url}`,
            status: status || 'finished',
            user: req.userId
        })

        await newPost.save()

        res.json({
            success: true,
            message: 'made by bui tung lam',
            post: newPost
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


//update 
router.put('/:id', verifyToken, async (req, res) => {
    const {
        title,
        description,
        url,
        status
    } = req.body

    // Simple validation
    if (!title)
        return res
            .status(400)
            .json({
                success: false,
                message: 'Title is required'
            })

    try {
        let updatedPost = {
            title,
            description: description || '',
            url: (url.startsWith('https://') ? url : `https://${url}`) || '',
            status: status || 'finished'
        }

        const postUpdateCondition = {
            _id: req.params.id,
            user: req.userId
        }

        updatedPost = await Post.findOneAndUpdate(
            postUpdateCondition,
            updatedPost, {
                new: true
            }
        )

        // nếu mà ko update
        if (!updatedPost)
            return res.status(401).json({
                success: false,
                message: 'Không tìm thấy post đăng lên'
            })

        // nếu mà update
        res.json({
            success: true,
            message: 'xin giải nhất',
            post: updatedPost
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})
//delete post
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const postDeleteCondition = {
            _id: req.params.id,
            user: req.userId
        }
        const deletedPost = await Post.findOneAndDelete(postDeleteCondition)

        // giống như trên
        if (!deletedPost)
            return res.status(401).json({
                success: false,
                message: 'Không tìm thấy post đăng lên'
            })

        res.json({
            success: true,
            post: deletedPost
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


module.exports = router

//verifyToken là bác bảo vệ để kiểm tra