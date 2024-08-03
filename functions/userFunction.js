const crypto = require("crypto-js"); 

const jwt = require("jsonwebtoken"); 

module.exports = class userFunction
        {
            __constructor(db) 
            {
                this.db = db.Models().User; 
            }

            async function findUser(filter) 
            {
                this.db.findOne(filter)
                if (!this.db) return false; 
                return this;
            }

            function getUserData() 
            {
                return (this.user) ? this.user : false;
            }

            async function update(data) 
            {
                    return await this.db.findOneAndUpdate({id: this.user.id},data);
            } 

            function getToken() 
            {
                    return jwt.sign({username: this.user.username, id: this.user.id}, "TRY TO GUESS THAT ???????????", { algorithm: 'RS256' });
            }

            function validateToken(token) 
                {
                        var result = jwt.verify(token, "TRY TO GUESS THAT ???????????", { algorithm: 'RS256' }); 
                        return result; 
                }
            async function resetPassword(newPassword) 
                {
                        this.user.hashedPassword = crypto.SHA256(newPassword);
                        return await this.db.findOneAndUpdate({id: this.user.id}, {hashedPassword: crypto.SHA256(newPassword)}); 
                        
                }
        }
