// chặn req kiếm tra xem có accessToken đúng không
const jwt = require('jsonwebtoken')

// chặm reqest lại 
const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]
    // phần tử 0 không phải là token cần lấy
    //phần tử thứ 0 là bearer 
    if (!token)
        return res
            .status(401)
            .json({
                success: false,
                message: 'Access token not found'
            })
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        req.userId = decoded.userId
        next()
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            success: false,
            message: 'Invalid token'
        })
    }
}

module.exports = verifyToken