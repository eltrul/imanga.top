module.exports = class userFunction
        {
            __constructor(db) 
            {
                this.db = db; 
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

            async function getToken() 
            {
                    
            }

            async function resetPassword(newPassword) 
                {
                        this.user.hashedPassword = crypto.SHA256(newPassword);
                        return await this.db.findOneAndUpdate({id: this.user.id}, {hashedPassword: crypto.SHA256(newPassword)}); 
                        
                }
        }
